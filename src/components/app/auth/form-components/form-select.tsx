import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Control } from "react-hook-form";

type Array = {
    id: number;
    group?: string;
    label: string;
};

type FormSelectProps = {
    title: string;
    array: Array[];
    formControl: Control<any>;
    name: string;
    description?: string;
    message?: string;
};

function FormSelect({
    title,
    array,
    formControl,
    name,
    description,
    message,
}: FormSelectProps) {
    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{title}</FormLabel>

                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            {array.map((item) => (
                                <SelectItem key={item.id} value={item.label}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <FormDescription></FormDescription>
                    <FormMessage></FormMessage>
                </FormItem>
            )}
        />
    );
}

export default FormSelect;
