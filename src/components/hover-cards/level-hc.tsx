import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

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

const OPEN = {
    id: 1,
    name: "Open",
    title: "The Highest Level of Play",
    summary:
        "Superb players. Highly athletic. Indoors players use complex offenses. Beach teams have dynamic blocking calls. Passing is stellar",
    description: [
        "- Has the ability to hit with different hits at the same position",
        "- Setters understand/run tempo sets and run different types of offenses",
        "- Passes regularly get to the setter so they can set all three hitters",
        "- Know what 5-1, 6-2, and 4-2 offenses are and how to use them",
        " - Play with positions: outside hitter, middle hitter, right side hitter, setter, opposite and defensive specialist",
    ],
} as TLevelOfPlay;

export const getLevelOfPlay = (level: string) => {
    switch (level) {
        case "Open":
            return OPEN;
        default:
            return null;
    }
};
