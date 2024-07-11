import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
  } from "./ui/sheet"
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
  

const MobileNav = () => {
  const {isAuthenticated } = useAuth0();
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className = 'text-orange-500'/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle >
                <span>Welcome to MernEats.com!</span>
            </SheetTitle>
            <Separator />
        <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500"> Login</Button>
        </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;