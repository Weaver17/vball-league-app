import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

function LeaguesTableBody({
    tableData,
}: {
    tableData: League[] | Team[] | Player[];
}) {
    const leagues = tableData as League[];

    return (
        <TableBody>
            {leagues.map((league) => (
                <TableRow key={league.id}>
                    <TableCell className="text-center">
                        <Link href={`/leagues/${league.id}`}>
                            {league.name}
                        </Link>
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
                        {league.status}
                    </TableCell>
                    <TableCell className="text-center">
                        {league.starts.toDateString()}
                    </TableCell>
                    <TableCell className="text-center">
                        {league.ends.toDateString()}
                    </TableCell>
                    <TableCell className="text-center">{league.day}</TableCell>
                    <TableCell className="text-center">
                        16/{league.teamSlots}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default LeaguesTableBody;
