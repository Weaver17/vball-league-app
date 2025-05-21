import { getAllTeams } from "@/actions/actions";
import PageTable from "@/components/app/tables/page-table";
import { ALL_TEAMS_TABLEHEADS } from "@/lib/constants";
import React from "react";

async function page() {
    const teams = await getAllTeams();

    return (
        <div className="container mt-4">
            <PageTable
                title="All Teams"
                tableHeads={ALL_TEAMS_TABLEHEADS}
                tableData={teams}
            />
        </div>
    );
}

export default page;
