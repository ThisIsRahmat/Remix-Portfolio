import { Disclosure } from "@headlessui/react";
import DarkThemeButton from "./DarkThemeButton";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { GitHubButton, MenuButtonIcon, NavbarMenuItem } from "./NavbarPartials";

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

export default function TemNavbar() {
  return (
    <>
      <Disclosure as="header">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-screen-xl px-6 dark:text-white">
              <div className="flex justify-between items-center py-4">
                <div>
                  <Link to="/" className="text-3xl font-bold">
                    Rahmat Junaid
                  </Link>
                </div>
         
     
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden ">
   
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
