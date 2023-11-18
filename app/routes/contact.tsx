import { MainNav } from "~/components/main-nav";
import { Button } from "~/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import ContactForm from "~/components/contact-form";

export const meta: MetaFunction = () => {
    return [
        { title: "Abderrahman Laraich - Contact " },
        { name: "description", content: "Welcome to my website!" },
      ];
};

export default function Index() {
  return (
    <div  className="container max-w-7xl mt-4 "> 
     
    <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 className="font-medium text-2xl text-gray-800  dark:text-white font-bold">Contact Me</h2>
        <p className="text-lg leading-relaxed text-slate-500 mt-3 dark:text-white">
          If you have any inquiries or just want to say hello, don't hesitate to contact me using the form below or through email or phone.
        </p>
        <div className="mt-5">
          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-white">
            {/* <Icon className="text-gray-400 w-4 h-4" name="uil:map-marker" /> */}
            <span>Your Address Goes Here</span>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-white">
            {/* <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /> */}
            <a href="mailto:laarichabdo@gmail.com">laarichabdo@gmail.com</a>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-white">
            {/* <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /> */}
            <a href="tel:+1234567890">+212 614292371</a>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
      </div>
    </div>
  );
}
