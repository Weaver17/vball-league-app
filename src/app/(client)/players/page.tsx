import { getAllPlayers } from "@/actions/actions";
import PageTable from "@/components/app/tables/page-table";
import { ALL_PLAYERS_TABLEHEADS } from "@/lib/constants";

async function page() {
    const players = (await getAllPlayers()) as Player[];

    return (
        <div className="container mt-4">
            <PageTable
                title="All Players"
                tableHeads={ALL_PLAYERS_TABLEHEADS}
                tableData={players}
            />
        </div>
    );
}

export default page;
