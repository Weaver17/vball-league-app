import { TableBody, TableCell, TableRow } from "@/components/ui/table";

function TeamsTableBody({
    tableData,
}: {
    tableData: League[] | Team[] | Player[];
}) {
    const teams = tableData as Team[];

    return (
        <TableBody>
            {teams.map((team) => (
                <TableRow key={team.id}>
                    <TableCell className="text-center">{team.name}</TableCell>
                    <TableCell className="text-center">{team.level}</TableCell>
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
                        {team.teamCaptainId}
                    </TableCell>
                    <TableCell className="text-center">!!</TableCell>
                    <TableCell className="text-center">
                        {team.leagueId}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default TeamsTableBody;
