"use client";

import { playerJoinLeagueAsFreeAgent } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import usePlayerContextHook from "@/hooks/use-player-context";
import { toastSuccess } from "@/lib/toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function PlayerJoinLeagueForm({ league }: { league: League }) {
    const playerJoinLeagueForm = useForm();

    const { player } = usePlayerContextHook() as { player: Player };

    const router = useRouter();

    const onSubmit = async () => {
        await playerJoinLeagueAsFreeAgent(player.id, league.id);
        toast("Successfully joined league as a free agent", toastSuccess);
        router.push(`/leagues/${league.id}`);
    };

    return (
        <Form {...playerJoinLeagueForm}>
            <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4 h-full my-4"
            >
                <div className="grid grid-cols-2 gap-4 w-1/2 mx-auto">
                    <div className="flex flex-col gap-2 text-center">
                        <h5 className="font-semibold">Level</h5>
                        <p>{league.level}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <h5 className="font-semibold">Player Type</h5>
                        <p>{league.playerType}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <h5 className="font-semibold">Court Type</h5>
                        <p>{league.courtType}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <h5 className="font-semibold">Start Date</h5>
                        <p>{league.starts.toDateString()}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <h5 className="font-semibold">End Date</h5>
                        <p>{league.ends.toDateString()}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <h5 className="font-semibold">Day(s)</h5>
                        <p>{league.day}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <h5 className="font-semibold">Commissioner</h5>
                    <p>
                        {league.commissioner?.firstName}{" "}
                        {league.commissioner?.lastName}
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <h5 className="font-semibold">Free Agent Fee = $30</h5>
                    <FormField
                        control={playerJoinLeagueForm.control}
                        name="leagueFee"
                        render={({ field }) => (
                            <FormItem className="w-1/4 mx-auto">
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full border-primary data-[placeholder]:text-primary">
                                        <SelectValue placeholder="Select Payment Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Venmo">
                                            Venmo
                                        </SelectItem>
                                        <SelectItem value="PayPal">
                                            PayPal
                                        </SelectItem>
                                        <SelectItem value="Cash-App">
                                            Cash-App
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                </div>
                <Button
                    className="w-1/4 mx-auto cursor-pointer bg-primary! text-white! hover:bg-primary/90!"
                    type="submit"
                >
                    Join League
                </Button>
            </form>
        </Form>
    );
}

export default PlayerJoinLeagueForm;
