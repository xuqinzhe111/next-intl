"use client";
import { ModeToggle } from "@/components/ui/modeToggle";
import LocalSwitcher from "./languageSwitch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
 
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end gap-5 p-1 md:p-3 lg:p-5  border-t-0  border-b">
      <nav className="  space-x-3 hidden md:flex">
        <LocalSwitcher />
        <ModeToggle />
      </nav>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <LocalSwitcher />
              <ModeToggle />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      
    </div>
  );
}
