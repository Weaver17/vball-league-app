import LevelHC from "@/components/hover-cards/level-hc";
import PlayerTypeHC from "@/components/hover-cards/player-type-hc";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getLeagueStatus } from "@/lib/utils";
import { get } from "http";
import Link from "next/link";

function LeaguesTableBody({
    tableData,
}: {
    tableData: League[] | Team[] | Player[];
}) {
    const leagues = tableData as League[];

    return (
        <TableBody>
            {leagues.map((league) => {
                const status = getLeagueStatus(league);

                return (
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
                        <TableCell className="text-center">{status}</TableCell>
                        <TableCell className="text-center">
                            {league.starts.toDateString()}
                        </TableCell>
                        <TableCell className="text-center">
                            {league.ends.toDateString()}
                        </TableCell>
                        <TableCell className="text-center">
                            {league.day}
                        </TableCell>
                        <TableCell className="text-center">
                            {league.teams?.length}/{league.teamSlots}
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
}

export default LeaguesTableBody;
