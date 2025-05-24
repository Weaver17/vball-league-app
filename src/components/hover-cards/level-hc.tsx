import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getLevelOfPlay } from "@/lib/utils";

function LevelHC({ level }: { level: string }) {
    const playLevel = getLevelOfPlay(level);

    return (
        <HoverCard>
            <HoverCardTrigger>{playLevel?.name}</HoverCardTrigger>
            <HoverCardContent className="w-[800px]">
                <h6 className="underline font-semibold text-center mb-2">
                    {playLevel?.title}
                </h6>
                <p className="text-center mb-2 font-medium">
                    {playLevel?.summary}
                </p>
                <ul>
                    {playLevel?.description.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </HoverCardContent>
        </HoverCard>
    );
}

export default LevelHC;
