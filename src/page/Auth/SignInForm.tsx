import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Form, FormField,FormItem,FormLabel,FormMessage,FormControl,FormDescription} from '@/components/ui/form';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {login} from "@/State/Auth/Action";
import {useNavigate} from "react-router-dom";

const SignIpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const form = useForm({
        resolver: "",
        defaultValues: {
            email: '',
            password:''
        },
    })

    const onSubmit = (data) => {
        dispatch(login({data, navigate}))
        console.log(data)
    }

    return (
        <div className="">
            <h1 className=" text-xl font-bold text-center pb-3">Sign In</h1>
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
                                        placeholder="Email" {...field} />
                                </FormControl>

                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        name="password"
                                        className="border w-full border-gray-700 p-5 my-3"
                                        placeholder="Password" {...field} />
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

export default SignIpForm;