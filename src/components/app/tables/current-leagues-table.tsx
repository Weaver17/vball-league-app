import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { TEMPORARY_CURRENT_LEAGUES } from "@/lib/constants";

function CurrentLeaguesTable() {
    return (
        <Table className="w-[80%] ">
            <TableHeader className="">
                <TableRow>
                    <TableHead className="text-center">Name</TableHead>
                    <TableHead className="text-center">Level</TableHead>
                    <TableHead className="text-center">Player Type</TableHead>
                    <TableHead className="text-center">Court Type</TableHead>
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
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default CurrentLeaguesTable;
