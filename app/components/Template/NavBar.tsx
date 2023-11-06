import { Disclosure } from "@headlessui/react";

import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { useState } from 'react';

import Profile from "~/components/Template/Profile";
import Me from "../../../public/me.jpg";
import { AtSign, BookA, Binary, PencilLine } from 'lucide-react';

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};


const navigation = [
 
    // {name:"Books", href:"/books", icon: <AtSign/>},
    // {name:"Bookmarks", href:"/bookmarks", icon: <AtSign/>},
    {name:"Blog", href:"/blog", icon: <PencilLine/>},
    {name:"Contact", href:"/contact", icon: <AtSign/>},
    {name:"Projects", href:"/projects", icon: <Binary/>}
  ]

export default function Navbar() {

    const [selectedNav, setSelectedNav] = useState('');
    const handleNavClick = (style) => {
        setSelectedNav((prevNav) => (prevNav === nav ? prevNav : nav));
      };

  return (
    <div className="mt-10 md:mt-20">

        <Link to="/">

<Profile
        imageSrc={Me}
        name="Rahmat Junaid"
       description="thisisrahmat"
        
// Rahmat Junaid is an expererienced infrastructure engineer working in Product and Support roles at startups and scaleups "
      
/>
      {/* <p className="text-center italic  font-thin">
 *This site is built with Remix.run and tailwind and is a current work in progress*
        </p> */}
      {/* This is my little home on the web where I talk about work and write bits and bobs on software development. */}
      </Link>

   
            <div className="mx-auto max-w-screen-xl px-6">
              <div className="flex justify-center items-center">
          
                <div className=" sm:flex space-x-8 items-center">


                  {/*navlink gives an active state*/}
                  <nav className="flex justify-center gap-2 space-x-4 py-4">

                  {navigation.map((nav) => (
                    <div key={nav.name}>
                       <Link to={nav.href}>
                        <button className=" font-[JetBrainsMono] text-lg md:text-xl space-x-2 border inline-flex rounded-lg px-2 py-2 hover:bg-blue-300">
                       
                        <div className="px-2">
                       {nav.icon}
                       </div>
                       {nav.name}
                    
                       </button>
                     </Link>
                     </div>
        
                 ))}
                 
                  </nav>
                  </div>
                  </div>
                  </div>


    </div>
  );
}
