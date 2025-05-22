import { TableBody, TableCell, TableRow } from "@/components/ui/table";

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
                    <TableCell className="text-center">{league.name}</TableCell>
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
                        {league.ends.toDateString()}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default CurrentTableBody;
