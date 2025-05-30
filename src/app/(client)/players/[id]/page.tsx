import { getPlayerById } from "@/actions/actions";
import LevelHC from "@/components/hover-cards/level-hc";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { images } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileLabel = ({ text }: { text: string }) => {
    return <h5 className="border-b border-secondary font-medium">{text}</h5>;
};

async function PlayerIdPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const player = await getPlayerById(id);

    // PLAYER.PROFILEIMAGE ? IMAGE : DEFAULT

    return (
        <section className="section flex-row! gap-4">
            <div className="w-1/3">
                <div className="container gap-4! ">
                    <h3 className="text-center">
                        {player?.firstName} {player?.lastName}
                    </h3>
                    <div className="flex gap-4 justify-evenly">
                        <div className="flex flex-col gap-1 text-center">
                            <ProfileLabel text="Level" />
                            <LevelHC level={player?.level ?? ""} />
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <ProfileLabel text="Main Position" />
                            <p>{player?.mainIndoorPosition}</p>
                        </div>
                    </div>
                    {/* IMAGE  */}
                    <AspectRatio ratio={9 / 12}>
                        <Image
                            src={images.defaultProfilePic}
                            alt={player?.firstName ?? "Player Image"}
                            fill
                            className=""
                        />
                    </AspectRatio>
                </div>
            </div>
            <div className="w-2/3">
                <div className="container">
                    <div className="flex gap-4 justify-evenly mb-4">
                        <div className="flex flex-col gap-2 text-center">
                            <ProfileLabel text="Gender" />
                            <p>{player?.gender}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <ProfileLabel text="Height" />
                            <p>{player?.height}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-evenly">
                        <div className="flex flex-col gap-2 text-center">
                            <ProfileLabel text="Preferred Court Type" />
                            <p>{player?.preferredCourtType}</p>
                        </div>

                        <div className="flex flex-col gap-2 text-center">
                            <ProfileLabel text="Secondary Position" />
                            <p>{player?.secondIndoorPosition}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <ProfileLabel text="Beach Position" />
                            <p>{player?.beachPosition}</p>
                        </div>
                    </div>
                </div>
                <div className="container flex-row! justify-evenly gap-4">
                    <div className="text-center flex flex-col gap-4">
                        <ProfileLabel text="Teams" />
                        {player?.teams && player?.teams.length > 0 ? (
                            player.teams.map((team) => (
                                <p key={team.id}>
                                    <Link href={`/teams/${team.id}`}>
                                        {team.name}
                                    </Link>
                                </p>
                            ))
                        ) : (
                            <p>None</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-8 justify-evenly text-center">
                        <div className="flex flex-col gap-4">
                            <ProfileLabel text="Captains" />
                            {player?.captainOf &&
                            player?.captainOf.length > 0 ? (
                                player.captainOf.map((team) => (
                                    <p key={team.id}>
                                        <Link href={`/teams/${team.id}`}>
                                            {team.name}
                                        </Link>
                                    </p>
                                ))
                            ) : (
                                <p>None</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-4">
                            <ProfileLabel text="Commissioner of" />
                            {player?.commissionerOf &&
                            player?.commissionerOf.length > 0 ? (
                                player.commissionerOf.map((league) => (
                                    <p key={league.id}>
                                        <Link href={`/leagues/${league.id}`}>
                                            {league.name}
                                        </Link>
                                    </p>
                                ))
                            ) : (
                                <p>None</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlayerIdPage;
