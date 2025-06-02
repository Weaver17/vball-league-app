"use client";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";

function LogoutModal({ onLogoutClick }: { onLogoutClick: () => void }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="button" className="bg-muted cursor-pointer">
                    Sign Out
                </Button>
            </DialogTrigger>
            <DialogContent className="justify-center items-center gap-16">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl!">
                        Are you sure you want to sign out?
                    </DialogTitle>
                </DialogHeader>
                <DialogFooter className="mx-auto gap-8">
                    <DialogClose asChild>
                        <Button
                            type="button"
                            className="bg-muted cursor-pointer"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        type="button"
                        onClick={onLogoutClick}
                        className="bg-primary! cursor-pointer hover:bg-primary/80!"
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default LogoutModal;
