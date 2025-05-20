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
        <div className="w-[80%] space-y-4">
            <h4 className="underline font-semibold text-center">
                Current Leagues
            </h4>
            <Table>
                <TableHeader className="">
                    <TableRow>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">Level</TableHead>
                        <TableHead className="text-center">
                            Player Type
                        </TableHead>
                        <TableHead className="text-center">
                            Court Type
                        </TableHead>
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
        </div>
    );
}

export default CurrentLeaguesTable;
