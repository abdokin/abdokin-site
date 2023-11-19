import { MainNav } from "~/components/main-nav";
import { Button } from "~/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import ContactForm from "~/components/contact-form";
import { EnvelopeClosedIcon,HomeIcon ,ChatBubbleIcon} from "@radix-ui/react-icons";

export const meta: MetaFunction = () => {
    return [
        { title: "Abderrahman Laraich - Contact " },
        { name: "description", content: "Welcome to my website!" },
      ];
};
import config from '../config/site'
export default function Index() {
  return (
    <div className="container-lg ">
     
    <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 className="font-medium text-2xl text-gray-800  dark:text-white font-bold">Contact Me</h2>
        <p className="text-lg leading-relaxed text-slate-500 mt-3 dark:text-white">
          If you have any inquiries or just want to say hello, don't hesitate to contact me using the form below or through email or phone.
        </p>
        <div className="mt-5">
          
          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-white">
            <EnvelopeClosedIcon/>
            <a href="mailto:laarichabdo@gmail.com">{config.contactEmail}</a>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-white">
            <ChatBubbleIcon/>
            <a href={`tel:${config.phone}`}>{config.phone}</a>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-white">
            <span className="text-sm">{config.address}</span>
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
