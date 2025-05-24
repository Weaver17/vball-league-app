import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getPlayerType } from "@/lib/utils";

function PlayerTypeHC({ type }: { type: string }) {
    const playerType = getPlayerType(type);

    return (
        <HoverCard>
            <HoverCardTrigger>{playerType?.name}</HoverCardTrigger>
            <HoverCardContent className="w-[800px]">
                <p className="text-center mb-2 font-medium">
                    {playerType?.summary}
                </p>
            </HoverCardContent>
        </HoverCard>
    );
}

export default PlayerTypeHC;
