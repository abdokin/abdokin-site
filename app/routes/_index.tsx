import { MainNav } from "~/components/main-nav";
import { Button } from "~/components/ui/button";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div  className="container max-w-7xl mt-4"> 
      <h1>Welcome to Remix</h1>
      <Button>Click me</Button>

    </div>
  );
}
