import React from 'react'
import {HomeIcon} from "lucide-react";
import {Button} from "../../components/ui/button"

const menu = [
  {name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6"/>},
  {name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6"/>},
  {name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6"/>},
  {name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6"/>},
  {name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6"/>},
  {name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6"/>}
]

const Sidebar = () => {
  return (
    <div className="mt-10 space-y-5 hover:bg-gray-800">
      <div>
        <Button className="flex items-center gap-5 py-6 w-full">
          <span className="w-8"><HomeIcon/></span>
          <p>Home</p>
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
