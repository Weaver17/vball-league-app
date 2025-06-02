"use client";
import HeaderBtn from "@/components/buttons/header-btn";
import { ThemeBtn } from "@/components/buttons/theme-btn";
import { Volleyball } from "lucide-react";
import React from "react";
import Link from "next/link";
import usePlayerContextHook from "@/hooks/use-player-context";
import { deleteCurrentSession } from "@/actions/actions";

import LogoutModal from "@/components/app/modals/logout-modal";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { COURT_TYPES, LEVELS_OF_PLAY } from "@/lib/constants";

function Header() {
    const { isLoggedIn, handleLogout, player } = usePlayerContextHook();

    const onLogoutClick = () => {
        handleLogout();
        deleteCurrentSession();
    };

    const createTeamForm = useForm();

    return (
        <header className="flex justify-between items-center pt-4 px-8 relative">
            <div>
                <Link href="/">
                    <Volleyball
                        size="52"
                        className="text-primary hover:animate-spin hover:[animation-duration:0.4s] hover:[animation-timing-function:linear]   "
                    />
                </Link>
            </div>

            <div className="flex gap-4">
                {isLoggedIn ? (
                    <>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="cursor-pointer">
                                    Create Team
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className="text-center text-2xl! border-b border-primary py-4 mb-4">
                                        Create Team
                                    </SheetTitle>
                                    <Form {...createTeamForm}>
                                        <form
                                            action=""
                                            className="flex flex-col gap-4"
                                        >
                                            <FormField
                                                control={createTeamForm.control}
                                                name="team-name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Team Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Empire Spikes Back"
                                                                required
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormDescription>
                                                            Enter your team name
                                                        </FormDescription>
                                                        <FormMessage></FormMessage>
                                                    </FormItem>
                                                )}
                                            />
                                            <div className="grid grid-cols-2 gap-4">
                                                <FormField
                                                    control={
                                                        createTeamForm.control
                                                    }
                                                    name="team-name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Court Types
                                                            </FormLabel>

                                                            <Select
                                                                onValueChange={
                                                                    field.onChange
                                                                }
                                                                defaultValue={
                                                                    field.value
                                                                }
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select" />
                                                                    </SelectTrigger>
                                                                </FormControl>

                                                                <SelectContent>
                                                                    {COURT_TYPES.map(
                                                                        (
                                                                            item
                                                                        ) => (
                                                                            <SelectItem
                                                                                key={
                                                                                    item.id
                                                                                }
                                                                                value={
                                                                                    item.label
                                                                                }
                                                                            >
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </SelectItem>
                                                                        )
                                                                    )}
                                                                </SelectContent>
                                                            </Select>

                                                            <FormDescription></FormDescription>
                                                            <FormMessage></FormMessage>
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={
                                                        createTeamForm.control
                                                    }
                                                    name="team-name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Level
                                                            </FormLabel>

                                                            <Select
                                                                onValueChange={
                                                                    field.onChange
                                                                }
                                                                defaultValue={
                                                                    field.value
                                                                }
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select" />
                                                                    </SelectTrigger>
                                                                </FormControl>

                                                                <SelectContent>
                                                                    {LEVELS_OF_PLAY.map(
                                                                        (
                                                                            item
                                                                        ) => (
                                                                            <SelectItem
                                                                                key={
                                                                                    item.id
                                                                                }
                                                                                value={
                                                                                    item.label
                                                                                }
                                                                            >
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </SelectItem>
                                                                        )
                                                                    )}
                                                                </SelectContent>
                                                            </Select>

                                                            <FormDescription></FormDescription>
                                                            <FormMessage></FormMessage>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </form>
                                    </Form>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                        <HeaderBtn
                            text="Create Team"
                            href={`/players/${player.id}/teams`}
                            bgColor="bg-primary"
                        />
                        <HeaderBtn
                            text="Create League"
                            href={`/players/${player.id}/teams`}
                            bgColor="bg-primary"
                        />
                        <LogoutModal onLogoutClick={onLogoutClick} />
                    </>
                ) : (
                    <>
                        <HeaderBtn
                            text="Sign In"
                            href="/sign-in"
                            bgColor="bg-primary"
                        />
                        <HeaderBtn
                            text="Sign Up"
                            href="/sign-up"
                            bgColor="bg-muted"
                        />
                    </>
                )}

                <ThemeBtn />
            </div>
        </header>
    );
}

export default Header;
