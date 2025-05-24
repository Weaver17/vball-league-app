import LevelHC from "@/components/hover-cards/level-hc";
import PlayerTypeHC from "@/components/hover-cards/player-type-hc";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

function CurrentTableBody({
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
                        <LevelHC level={league.level} />
                    </TableCell>

                    <TableCell className="text-center">
                        <PlayerTypeHC type={league.playerType} />
                    </TableCell>
                    <TableCell className="text-center">
                        {league.courtType}
                    </TableCell>
                    <TableCell className="text-center">
                        {league.ends.toDateString()}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default CurrentTableBody;
