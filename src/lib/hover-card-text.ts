export const OPEN = {
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
        "- Play with positions: outside hitter, middle hitter, right side hitter, setter, opposite, defensive specialist, and libero",
    ],
} as TLevelOfPlay;

export const A_DOUBLE_A = {
    id: 1,
    name: "A/AA",
    title: "High Level of Play",
    summary:
        "Extremley high level players. Highly athletic. Indoors players use complex offenses. Beach teams have blocking calls. Passing is consistent",
    description: [
        "- Has the ability to hit with different hits at the same position",
        "- Setters understand/run tempo sets and run different types of offenses",
        "- Passes almost always get to the setter so they can set all three hitters",
        "- Know what 5-1, 6-2, and 4-2 offenses are and how to use them",
        "- Play with positions: outside hitter, middle hitter, right side hitter, setter, and libero",
    ],
} as TLevelOfPlay;

export const B_DOUBLE_B = {
    id: 1,
    name: "B/BB",
    title: "Solid Level of Play",
    summary:
        "Good players. Athletic. Indoors players know to pass to the setter. Beach teams have blocking calls. Passing is decent",
    description: [
        "- Has the ability to do an approach and hit the ball",
        "- Setters understand setting positions and can spread the ball around",
        "- Knows how to cover the court defensively during a serve and during a hit",
        "- Has a thorough understanding of different types of sets to each hitter",
        "- Knows of all the technical rules of the game",
    ],
} as TLevelOfPlay;

export const C_DOUBLE_C = {
    id: 1,
    name: "C/CC",
    title: "Beginner Level of Play",
    summary:
        "Beginner players. Athletic, and can play multiple positions. Beach teams may or may not block.",
    description: [
        "- Has an understanding of rules",
        "- Games have a set position for the setter and each person on the team gets a chance to be setter",
        "- Can control their momentum and land safely on their side of the court after going up for a hit",
        "- Know to attempt to block when a hitter is front of them",
        "- Players play the position into which they rotate rather than assigned positions",
    ],
} as TLevelOfPlay;

export const BEER = {
    id: 1,
    name: "Beer",
    title: "For the Fun of Playing",
    summary:
        "Players just looking to have a good time. Usually played casually with drinks involved, hence the name. Players play to win but the main goal is fun.",
    description: [
        "- Knows the general rules of the game but may not know the more technical rules",
        "- May or may not understand basic positions and how to rotate",
        "- When hitting the ball over the net, mainly focuses on keeping it in bounds",
        "- May or may not understand how to score points, keep score, and when to announce the score",
        "- Many sets/passes/hits are technically carries. Hitters do not utilize a true approach. Many points are “given” due to execution errors, i.e. shanks, bad passes etc.",
    ],
} as TLevelOfPlay;

export const MENS = {
    id: 1,
    name: "Men's",
    summary:
        "Men's leagues play with a higher net (7 feet 11 5/8 inches) and usually have an opposite hitter on the right side wether front row or back row. They typically have faster swing speeds, shorter rallies, and put more emphasis on jump serving.",
} as TPlayerType;

export const WOMENS = {
    id: 2,
    name: "Women's",
    summary:
        "Women's leagues play with a lower net (7 feet 4 1/8 inches) and usually have the middle run slides to hit from the right side. They typically have longer rallies with more emphasis on defense.",
} as TPlayerType;

export const COED = {
    id: 3,
    name: "Co-ed",
    summary:
        "Co-ed leagues usually play on men's net height but some leagues will set it somewhere in between men's and women's. The gender split can be 4-to-2, 3-to-3, 3-to-1, 2-to-2, and 1-to-1 and are usually lower level leagues that promote fairness and fun.",
} as TPlayerType;

export const REVCO = {
    id: 3,
    name: "Rev-co",
    summary:
        "Rev-co or Reverse-Co-ed leagues are formatted similarly to co-ed but plays with women's net height and only women can attack from the front row. Wether men can hit or block varies from league to league, but the main emphasis is the guys set and the girls hit.",
} as TPlayerType;
