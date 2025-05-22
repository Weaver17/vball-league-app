import { getLeagueById, getPlayerById, getTeamRoster } from "@/actions/actions";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

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

                return (
                    <TableRow key={team.id}>
                        <TableCell className="text-center">
                            {team.name}
                        </TableCell>
                        <TableCell className="text-center">
                            {team.level}
                        </TableCell>
                        <TableCell className="text-center">
                            {team.playerType}
                        </TableCell>
                        <TableCell className="text-center">
                            {team.courtType}
                        </TableCell>
                        <TableCell className="text-center">
                            {team.openPositions}
                        </TableCell>
                        <TableCell className="text-center">
                            {captain?.firstName} {captain?.lastName}
                        </TableCell>
                        <TableCell className="text-center">!!</TableCell>
                        <TableCell className="text-center">
                            {league?.name}
                        </TableCell>
                        {roster.length > 0 ? (
                            <TableCell className="text-center">
                                {roster.length}
                            </TableCell>
                        ) : (
                            <TableCell className="text-center">0</TableCell>
                        )}
                    </TableRow>
                );
            })}
        </TableBody>
    );
}

export default TeamsTableBody;
