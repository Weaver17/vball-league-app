import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import { CREATE_PLAYER_HEIGHTS } from "@/lib/constants";
import {
    DropdownMenu,
    DropdownMenuArrow,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { Control } from "react-hook-form";

type Array = {
    id: number;
    group?: string;
    label: string;
};

type AuthFormDropdownProps = {
    title: string;
    array: Array[];
    formControl: Control<any>;
    description?: string;
    message?: string;
};

function AuthFormDropdown({
    title,
    array,
    formControl,
    description,
    message,
}: AuthFormDropdownProps) {
    const [titleSelect, setTitleSelect] = useState("Select");

    const onSelect = (value: string) => {
        setTitleSelect(value);
    };

    return (
        <FormField
            control={formControl}
            name={title}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{title}</FormLabel>
                    <FormControl>
                        <DropdownMenu modal={true}>
                            <DropdownMenuTrigger className="">
                                {titleSelect}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {array.map((item) => (
                                    <DropdownMenuItem
                                        onClick={() => onSelect(item.label)}
                                        key={item.id}
                                    >
                                        {item.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage></FormMessage>
                </FormItem>
            )}
        />
    );
}

export default AuthFormDropdown;
