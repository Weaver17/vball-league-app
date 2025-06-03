import { getLeagueById } from "@/actions/actions";
import PageLabel from "@/components/app/page/label";
import LevelHC from "@/components/hover-cards/level-hc";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

async function LeagueIdPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const league = await getLeagueById(id);

    // PLAYER.PROFILEIMAGE ? IMAGE : DEFAULT

    return (
        <section className="section flex-row! gap-4">
            <div className="w-1/3">
                <div className="container gap-4! ">
                    <h3 className="text-center">{league?.name}</h3>
                    <div className="flex gap-4 justify-evenly">
                        <div className="flex flex-col gap-1 text-center">
                            <PageLabel text="Level" />
                            <LevelHC level={league?.level ?? ""} />
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="League Size" />
                            <p>{league?.teamSlots} Teams</p>
                        </div>
                    </div>
                    {/* IMAGE  */}
                    <AspectRatio ratio={10 / 12}>
                        <Image
                            src={images.defaultLeaguePic}
                            alt={league?.name ?? "League Image"}
                            fill
                            className=""
                        />
                    </AspectRatio>
                    <div className="flex flex-col gap-4 items-center">
                        <PageLabel text="Commissioner" />
                        <p>
                            {league?.commissioner?.firstName}{" "}
                            {league?.commissioner?.lastName}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-2/3">
                <div className="container">
                    <div className="flex flex-wrap gap-4 justify-evenly">
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Player Type" />
                            <p>{league?.playerType}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Court Type" />
                            <p>{league?.courtType}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Start Date" />
                            <p>{league?.starts.toDateString()}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="End Date" />
                            <p>{league?.ends.toDateString()}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Status" />
                            <p>{league?.status}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <PageLabel text="Day(s)" />
                            <p>{league?.day}</p>
                        </div>
                    </div>
                </div>
                <div className="container flex-row! justify-evenly gap-4">
                    <div className="text-center flex flex-col gap-4">
                        <PageLabel text="Teams" />
                        {league?.teams && league?.teams.length > 0 ? (
                            league.teams.map((team) => (
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
                    <div className="flex flex-col gap-4 text-center">
                        <PageLabel text="Free Agents" />
                        <Button
                            variant="link"
                            className="cursor-pointer h-5 text-base"
                        >
                            Join League
                        </Button>
                        {league?.freeAgents && league?.freeAgents.length > 0 ? (
                            league.freeAgents.map((player) => (
                                <p key={player.id}>
                                    <Link href={`/players/${player.id}`}>
                                        {player.firstName} {player.lastName}
                                    </Link>
                                </p>
                            ))
                        ) : (
                            <p>None</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeagueIdPage;
