
import { cn } from "~/lib/utils"
import { Link } from "@remix-run/react"
import { Search } from "./search"
import { ModeToggle } from "./mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const links = [
  {
    path:"/blog",
    label:"Blog",
  },
  {
    path:"/contact",
    label:"Contact",
  },
  {
    path:"/about",
    label:"About",
  }
]

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { CommandMenu } from "./command-menu"
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
  <div>
      <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 p-4 w-full dark:bg-black dark:text-white   container max-w-7xl ", className)}
      {...props}
    >
      <Logo />
      {links.map((link, index) => (
        <Link
          key={index} 
          to={link.path} 
          className="text-sm font-medium hidden md:block text-muted-foreground transition-colors hover:text-primary"
        >
          {link.label} {/* Assuming link object has a 'label' property */}
        </Link>
      ))}
     

      <div className=" flex items-center space-x-4 " style={{ marginLeft: "auto" }}>
        <CommandMenu/>
        <NavMenu/>
        <ModeToggle />
      </div>
    </nav>
    <hr/>
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
  return (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <HamburgerMenuIcon
      className="h-[1.2rem] w-[3rem] md:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 md:hidden"
    /></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {links.map((link, index) => (
        <DropdownMenuItem key={index}>
          <Link
            key={index}
            to={link.path}
            className="text-sm font-medium  md:hidden text-muted-foreground transition-colors hover:text-primary"
          >
            {link.label} 
          </Link>
        </DropdownMenuItem>
      ))}
      {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
      {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
      {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
      {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
    </DropdownMenuContent>
  </DropdownMenu>)
}

