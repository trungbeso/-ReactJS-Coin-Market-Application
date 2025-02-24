import React from 'react'
import Sidebar from './Sidebar'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {Button} from '@/components/ui/button';
import {DragHandleHorizontalIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {useSelector} from "react-redux";



const Navbar = () => {

    const {auth} = useSelector(store => store);

    return (
        <div
            className="sticky px-2 text-white py-1 border-b z-50 bg-black bg-opacity-0 top-0 left-0 right-0 flex justify-between items-center">

            <div className="flex items-center gap-3">
                <Sheet>
                    <SheetTrigger>
                        <Button variant="ghost" size="icon" className="rounded-full h-6 w-6 hover:bg-amber-500">
                            <DragHandleHorizontalIcon className="h-7 w-7"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left"
                                  className="bg-black text-white w-75 border-r-0 flex flex-col justify-center transform transition-all duration-300 ease-linear"
                    >
                        <SheetHeader>
                            <SheetTitle>
                                <div className="flex justify-center items-center gap-3">
                                    <Avatar>
                                        <AvatarImage
                                            src="https://cryptologos.cc/logos/monero-xmr-logo.png"/>
                                    </Avatar>
                                    <div>
                                        <h1 className="font-semibold text-xl text-white text-center font-serif">
                                            Coin
                                            <span className="bg-amber-500 rounded-md p-2">Market</span>

                                        </h1>
                                    </div>
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                        <Sidebar/>
                    </SheetContent>
                </Sheet>
                <p className="lg:text-base cursor-pointer text-white font-bold font-serif">
                    Coin
                    <span className="bg-amber-500 rounded-md p-1">Market</span>
                </p>
                <div className="p-0 ml-9 ">
                    <Button variant="outline" clasName=" flex items-center gap-3">
                        <MagnifyingGlassIcon/>
                        <span>Search</span>
                    </Button>
                </div>
            </div>

            <div>
                <Avatar className="bg-amber-500 rounded-full p-1 -z-20">


                    <AvatarFallback>
                        {auth.user?.fullName[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Navbar
