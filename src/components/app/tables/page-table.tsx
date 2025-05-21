import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import LeaguesTableBody from "./table-bodies/leagues-body";
import TeamsTableBody from "./table-bodies/teams-body";

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
            </Table>
        </div>
    );
}

export default PageTable;
