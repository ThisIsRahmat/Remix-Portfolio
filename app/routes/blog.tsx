import React from 'react'
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs} from '@remix-run/node';
import { json } from '@remix-run/node';
import { gql } from 'graphql-request';
import { hygraph } from '~/utils/hygraph.server';
import type { Post } from '~/utils/interface';

interface AppProps {
    posts: Post;
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
     const posts= await hygraph.request(query)
     
      return json({posts})
    
}
const Blog = () => {
    const {posts} = useLoaderData() as AppProps;
  return (
    <>
       <>
      
    
        <ul>
         {posts.posts.map((post) =>
        
            <li key={post.id} className="py-4 ">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div>
                  <p className="text-base font-medium leading-6 dark:text-zinc-500 text-zinc-700">
                   {new Date(post.createdAt).toISOString().split('T')[0]}
                  </p>
                </div>

                <Link
                  to={`/post/${post.slug}`}
                  className="space-y-3 xl:col-span-3"
                  prefetch="intent"
                >
                  <div>
                    <h3 className="text-xl font-bold leading-6 tracking-tight text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                  </div>
                  <div className="prose max-w-none text-gray-600 dark:text-gray-400">
                    {post.overview}
                  </div>
                </Link>
              </article>
            </li>
             )}
        
        </ul>
    
    </>
    </>
  )
}

export default Blog
