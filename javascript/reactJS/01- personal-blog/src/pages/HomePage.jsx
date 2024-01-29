import { Link } from "react-router-dom";

const HomePage = () => {
    const RecentBlogPost = [
        {
            id: 1,
            title: "Exciting in learning ReactJs",
            desc: "Most awaited technologly learning begins",
            img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
        },
        {
            id: 2,
            title: "Checkout my first ReactJs project",
            desc: "Most awaited technologly learning begins",
            img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
        },
    ];

    const TopPost = [
        {
            id: 1,
            title: "The Journey to Become a Web Engineer",
            desc: "I'm thrilled to embark on this journey as a commerce graduate, taking my first steps into the technical realm. Join me as I dive into the world of web engineering, eager to explore and learn.",
            img: "https://i.pinimg.com/564x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg",
        },
        {
            id: 2,
            title: "Starting from building a Foundation with HTML",
            desc: "Embarking on a journey of learning from scratch, I am excited to build a solid foundation with HTML. Join me and take first steps in my web development journey.",
            img: "https://i.pinimg.com/564x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg",
        },
        {
            id: 3,
            title: "CSS Learning: Unleashing Creativity in Design",
            desc: "Embarking on the journey of CSS learning, I'm excited to channel my creativity into designing new projects. Join me and push the boundaries of design.",
            img: "https://i.pinimg.com/564x/96/d0/25/96d02512767883fb4130a494ef925e5b.jpg",
        },
        {
            id: 4,
            title: "Explore My Creative CSS Projects - Built with Bootstrap and Tailwind CSS",
            desc: "Take a look at my sleek designs to responsive layouts, these projects showcase my skills and creativity in web development.",
            img: "https://i.pinimg.com/564x/96/d0/25/96d02512767883fb4130a494ef925e5b.jpg",
        },
        {
            id: 5,
            title: "Beginning with JavaScript",
            desc: "Join me on my journey into web development as I dive into the world of JavaScript with excitement and thrill. Follow along as I take my first steps towards mastering this powerful language.",
            img: "https://i.pinimg.com/236x/5b/7b/24/5b7b2421eb83c312ae191d4d9e056d5d.jpg",
        },
        {
            id: 6,
            title: "Created with Excitement and Learning",
            desc: "Delve into my collection of JavaScript projects, from interactive applications to innovative solutions, each project represents a milestone in my journey of mastering JavaScript.",
            img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
        },
    ];

    const topPostTemplate = TopPost.map((post) => {
        return (
            <div className="flex space-x-4 items-center bg-[#DEBACE] hover:bg-[#d09fea] mb-2 rounded p-4 sm:mr-10 mr-5" key={post.id}>
                {/* <img className="w-20 rounded" src={post.img} /> */}
                <div>
                    <h4 className="sm:text-xl text-md font-semibold">{post.title}</h4>
                    <p>{post.desc}</p>
                    <span className="underline cursor-pointer text-[#7B2869]">See more</span>
                </div>
            </div>
        );
    });


    return (
        <div className="bg-cover bg-center bg-[#F9F5E7]">
            <section className="pl-5 pt-5 space-y-4">
                <h4 className="sm:text-2xl text-md sm:font-semibold font-bold text-[#5d1e4f]">Recent Updates</h4>
                <div className="sm:flex space-x-4  bg-[#DEBACE] rounded sm:mr-10 mr-5">
                    <img className="sm:w-72 sm:h-64 " src="https://i.pinimg.com/564x/a4/c5/2e/a4c52ee6369ea47ea3c16a0a0b235ab9.jpg" alt="reactjs-logo" />
                    <div className="p-2">
                        <h4 className="sm:text-xl text-md font-semibold sm:pt-5 sm:pb-5">Explore My Projects: A Showcase of Web Development Skills</h4>
                        <p className="">Discover a range of projects spanning HTML, CSS, JavaScript, DOM manipulation, and ReactJS, all crafted under the guidance of Mr. Anbuselvan Annamalai, CEO, and Founder of CyberDude Networks. From static web pages to dynamic React applications, these projects exemplify my journey and growth in web development. Dive in and witness the results of dedicated mentorship and hands-on learning.</p>
                        <Link className="underline cursor-pointer font-semibold rounded text-[#7B2869]" to={"./my-projects"}>View post</Link>

                    </div>

                </div>
            </section>
            <section className="pl-5 pt-5 space-y-4">
                <div className="sm:flex space-x-4 bg-[#DEBACE] rounded sm:mr-10 mr-5">
                    <img className="sm:w-72 sm:h-72" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" />
                    <div className="p-2">
                        <h4 className="sm:text-xl text-md font-semibold sm:pt-5 sm:pb-5">Excitement in Learning ReactJS: Embarking on a Long-Awaited Technological Journey</h4>
                        <p className="">The wait is finally over as I delve into the world of ReactJS, a technology I've eagerly awaited. Join me on this exhilarating journey as I dive headfirst into mastering ReactJS, exploring its capabilities, and unlocking new possibilities in web development. From understanding the fundamentals to building advanced applications, I'll be documenting every step of my learning process, offering insights, tips, and resources along the way.</p>
                        <Link className="underline cursor-pointer text-[#7B2869] font-semibold" to={"./LearningReact"}>View post</Link>
                    </div>
                </div>
            </section>


            <section className="pl-5 pt-5">
                <h4 className="sm:text-2xl text-md sm:font-semibold font-bold text-[#5d1e4f]">Top Post</h4>
                <div className="sm:grid sm:grid-cols-2 pt-2">
                    {topPostTemplate}
                </div>
            </section>
        </div>
    )
}

export default HomePage;