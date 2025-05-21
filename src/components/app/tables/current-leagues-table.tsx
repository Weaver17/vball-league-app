import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import {
    CURRENT_LEAGUE_TABLEHEADS,
    TEMPORARY_CURRENT_LEAGUES,
} from "@/lib/constants";

function CurrentLeaguesTable() {
    return (
        <div className="w-[80%] space-y-4">
            <h4 className="underline font-semibold text-center">
                Current Leagues
            </h4>
            <Table>
                <TableHeader className="">
                    <TableRow>
                        {CURRENT_LEAGUE_TABLEHEADS.map((head) => (
                            <TableHead className="text-center" key={head.id}>
                                {head.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {TEMPORARY_CURRENT_LEAGUES.map((league) => (
                        <TableRow key={league.id}>
                            <TableCell className="text-center">
                                {league.name}
                            </TableCell>
                            <TableCell className="text-center">
                                {league.level}
                            </TableCell>
                            <TableCell className="text-center">
                                {league.playerType}
                            </TableCell>
                            <TableCell className="text-center">
                                {league.courtType}
                            </TableCell>
                            <TableCell className="text-center">
                                {league.endDate}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default CurrentLeaguesTable;
