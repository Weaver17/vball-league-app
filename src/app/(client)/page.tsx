import { getCurrentLeagues } from "@/actions/actions";
import PageTable from "@/components/app/tables/page-table";

import { CURRENT_LEAGUE_TABLEHEADS } from "@/lib/constants";
import React from "react";

async function Home() {
    const currentLeagues = (await getCurrentLeagues()) as League[];

    return (
        <div className="section">
            <div className="container w-2/3  mt-12">
                <h4 className="font-semibold">
                    Welcome! Sign in to join a team or league. Sign up to set up
                    your height, position, and level of play
                </h4>
            </div>
            <div className="container">
                <PageTable
                    title="Current Leagues"
                    tableHeads={CURRENT_LEAGUE_TABLEHEADS}
                    tableData={currentLeagues}
                />
            </div>
        </div>
    );
}

export default Home;
