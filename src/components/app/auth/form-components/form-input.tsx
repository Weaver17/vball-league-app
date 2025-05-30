import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

type AuthFormInputProps = {
    formControl: Control<any>;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    description: string;
};

function AuthFormInput({
    formControl,
    name,
    label,
    type,
    placeholder,
    description,
}: AuthFormInputProps) {
    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            required
                            {...field}
                        />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage></FormMessage>
                </FormItem>
            )}
        />
    );
}

export default AuthFormInput;
