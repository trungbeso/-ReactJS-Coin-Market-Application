import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Form, FormField,FormItem,FormLabel,FormMessage,FormControl,FormDescription} from '@/components/ui/form';
import {useForm} from "react-hook-form";

const ForgotPasswordForm = () => {
    const form = useForm({
        resolver: "",
        defaultValues: {
            email: '',
        },
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="">
            <h1 className=" text-xl font-bold text-center pb-4">Forgot Password</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        name="email"
                                        className="border w-full border-gray-700 p-5 my-3"
                                        placeholder="Enter your email" {...field} />
                                </FormControl>

                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit"
                            className="shadow-md shadow-amber-500 w-full py-6 mt-2 hover:bg-amber-600 bg-amber-500 text-black hover:text-white border-0 active:bg-slate-200 cursor-pointer text-lg">
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ForgotPasswordForm;