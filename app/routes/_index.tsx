import { motion } from 'framer-motion';
import { MainNav } from "~/components/main-nav";
import { Button } from "~/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import HireMe from "~/components/hire-me-card";
import config from '../config/site';
import { AnimatedText } from "~/components/animated-text";

export const meta: MetaFunction = () => {
  return [
    { title: "Abderrahman Laraich Home" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="container-lg w-full"
    >
      <div className="py-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Hi, I’m{' '}
          <AnimatedText text={config.name} once={true} el="span" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-4 text-md text-muted-foreground"
        >
          I am a developer, an{' '}
          <u className="text-black dark:text-white">open source </u>
          lover and a hand-tool woodworker from {config.country}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pt-4 text-md text-muted-foreground"
        >
          This is my digital garden, where I write about the things I’m working on and share what I’ve learned.
        </motion.p>
      </div>
      <HireMe />


        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="py-4"
        >
          <h1 className="text-2xl font-bold py-4">About Me</h1>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/casablanca-2.jpeg"
            alt="Casablanca"
            className="w-full"
          />
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-4 text-md text-muted-foreground"
          >
            I live in {config.city}, in the {config.country}, with my mother and my sister.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="pt-4 text-md text-muted-foreground"
          >
            My hobbies vary a lot based on my current interests, but playing music (piano/synths & guitar) is always a constant.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="pt-4 text-md text-muted-foreground"
          >
            I’m currently learning woodworking to build toys for my kids, and take sunrise hikes to enjoy the surrounding mountains.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="pt-4 text-md text-muted-foreground"
          >
            I also love cycling, both for transportation and tourism. With my friends,
            I’ve toured across 7 countries on my bike, along the French Atlantic coast, in the Alps and in the Balkans.
          </motion.p>
      </motion.div>
    </motion.div>

  );
}
