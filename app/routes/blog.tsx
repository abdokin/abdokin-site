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
    <div  className="container-lg"> 
      <h1 className="text-4xl font-bold">Articles</h1>
    </div>
  );
}
