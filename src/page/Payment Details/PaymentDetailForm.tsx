import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {DialogClose} from "@/components/ui/dialog"
import {Form, FormField,FormItem,FormLabel,FormMessage,FormControl,FormDescription} from '@/components/ui/form';
import {useForm} from "react-hook-form";

const PaymentDetailForm = () => {
    const form = useForm({
        resolver: "",
        defaultValues: {
            accountHolderName: '',
            ifsc: '',
            accountNumber:'',
            bankName:''
        },
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="px-10 py-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="accountHolderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account Holder Name</FormLabel>
                                <FormControl>
                                    <Input
                                        name="accountHolderName"
                                        className="border w-full border-gray-700 p-5 my-3"
                                        placeholder="trungbeso" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="ifsc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IFSC Code</FormLabel>
                                <FormControl>
                                    <Input
                                        name="ifsc"
                                        className="border w-full border-gray-700 p-5 my-3"
                                        placeholder="#HN324234" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account Number</FormLabel>
                                <FormControl>
                                    <Input
                                        name="accountNumber"
                                        className="border w-full border-gray-700 p-5 my-3"
                                        placeholder="*********555" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmAccountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Account Number</FormLabel>
                                <FormControl>
                                    <Input
                                        name="confirmAccountNumber"
                                        className="border w-full border-gray-700 p-5 my-3"
                                        placeholder="enter account number again" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="bankName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bank Name</FormLabel>
                                <FormControl>
                                    <Input
                                        name="bankName"
                                        className="border w-full border-gray-700 p-5 my-3"
                                        placeholder="VPbank" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogClose className="w-full">
                        <Button type="submit" className="w-full py-7 mt-2 border hover:bg-white hover:text-black active:bg-slate-200 cursor-pointer text-lg">
                            Submit
                        </Button>
                    </DialogClose>


                </form>

            </Form>
        </div>
    );
};

export default PaymentDetailForm;