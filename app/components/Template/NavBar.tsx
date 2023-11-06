import { Disclosure } from "@headlessui/react";
import DarkThemeButton from "./DarkThemeButton";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { GitHubButton, MenuButtonIcon, NavbarMenuItem } from "./NavbarPartials";
import Profile from "~/components/Template/Profile";
import Me from "../../../public/me.png";

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

export default function Navbar() {
  return (
    <div>

<Profile
        imageSrc={Me}
        name="Rahmat Junaid"
        description="Software Engineer who's obsessed with learning and building new things."
      />

   
            <div className="mx-auto max-w-screen-xl px-6 dark:text-white">
              <div className="flex justify-center items-center py-4">
          
                <div className=" sm:flex space-x-8 items-center">
                  {/*navlink gives an active state*/}
                  <nav className="flex justify-center space-x-10 py-4">
                  <a
                      href="/projects"
                      className="text-black font-semibold dark:text-white"
                    >
                      Projects
                    </a>
                    <a
                      href="/blog"
                      className="text-black dar font-semibold dark:text-white"
                    >
                      Articles
                    </a>
                
                    <a
                      href="/Contactme"
                      className="text-black font-semibold dark:text-white"
                    >
                      Contact Me
                    </a>
                  </nav>
                  </div>
                  </div>
                  </div>


    </div>
  );
}
