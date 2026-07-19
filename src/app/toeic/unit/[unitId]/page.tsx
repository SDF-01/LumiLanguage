import { notFound } from "next/navigation";
import { UnitPlayer } from "@/components/learning/unit-player";
import { getUnit } from "@/content/catalog";

export default async function ToeicUnitPage({
  params,
}: {
  params: Promise<{ unitId: string }>;
}) {
  const { unitId } = await params;
  const unit = getUnit(unitId);
  if (!unit || unit.pathId !== "toeic") notFound();
  return <UnitPlayer unit={unit} />;
}
