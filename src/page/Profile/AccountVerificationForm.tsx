import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from '@/components/ui/button';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {DialogClose} from "@radix-ui/react-dialog";


const AccountVerificationForm = () => {
    const [value, setValue] = React.useState("");

    const handleSubmit = () => {
        console.log(value)
    }

    return (
        <div className="flex justify-center">
            <div className="space-y-5 mt-5 w-full">
                <div className="flex justify-between items-center">
                    <p>Email: </p>
                    <p>trungbeso@gmail.com</p>
                    <Dialog>
                        <DialogTrigger>
                            <Button className="bg-white font-semibold text-black cursor-pointer hover:bg-gray-200">Send
                                OTP</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-900">
                            <DialogHeader>
                                <DialogTitle>Enter OTP</DialogTitle>
                            </DialogHeader>
                            <div className="py-5 flex gap-10 justify-center items-center ">
                                <InputOTP maxLength={6}
                                          value={value}
                                          onChange={(value) => setValue(value)}
                                >
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0}/>
                                        <InputOTPSlot index={1}/>
                                        <InputOTPSlot index={2}/>
                                    </InputOTPGroup>
                                    <InputOTPSeparator/>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3}/>
                                        <InputOTPSlot index={4}/>
                                        <InputOTPSlot index={5}/>
                                    </InputOTPGroup>
                                </InputOTP>
                                <DialogClose
                                    onClick={handleSubmit}
                                    className="w-3/12 justify-center bg-white text-black">
                                    <Button>Submit</Button>
                                </DialogClose>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default AccountVerificationForm;