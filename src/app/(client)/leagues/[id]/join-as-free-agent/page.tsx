import { getLeagueById } from "@/actions/actions";
import PlayerJoinLeagueForm from "@/components/app/join/player-join-league";

async function PlayerJoinLeaguePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const league = (await getLeagueById(id)) as League;

    return (
        <section className="section">
            <div className="container ">
                <h3 className="text-center border-b border-primary pb-2">
                    Join <strong className="font-bold">{league.name}</strong> as
                    a Free Agent
                </h3>
                <PlayerJoinLeagueForm league={league} />
            </div>
        </section>
    );
}

export default PlayerJoinLeaguePage;
