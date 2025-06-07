import { deletePlayerFromTeam } from "@/actions/actions";
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
    fetchTeamData: (teamId: string) => Promise<void>;
    playerTeam: Team | null;
    player: Player;
};

function CutPlayerModal({ fetchTeamData, playerTeam, player }: Props) {
    const [isCutPlayerDialogOpen, setIsCutPlayerDialogOpen] = useState(false);
    const [playerToCut, setPlayerToCut] = useState<Player | null>(null);

    const openCutPlayerDialog = () => {
        setPlayerToCut(player);
        setIsCutPlayerDialogOpen(true);
    };

    const confirmCutPlayer = async () => {
        if (!playerTeam || !playerToCut) return;
        try {
            await deletePlayerFromTeam(playerToCut.id, playerTeam.id);
            // Re-fetch this team's data to show updated player list
            await fetchTeamData(playerTeam.id);
        } catch (err) {
            console.error("Failed to cut player:", err);
            // Handle error (e.g., show a toast)
        } finally {
            setIsCutPlayerDialogOpen(false);
            setPlayerToCut(null);
        }
    };
    return (
        <Dialog
            open={isCutPlayerDialogOpen}
            onOpenChange={setIsCutPlayerDialogOpen}
        >
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    variant="link"
                    className="text-destructive cursor-pointer"
                    onClick={() => openCutPlayerDialog()}
                >
                    Cut
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-base! text-center font-semibold mb-2 border-b border-primary pb-2">
                        Confirm Cut Player
                    </DialogTitle>
                    <DialogDescription className="text-xl! text-center text-foreground!">
                        Are you sure you want to cut{" "}
                        <strong>
                            {playerToCut?.firstName} {playerToCut?.lastName}
                        </strong>
                        {""}?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setIsCutPlayerDialogOpen(false);
                            setPlayerToCut(null);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="hover:bg-background! hover:text-destructive!"
                        variant="destructive"
                        onClick={confirmCutPlayer}
                    >
                        Confirm Cut
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CutPlayerModal;
