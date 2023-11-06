import SocialCard from "~/components/Template/SocialCard";
import type { ReactElement } from 'react';
import { Link } from "@remix-run/react";

const Contact = () => {
    // Define your icons here as React Elements
  
    return (
        
       <div className="flex flex-col  p-8 min-h-screen "> {/* This ensures the content is centered vertically and horizontally in the viewport */}
  {/* <h1 className="text-3xl  leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mb-12">
    Contact
    </h1> */}
     <div className="text-center">
  
      You can <Link to> email me</Link>, or find me on GitHub, LinkedIn and Twitter.
      </div>
      </div>
    );
  };
  
  export default Contact;