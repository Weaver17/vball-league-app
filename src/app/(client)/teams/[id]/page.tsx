import { getTeamById } from "@/actions/actions";
import PageLabel from "@/components/app/page/label";
import TeamJoinLeague from "@/components/app/page/team-join-league";
import LevelHC from "@/components/hover-cards/level-hc";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { BEACH_POSITIONS, images, INDOOR_POSITIONS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

async function TeamIdPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const team = await getTeamById(id);

    // PLAYER.PROFILEIMAGE ? IMAGE : DEFAULT

    return (
        <section className="section flex-row! gap-4">
            <div className="w-1/3">
                <div className="container gap-2! ">
                    <h3 className="text-center">{team?.name}</h3>
                    <div className="flex gap-4 justify-evenly">
                        <div className="flex flex-col gap-1 text-center">
                            <PageLabel text="Level" />
                            <LevelHC level={team?.level ?? ""} />
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Roster Size" />
                            <p>{team?.rosterSpots}</p>
                        </div>
                    </div>
                    {/* IMAGE  */}
                    <AspectRatio ratio={10 / 12}>
                        <Image
                            src={images.defaultTeamPic}
                            alt={team?.name ?? "Team Image"}
                            fill
                            className=""
                        />
                    </AspectRatio>
                    {/* TEAM COACH  */}
                    <div className="flex flex-col gap-2 text-center">
                        <PageLabel text="Head Coach" />
                        <p>HEAD COACH</p>
                    </div>
                </div>
            </div>
            <div className="w-2/3">
                <div className="container">
                    <div className="flex flex-wrap gap-4 justify-evenly">
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Player Type" />
                            <p>{team?.playerType}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Court Type" />
                            <p>{team?.courtType}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <TeamJoinLeague
                                league={team?.league as League}
                                teamCaptainId={team?.teamCaptain?.id ?? ""}
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Captain" />
                            <p>
                                <Link
                                    href={`/players/${team?.teamCaptain?.id}`}
                                >
                                    {team?.teamCaptain?.firstName}{" "}
                                    {team?.teamCaptain?.lastName}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container flex-row! justify-evenly gap-4">
                    <div className="text-center flex flex-col gap-4">
                        {team?.courtType === "Beach" && (
                            <div className="flex  gap-12 justify-evenly">
                                <div className="space-y-2">
                                    <PageLabel
                                        text={BEACH_POSITIONS[0].label}
                                    />
                                    {team?.players.map((player) => {
                                        if (
                                            player.beachPosition ===
                                            BEACH_POSITIONS[0].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="space-y-2">
                                    <PageLabel
                                        text={BEACH_POSITIONS[1].label}
                                    />
                                    {team?.players.map((player) => {
                                        if (
                                            player.beachPosition ===
                                            BEACH_POSITIONS[1].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="space-y-2">
                                    <PageLabel
                                        text={BEACH_POSITIONS[2].label}
                                    />
                                    {team?.players.map((player) => {
                                        if (
                                            player.beachPosition ===
                                            BEACH_POSITIONS[2].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        )}
                        {team?.courtType === "Court" && (
                            <div className="flex flex-wrap gap-4 justify-evenly">
                                <div className="space-y-2">
                                    <PageLabel
                                        text={INDOOR_POSITIONS[0].label}
                                    />
                                    {team?.players.map((player) => {
                                        if (
                                            player.mainIndoorPosition ===
                                            INDOOR_POSITIONS[0].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="space-y-2">
                                    <PageLabel
                                        text={INDOOR_POSITIONS[1].label}
                                    />
                                    {team?.players.map((player) => {
                                        if (
                                            player.mainIndoorPosition ===
                                            INDOOR_POSITIONS[1].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="space-y-2">
                                    <PageLabel
                                        text={INDOOR_POSITIONS[2].label}
                                    />

                                    {team?.players.map((player) => {
                                        if (
                                            player.mainIndoorPosition ===
                                            INDOOR_POSITIONS[2].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="space-y-2">
                                    <PageLabel
                                        text={INDOOR_POSITIONS[3].label}
                                    />

                                    {team?.players.map((player) => {
                                        if (
                                            player.mainIndoorPosition ===
                                            INDOOR_POSITIONS[3].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="space-y-2">
                                    <PageLabel
                                        text={INDOOR_POSITIONS[4].label}
                                    />

                                    {team?.players.map((player) => {
                                        if (
                                            player.mainIndoorPosition ===
                                            INDOOR_POSITIONS[4].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="space-y-2">
                                    <PageLabel
                                        text={INDOOR_POSITIONS[5].label}
                                    />

                                    {team?.players.map((player) => {
                                        if (
                                            player.mainIndoorPosition ===
                                            INDOOR_POSITIONS[5].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="space-y-2">
                                    <PageLabel
                                        text={INDOOR_POSITIONS[6].label}
                                    />

                                    {team?.players.map((player) => {
                                        if (
                                            player.mainIndoorPosition ===
                                            INDOOR_POSITIONS[6].label
                                        ) {
                                            return (
                                                <p key={player.id}>
                                                    <Link
                                                        href={`/players/${player.id}`}
                                                    >
                                                        {player.firstName}{" "}
                                                        {player.lastName}
                                                    </Link>
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamIdPage;
