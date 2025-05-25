import LevelHC from "@/components/hover-cards/level-hc";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

function PlayerTableBody({
    tableData,
}: {
    tableData: League[] | Team[] | Player[];
}) {
    const players = tableData as Player[];

    return (
        <TableBody>
            {players.map(async (player) => (
                <TableRow key={player.id}>
                    <TableCell className="text-center">
                        <Link key={player.id} href={`/players/${player.id}`}>
                            {player.firstName} {player.lastName}
                        </Link>
                    </TableCell>
                    <TableCell className="text-center">
                        <LevelHC level={player.level} />
                    </TableCell>
                    <TableCell className="text-center">
                        {player.mainPosition}
                    </TableCell>
                    <TableCell className="text-center">
                        {player.secondPosition}
                    </TableCell>
                    <TableCell className="text-center">
                        {player.height}
                    </TableCell>
                    <TableCell className="text-center">
                        {player.gender}
                    </TableCell>
                    <TableCell className="text-center">
                        {player.preferredCourtType}
                    </TableCell>
                    {player.teams.length > 0 ? (
                        player.teams.slice(0, 3).map((team) => (
                            <TableCell
                                key={team.id}
                                className="text-center flex flex-col "
                            >
                                {team.name}
                            </TableCell>
                        ))
                    ) : (
                        <TableCell className="text-center">None</TableCell>
                    )}
                </TableRow>
            ))}
        </TableBody>
    );
}

export default PlayerTableBody;
