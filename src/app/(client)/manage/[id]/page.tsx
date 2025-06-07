import { getPlayerById } from "@/actions/actions";
import CaptainManage from "@/components/manage/captain-manage";
import CommishManage from "@/components/manage/commish-manage";
import LeagueManage from "@/components/manage/league-manage";
import PlayerManage from "@/components/manage/player-manage";

import React, { Suspense } from "react";

async function ManagePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const player = (await getPlayerById(id)) as Player;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex gap-8">
                <div className="container w-1/2">
                    <h3 className="text-center border-b border-primary pb-2">
                        Captain of
                    </h3>
                    {player.captainOf.length > 0 ? (
                        <CaptainManage player={player} />
                    ) : null}

                    <h3 className="text-center border-b border-primary pb-2 mt-20">
                        Teams
                    </h3>
                    {player.teams.length > 0 ? (
                        <PlayerManage player={player} />
                    ) : null}
                </div>
                <div className="container w-1/2">
                    <h3 className="text-center border-b border-primary pb-2">
                        Commissioner of
                    </h3>
                    {player.commissionerOf.length > 0 ? (
                        <CommishManage player={player} />
                    ) : null}

                    <h3 className="text-center border-b border-primary pb-2 mt-20">
                        Leagues
                    </h3>
                    {player.freeAgentIn.length > 0 ? (
                        <LeagueManage player={player} />
                    ) : null}
                </div>
            </div>
        </Suspense>
    );
}

export default ManagePage;
