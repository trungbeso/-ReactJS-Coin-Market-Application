import React from 'react';
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {BookmarkIcon, DotIcon} from "lucide-react";
import {Button} from "@/components/ui/button"
import {BookmarkFilledIcon} from "@radix-ui/react-icons";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import TreadingForm from "./TreadingForm";
import StockChart from "../Home/StockChart";

const StockDetails = () => {
    return (
        <div className="py-5 mt-5">
            <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                    <div>
                        <Avatar>
                            <AvatarImage
                                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"}
                                width={50} height={50}/>
                        </Avatar>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p>DOGE</p>
                            <DotIcon className="text-gray-400"/>
                            <p className="text-gray-400">Doge</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-bold">$5555</p>
                            <p className="text-red-400">
                                <span>-123123123213</span>
                                <span>(-0.12321%)</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button className="bg-white text-black cursor-pointer hover:bg-slate-200">
                        {true ? <BookmarkFilledIcon className="h-6 w-6"/>
                            : <BookmarkIcon className="h-6 w-6"/>}
                    </Button>

                    <Dialog>
                        <DialogTrigger>
                            <Button className="text-lg bg-white text-black cursor-pointer hover:bg-slate-200">Tread</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>How Much Do you want to spend?</DialogTitle>
                            </DialogHeader>
                            <TreadingForm/>

                        </DialogContent>
                    </Dialog>


                </div>
            </div>
            <div className="mt-5">
                <StockChart />
            </div>


        </div>
    );
};

export default StockDetails;