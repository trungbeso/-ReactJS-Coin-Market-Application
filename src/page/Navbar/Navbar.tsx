import React from 'react'
import Sidebar from './Sidebar'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet"
import {Avatar, AvatarFallback, AvatarImage} from "../../components/ui/avatar.jsx"


const Navbar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent side="left" className="text-white w-70 border-r-0 flex flex-col justify-center">
                    <SheetHeader className={undefined}>
                        <SheetTitle>
                            <div className="text-3xl text-white flex justify-center items-center gap-2">
                                <Avatar>
                                    <AvatarImage
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"/>
                                </Avatar>
                                <div className="font-semibold text-2xl">
                                    <span className="text-orange-400">Coin</span>
                                    <span> Market</span>
                                </div>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <Sidebar/>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Navbar
