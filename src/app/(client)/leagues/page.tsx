import { getAllLeagues } from "@/actions/actions";
import PageTable from "@/components/app/tables/page-table";

import { ALL_LEAGUES_TABLEHEADS } from "@/lib/constants";

async function page() {
    const leagues = await getAllLeagues();

    return (
        <div className="container mt-4">
            <PageTable
                title="All Leagues"
                tableHeads={ALL_LEAGUES_TABLEHEADS}
                tableData={leagues}
            />
        </div>
    );
}

export default page;
