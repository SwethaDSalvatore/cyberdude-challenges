import React, { useEffect, useState } from "react";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await fetch("https://dummyjson.com/posts");
            const postJson = await fetchedPosts.json();
            setPosts(postJson.posts);
            console.log(postJson);
        };
        fetchPosts();
    }, []);

    const blogPostByTemplate = posts.map((post) => {
        return (
            <div className="m-10">
                <div
                    class="block rounded-lg bg-[#6e5656] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <h5
                        class="mb-2 text-xl font-medium leading-tight text-neutral-50">
                        {post.title}
                    </h5>
                    <p class="mb-4 text-base text-neutral-200">
                        {post.body}
                    </p>
                    <div className="flex gap-x-2 text-white">
                        {post.tags.map((tag, index) => (
                            <div
                                key={`tags-${tag}-${index}`}
                            >
                                #{tag}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-start gap-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="24"
                            viewBox="0 0 256 256"
                            className="text-white">
                            <path
                                fill="currentColor"
                                d="M237 77.47A28 28 0 0 0 216 68h-52V56a44.05 44.05 0 0 0-44-44a12 12 0 0 0-10.73 6.63L72.58 92H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h172a28 28 0 0 0 27.78-24.53l12-96a28 28 0 0 0-6.78-22M36 116h32v80H36Zm184-19.5l-12 96a4 4 0 0 1-4 3.5H92v-89.17l34.82-69.63A20 20 0 0 1 140 56v24a12 12 0 0 0 12 12h64a4 4 0 0 1 4 4.5"
                            />
                        </svg>
                        <span className="text-white">{post.reactions}</span>
                    </div>

                </div>
            </div>
        );
    });

    return <div>{blogPostByTemplate}</div>;
}

export default HomePage;