
import { cn } from "~/lib/utils"
import { Link } from "@remix-run/react"
import { ModeToggle } from "./mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const links = [
  {
    path: "/",
    label: "About",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contact",
  },

]
import { Menu } from 'lucide-react'
import CustomLink from "./custome-link"
import { useState } from "react"
import { Button } from "./ui/button"
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div>
      <nav
        className={cn("flex items-center space-x-4 lg:space-x-6  container-lg ", className)}
        {...props}
      >
        <Logo />
        {links.map((link, index) => (
          <CustomLink className="hidden md:block" to={link.path} label={link.label} key={index} />
        ))}
        <div className=" flex items-center space-x-2" style={{ marginLeft: "auto" }}>
          <NavMenu />
          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}

function Logo() {
  return (
    <Link to={'/'} className="text-xl font-medium mr-4">
      <h1>Abdokin v1</h1>
    </Link>
  )
}

function NavMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <DropdownMenu open={open} onOpenChange={() => setOpen(false)} >
        <DropdownMenuTrigger onClick={() => setOpen(!open)}>
          <Button variant="ghost" className="rounded-full" size="icon">

            <Menu className="h-[1.2rem] w-[1.2rem] transition-all" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link, index) => (
            <DropdownMenuItem key={index} onClick={() => setOpen(false)}>
              <CustomLink className="md:hidden" to={link.path} label={link.label} key={index} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

