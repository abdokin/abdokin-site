import { MainNav } from "~/components/main-nav";
import { Button } from "~/components/ui/button";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Abderrahman Laraich - Blog" },
        { name: "description", content: "Welcome to my website!" },
      ];
};

export default function Index() {
  return (
    <div  className="container max-w-7xl mt-4"> 
      <h1>Blog  Page</h1>
      <Button>Click me</Button>

    </div>
  );
}
