"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { Control } from "react-hook-form";

type FormDateProps = {
    formControl: Control<any>;
    name: string;
    label: string;
    // description: string;
    message?: string;
};

export function FormDatePicker({
    formControl,
    name,
    label,
    // description,
    message,
}: FormDateProps) {
    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col mx-auto">
                    <FormLabel>{label}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value?.from ? (
                                        field.value.to ? (
                                            <>
                                                {format(
                                                    field.value.from,
                                                    "LLL dd, y"
                                                )}{" "}
                                                -{" "}
                                                {format(
                                                    field.value.to,
                                                    "LLL dd, y"
                                                )}
                                            </>
                                        ) : (
                                            format(
                                                field.value.from,
                                                "LLL dd, y"
                                            )
                                        )
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="range"
                                defaultMonth={field.value?.from || new Date()}
                                selected={field.value}
                                onSelect={field.onChange}
                                numberOfMonths={3}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormDescription className="text-xs">
                        Select the league's start date* and end date**
                    </FormDescription>
                    <FormDescription>
                        <br />
                        *The day the first games will be played
                        <br />
                        *The day the last games/championship will be played
                    </FormDescription>
                    <FormMessage>{message}</FormMessage>
                </FormItem>
            )}
        />
    );
}
