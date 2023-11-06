import SocialCard from "~/components/Template/SocialCard";
import type { ReactElement } from 'react';
import { Link } from "@remix-run/react";

const Books = () => {
    // Define your icons here as React Elements
  
    return (
        
       <div className="flex flex-col items-center p-8 min-h-screen "> {/* This ensures the content is centered vertically and horizontally in the viewport */}
  <h1 className="text-4xl  p-4 mb-6">Contact</h1> {/* Adjust the margin-bottom (mb-8) as needed */}
      <div className="text-center">
  
      You can email me, or find me on GitHub, LinkedIn and Twitter.
      </div>
      </div>
    );
  };
  
  export default Books;