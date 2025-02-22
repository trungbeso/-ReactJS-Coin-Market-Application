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
import {Moon, Sun} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useTheme} from "@/components/theme-provider"


const Navbar = () => {
    const {setTheme} = useTheme()

    return (
        <div
            className="px-2 text-white py-1 border-b z-50 bg-black bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Sheet>
                    <SheetTrigger>
                        <Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
                            <DragHandleHorizontalIcon className="h-7 w-7"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left"
                                  className="bg-gray-900 text-white w-75 border-r-0 flex flex-col justify-center">
                        <SheetHeader>
                            <SheetTitle>
                                <div className="text-3xl flex justify-center items-center gap-1">
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
                <p className="text-sm lg:text-base cursor-pointer">
                    <span className="text-orange-400">Coin</span> Market
                </p>
                <div className="p-0 ml-9 ">
                    <Button variant="outline" clasName=" flex items-center gap-3">
                        <MagnifyingGlassIcon/>
                        <span>Search</span>
                    </Button>
                </div>
            </div>

            <div>
                <Avatar>
                    <AvatarFallback>T </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Navbar
