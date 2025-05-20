"use client";

import { ThemeBtn } from "@/components/buttons/theme-btn";
import { Button } from "@/components/ui/button";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";

function RegisterPage() {
    const signInForm = useForm();

    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-4 right-4">
                <ThemeBtn />
            </div>
            <Form {...signInForm}>
                <form className="bg-card py-10 px-28 rounded-lg border-2 border-border w-xl flex flex-col gap-4 shadow-xl shadow-black/30">
                    <h1 className="text-2xl font-bold font-title text-center mb-4 text-primary border-b border-border pb-4">
                        Sign Up
                    </h1>
                    <FormField
                        control={signInForm.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="BornSetter@vball.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter your email
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={signInForm.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Matt" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter your first name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={signInForm.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Anderson" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter your last name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={signInForm.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder=""
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Password must be o9743658w7 characters long
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="">Sign Up</Button>
                    <p className="text-sm! text-center text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                            className="text-primary text-sm underline underline-offset-2 hover:text-primary/50"
                            href="/sign-in"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
}

export default RegisterPage;
