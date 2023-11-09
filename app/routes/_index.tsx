import Profile from "~/components/Template/Profile";
import Me from "../../public/me.png";
import Navbar from "../components/Template/Navbar";

import React from "react";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs} from "@remix-run/node";
import { json } from "@remix-run/node";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import type { Post, Project } from "~/utils/interface";
import { MoveUpRight } from 'lucide-react';

interface AppProps {
  posts: Post;
  projects: Project;
}




export async function loader({}: LoaderArgs) {
  const query = gql`
    query MyQuery {
      projects(orderBy: publishedAt_DESC) {
        id
        link
        overview
        title
        language 
        titleImage {
          url
        }
        publishedAt
      }
    }
  `;

  const projects = await hygraph.request(query);

  return json({ projects });
}

const socialLinks = [
  {name: "Github", href: "https://github.com/ThisIsRahmat"},
  {name: "Email", href: "mailto:thisisrahmat@gmail.com"},
  {name:"Linkedin", href: "https://www.linkedin.com/in/rahmat-junaid/"}
]


export default function Index() {
  const { projects } = useLoaderData() as AppProps;



  return (
    <div>
  <div>
      <h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
     Hi! I’m Rahmat, 👋🏾
     <br/>
A Product Support Engineer based in the UK 
     </h1>


     <p className="text-lg md:text-xl mx-auto m-6">
I have been working in a mixture of Cloud and Support Engineering roles
for a little over <span className="font-black underline underline-offset-4 decoration-double">5 years</span> now!
      </p>

      {/* <p>
        Durign that time I have worked at startups, 
        </p> */}

      <p className="text-lg md:text-xl mx-auto m-6">
        Prior to working in tech I completed a degree in Neuroscience 🧠
      </p>
<p className=" text-slate-800 text-lg md:text-xl mx-auto m-6">
*ThisisRahmat* is my home on the web where I document my journey to becoming an absolute <span className="italic font-xl font-black underline">beast</span> on Golang and Javascript plus all the things I build along the way.
</p>
</div>

{/* Latest Blogs */}


<p className="text-sm">
  <button className=" text-center w-full border  rounded-md px-2 py-4 bg-[#EFF6FF]">
I am currently working through building <span className="hover:text-[#00008B]"> <Link to="https://codingchallenges.substack.com/"> the coding challenges project</Link> </span> in Golang, you can following my journey <span className="underline hover:text-blue-800"> <Link to="/post/coding-challenges-building-a-url-shortener-in-go" > here </Link> </span>
</button>
  </p>


{/* Latest Projects */}
<div>
       <h1 className=" text-slate-800 text-3xl md:text-4xl mx-auto m-6">
        Latest Projects
      </h1>
    <div className="flex flex-wrap gap-8 justify-center">
      {projects.projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col border border-gray-700 shadow-lg rounded-lg overflow-hidden w-96 transition-transform duration-300 hover:scale-105"
        >

          {/* <img
            className="w-full object-cover h-24" // Adjust the height here with Tailwind's h- class
            src={project.titleImage.url}
            alt={project.title}
          /> */}
          <div className="flex flex-col flex-1 p-4 justify-between">  
            <div className="gap-4">
            <Link to={project.link}>
<p className="md:text-xl text-lg  font-semibold text-black">
                {project.title}
              </p>

              </Link>
              <p className="text-md  mt-2">
                {project.overview}
              </p>
             
              {project.language.map((lang, index) => (
  <button key={index} className=" hover:bg-purple-400 rounded-xl border px-2 text-sm text-light mt-2 mr-2">
    {lang}

  </button>
))}

            </div>
            {/* <div className="mt-auto"> 
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 rounded-lg px-4 py-2 block mt-4"
              >
                View Project
              </a>
            </div> */}
          </div>
        </div>
      ))}
    </div>
      </div>
{/* Latest Blog Posts */}
<div>
   
      <ul className="flex flex-col gap-4">

      </ul>
      </div>

{/* Contact */}

<div>
<h1 className=" text-slate-800 text-3xl md:text-4xl mx-auto m-6">
       Contact
      </h1>
  </div>


  <p className="md:text-2xl text-xl pb-4">
You can get in touch with me on: 
</p>

<div className="pl-32">
<ul className="gap-y-6">
{socialLinks.map((socialLink) => (



<li key={socialLink.id} className=" hover:text-purple-500 flex-inline flex  md:text-2xl text-lg">
  <Link to={socialLink.href}>
  
  <div className="flex-inline text-xl flex underline underline-offset-2">
    {socialLink.name}
    <MoveUpRight size={24} />
</div>
    </Link>
    </li>

))}
</ul>
</div>

    </div>
  );
}
