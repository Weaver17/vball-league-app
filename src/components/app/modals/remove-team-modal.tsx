import { deleteTeamFromLeague } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

type Props = {
    fetchLeagueData: (league: string) => Promise<void>;
    playerLeague: League | null;
    team: Team;
};

function RemoveTeamModal({ fetchLeagueData, playerLeague, team }: Props) {
    const [isRemoveTeamDialogOpen, setIsRemoveTeamDialogOpen] = useState(false);
    const [teamToRemove, setTeamToRemove] = useState<Team | null>(null);

    const openCutPlayerDialog = () => {
        setTeamToRemove(team);
        setIsRemoveTeamDialogOpen(true);
    };

    const confirmCutPlayer = async () => {
        if (!playerLeague || !teamToRemove) return;
        try {
            await deleteTeamFromLeague(teamToRemove.id, playerLeague.id);
            // Re-fetch this team's data to show updated player list
            await fetchLeagueData(playerLeague.id);
        } catch (err) {
            console.error("Failed to remove team from league:", err);
            // Handle error (e.g., show a toast)
        } finally {
            setIsRemoveTeamDialogOpen(false);
            setTeamToRemove(null);
        }
    };
    return (
        <Dialog
            open={isRemoveTeamDialogOpen}
            onOpenChange={setIsRemoveTeamDialogOpen}
        >
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    variant="link"
                    className="text-destructive cursor-pointer"
                    onClick={() => openCutPlayerDialog()}
                >
                    Remove
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-base! text-center font-semibold mb-2 border-b border-primary pb-2">
                        Confirm Remove Team
                    </DialogTitle>
                    <DialogDescription className="text-xl! text-center text-foreground!">
                        Are you sure you want to remove{" "}
                        <strong>{teamToRemove?.name}</strong>
                        {""}?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setIsRemoveTeamDialogOpen(false);
                            setTeamToRemove(null);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="hover:bg-background! hover:text-destructive!"
                        variant="destructive"
                        onClick={confirmCutPlayer}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default RemoveTeamModal;
