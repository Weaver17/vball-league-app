import { getLeagueById, getPlayerById, getTeamRoster } from "@/actions/actions";
import PlayerTypeHC from "@/components/hover-cards/player-type-hc";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

function TeamsTableBody({
    tableData,
}: {
    tableData: League[] | Team[] | Player[];
}) {
    const teams = tableData as Team[];

    return (
        <TableBody>
            {teams.map(async (team) => {
                const league = await getLeagueById(team.leagueId ?? "");
                const captain = await getPlayerById(team.teamCaptainId ?? "");
                const roster = await getTeamRoster(team.id);

                const openPositions = team.rosterSpots - roster.length;

                return (
                    <TableRow key={team.id}>
                        <TableCell className="text-center">
                            <Link href={`/teams/${team.id}`}>{team.name}</Link>
                        </TableCell>
                        <TableCell className="text-center">
                            {team.level}
                        </TableCell>
                        <TableCell className="text-center">
                            <PlayerTypeHC type={team.playerType} />
                        </TableCell>
                        <TableCell className="text-center">
                            {team.courtType}
                        </TableCell>
                        <TableCell className="text-center">
                            {openPositions}
                        </TableCell>
                        <TableCell className="text-center">
                            {captain?.firstName} {captain?.lastName}
                        </TableCell>
                        {roster.length > 0 ? (
                            <TableCell className="text-center">
                                {roster.length}/{team.rosterSpots}
                            </TableCell>
                        ) : (
                            <TableCell className="text-center">0</TableCell>
                        )}
                        <TableCell className="text-center">
                            {league?.name}
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
}

export default TeamsTableBody;
