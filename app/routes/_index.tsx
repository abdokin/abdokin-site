import { MainNav } from "~/components/main-nav";
import { Button } from "~/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import HireMe from "~/components/hire-me-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Abderrahman Laraich Home" },
    { name: "description", content: "Welcome to my website!" },
  ];
};
import config from '../config/site'
export default function Index() {
  return (
    <div className="container-lg w-full ">
      <div className="py-4">
        <h1 className="text-2xl md:text-4xl font-bold">Hi, I’m {config.name}</h1>
        <p className="pt-4 text-md text-muted-foreground">I am a developer, an <u className="text-black dark:text-white">open source </u>lover and a hand-tool woodworker from {config.country}.</p>

        <p className="pt-4 text-md text-muted-foreground">
          This is my digital garden, where I write about the things I’m working on and share what I’ve learned.
        </p>
      </div>
      <HireMe />

      <div>
        <h1 className="text-2xl font-bold py-4">About Me</h1>
        <img src="/casablanca-2.jpeg" />
        <p className="pt-4 text-md text-muted-foreground">
          I live in {config.city}, in the {config.country}, with my mother and my sister.
        </p>
        <p className="pt-4 text-md text-muted-foreground">
          My hobbies vary a lot based on my current interests, but playing music (piano/synths & guitar) is always a constant.
        </p>
        <p className="pt-4 text-md text-muted-foreground">
          I’m currently learning woodworking to build toys for my kids, and take sunrise hikes to enjoy the surrounding mountains.
        </p>
        <p className="pt-4 text-md text-muted-foreground">
          I also love cycling, both for transportation and tourism. With my friends, 
          I’ve toured across 7 countries on my bike, along the French Atlantic coast, in the Alps and in the Balkans:
        </p>
      </div>
    </div>
  );
}
