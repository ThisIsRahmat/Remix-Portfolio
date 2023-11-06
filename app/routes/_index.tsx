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

interface AppProps {
  posts: Post;
  projects: Project;
}

export async function loader({}: LoaderArgs) {
  const query = gql`
    query Posts {
      posts {
        createdAt
        id
        overview
        slug
        title
        updatedAt
      }
    }
  `;
  const posts = await hygraph.request(query);
  return json({ posts });
}

export async function project_loader({}: LoaderArgs) {
  const project_query = gql`
  query Projects {
    projects(orderBy: publishedAt_DESC) {
      id
      link
      overview
      title
      titleImage {
        url
      }
      publishedAt
    }
  }
  `;
  const projects = await hygraph.request(project_query);
  return json({ projects });
}

export default function Index() {
  const { posts, projects } = useLoaderData() as AppProps;



  return (
    <div>
  <div>
      <h2 className=" text-slate-800 text-2xl md:text-4xl mx-auto m-6">
      I’m Rahmat Junaid,
an  infrastructure engineer based in the UK.
      </h2>
<p className=" text-slate-800 text-lg md:text-xl mx-auto m-6">
This is my little home on the web where I talk about work and write bits and bobs on software development.
</p>
</div>
{/* Latest Projects */}
<div>
       {/* <h1 className=" text-slate-800 text-3xl md:text-4xl mx-auto m-6">
        Latest Projects
      </h1> */}
      {/* <ul className="flex flex-col gap-4">
        {projects.projects.slice(0, 3).map((project) => (
          <li key={project.id}>
            <article className="p-4 rounded-ld space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              {/* This div will contain the date, which we want to stack on top on small screens */}
              {/* <div className="xl:col-span-1"> */}
                {/* <p className="text-base font-medium leading-6 dark:text-zinc-500 text-zinc-700">
                  {new Date(project.publishedAt).toISOString().split("T")[0]}
                </p> */}
              {/* </div> */}
              {/* The link and post content will follow */}
              {/* <Link
                to={`${project.link}`}
                prefetch="intent"
                className="xl:col-span-3" // This will ensure the link takes up the remaining space on larger screens
              >
                <h3 className="text-xl font-bold leading-6 tracking-tight mb-2 dark:text-slate-500">
                  {project.title}
                </h3>
                <div className="prose max-w-none dark:text-slate-300">
                  {project.overview}
                </div>
              </Link>
            </article>
          </li> */}
        {/* ))}
      </ul> */}
      </div>
{/* Latest Blog Posts */}
<div>
      <h1 className=" text-slate-800 text-3xl md:text-4xl mx-auto m-6">
        Latest Blog Post
      </h1>
      <ul className="flex flex-col gap-4">
        {posts.posts.slice(0, 3).map((post) => (
          <li key={post.id}>
            <article className="p-4 rounded-ld space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              {/* This div will contain the date, which we want to stack on top on small screens */}
              <div className="xl:col-span-1">
                <p className="text-base font-medium leading-6 dark:text-zinc-500 text-zinc-700">
                  {new Date(post.createdAt).toISOString().split("T")[0]}
                </p>
              </div>
              {/* The link and post content will follow */}
              <Link
                to={`/post/${post.slug}`}
                prefetch="intent"
                className="xl:col-span-3" // This will ensure the link takes up the remaining space on larger screens
              >
                <h3 className="text-xl  leading-6 tracking-tight mb-2 dark:text-slate-500">
                  {post.title}
                </h3>
                <div className="prose max-w-none dark:text-slate-300">
                  {post.overview}
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
