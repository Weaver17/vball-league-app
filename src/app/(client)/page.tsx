import { getCurrentLeagues } from "@/actions/actions";
import PageTable from "@/components/app/tables/page-table";
import Welcome from "@/components/app/welcome";

import { CURRENT_LEAGUE_TABLEHEADS } from "@/lib/constants";
import React from "react";

async function Home() {
    const currentLeagues = (await getCurrentLeagues()) as League[];

    return (
        <div className="section">
            <Welcome />
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
