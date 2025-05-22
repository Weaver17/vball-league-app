import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import LeaguesTableBody from "./table-bodies/leagues-body";
import TeamsTableBody from "./table-bodies/teams-body";
import CurrentTableBody from "./table-bodies/current-body";
import PlayerTableBody from "./table-bodies/player-body";

type PageTableProps = {
    title: string;
    tableHeads: TableHeads[];
    tableData: League[] | Team[] | Player[];
};

function PageTable({ title, tableHeads, tableData }: PageTableProps) {
    return (
        <div className=" space-y-4">
            <h4 className="underline font-semibold">{title}</h4>
            <Table>
                <TableHeader className="">
                    <TableRow>
                        {tableHeads.map((head) => (
                            <TableHead className="text-center" key={head.id}>
                                {head.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                {title == "All Leagues" && (
                    <LeaguesTableBody tableData={tableData} />
                )}
                {title == "All Teams" && (
                    <TeamsTableBody tableData={tableData} />
                )}
                {title == "Current Leagues" && (
                    <CurrentTableBody tableData={tableData} />
                )}
                {title == "All Players" && (
                    <PlayerTableBody tableData={tableData} />
                )}
            </Table>
        </div>
    );
}

export default PageTable;
