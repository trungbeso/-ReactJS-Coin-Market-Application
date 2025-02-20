import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {DotFilledIcon} from "@radix-ui/react-icons";



const TopUpForm = () => {
    const [paymentMethod, setPaymentMethod] = React.useState('RAZORPAY')
    const [amount, setAmount] = React.useState("");

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const handlePaymentMethodChange = (e) => {
        setAmount(e.target.value);
    }


    const handleSubmit = () => {
        console.log(amount, paymentMethod)
    }
    return (
        <div className="pt-6 space-y-5">
            <div>
                <h1 className="pb-1">
                    Enter Amount
                </h1>
                <Input onChange={handleChange}
                       value={amount}
                    className="py-5 text-lg"
                placeholder="Enter Amount"/>
            </div>
            <div>
                <h1 className="pb-1">Select Payment Method</h1>
                <RadioGroup className="flex"
                            value={paymentMethod}
                            defaultValue="RAZORPAY"
                    onValueChange={(value) => handlePaymentMethodChange(value)}>

                    <div className="flex items-center space-x-2  p-3 :bg-white">
                        <RadioGroupItem
                            onClick={() => handlePaymentMethodChange("paymentMethod")}
                        icon={DotFilledIcon}
                        className="h-9 w-9"
                        value="RAZORPAY"
                        id="r1"/>
                        <Label htmlFor="r1">
                            <div className="bg-white rounded-md px-1 py-1 w-20 h-8  overflow-hidden bg-cover]">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVblSWoMMVxuWgqte7zW6RFujMkhj4aMYww&s" alt=""/>
                            </div>
                        </Label>
                    </div>

                    <div className="flex items-center space-x-2  p-3 :bg-white">
                        <RadioGroupItem
                        icon={DotFilledIcon}
                        className="h-9 w-9"
                        value="STRIPE"
                        id="r2"/>
                        <Label htmlFor="r2">
                            <div className="bg-white rounded-md px-3 py-1 w-20 h-8 overflow-hidden bg-contain]">
                                <img src="https://banner2.cleanpng.com/20180330/zve/avicsckx0.webp" alt=""/>
                            </div>
                        </Label>
                    </div>


                    <div className="flex items-center space-x-2  p-3 :bg-white">
                        <RadioGroupItem
                        icon={DotFilledIcon}
                        className="h-9 w-9"
                        value="PAYPAL"
                        id="r3"/>
                        <Label htmlFor="r3">
                            <div className="bg-white rounded-md py-1 w-20 h-8 overflow-hidden bg-contain]">
                                <img src="https://banner2.cleanpng.com/20180629/jox/aayoo89vy.webp" alt=""/>
                            </div>
                        </Label>
                    </div>
                </RadioGroup>
            </div>
            <Button onClick={handleSubmit} className="w-full py-7 bg-white text-black text-lg">
                Submit
            </Button>
            
        </div>
    );
};

export default TopUpForm;