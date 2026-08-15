"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { haptic } from "@/lib/haptics";

type Point = { x: number; y: number };

export function StrokePad({
  glyph,
  onPass,
  onFail,
  checkLabel,
  clearLabel,
  disabled,
}: {
  glyph: string;
  onPass: () => void;
  onFail: () => void;
  checkLabel: string;
  clearLabel: string;
  disabled?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const [ink, setInk] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  function pos(event: React.PointerEvent<HTMLCanvasElement>): Point | null {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
  }

  function start(event: React.PointerEvent<HTMLCanvasElement>) {
    if (disabled) return;
    const canvas = canvasRef.current;
    const point = pos(event);
    if (!canvas || !point) return;
    drawing.current = true;
    canvas.setPointerCapture(event.pointerId);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 14;
    ctx.strokeStyle = "#2a9e9e";
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  }

  function move(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current || disabled) return;
    const canvas = canvasRef.current;
    const point = pos(event);
    if (!canvas || !point) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    setInk((value) => value + 1);
  }

  function end() {
    drawing.current = false;
  }

  function clear() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setInk(0);
    setMessage(null);
    haptic("tap");
  }

  function check() {
    if (disabled) return;
    if (ink < 18) {
      setMessage("Trace the whole character — a tiny tap is not enough.");
      haptic("bad");
      onFail();
      return;
    }
    setMessage("Nice ink. Keep top-to-bottom, left-to-right.");
    haptic("ok");
    onPass();
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden rounded-2xl border-2 border-[var(--brand-border)] bg-white">
        <p
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center font-jp text-[7.5rem] font-semibold text-[var(--brand-primary)]/15"
        >
          {glyph}
        </p>
        <canvas
          ref={canvasRef}
          width={360}
          height={280}
          className="relative z-[1] h-56 w-full touch-none"
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="secondary"
          className="min-h-12 rounded-2xl border-2 border-[var(--brand-border)] bg-white font-bold"
          onClick={clear}
          disabled={disabled}
        >
          {clearLabel}
        </Button>
        <Button
          type="button"
          className="pressable min-h-12 rounded-2xl border-0 bg-[var(--brand-primary)] font-bold text-white hover:bg-[var(--brand-primary-deep)]"
          onClick={check}
          disabled={disabled}
        >
          {checkLabel}
        </Button>
      </div>
      {message && (
        <p className="text-sm font-medium text-[var(--brand-primary-deep)]">
          {message}
        </p>
      )}
    </div>
  );
}
