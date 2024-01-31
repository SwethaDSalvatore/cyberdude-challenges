import data from "../data/myDetails.json";

const AboutPage = () => {

    return (
        <div className="bg-cover bg-center bg-[#F9F5E7] grid grid-cols-2">
            <section className="p-10 ">
                <h3 className="p-2 rounded bg-[#6b5b21] mt-5 text-white">EXPERIENCE</h3>
                <ul className="p-2 space-y-4">
                    <li class="">
                        <h4 className="text-[#6b5b21] font-semibold">{data[0].Experience.Position[0]}</h4>
                        <h5>{data[0].Experience.CompanyName[0]}</h5>
                        <h5>{data[0].Experience.Year[0]}</h5>
                    </li>
                    <li class="">
                        <h4 className="text-[#6b5b21] font-semibold">{data[0].Experience.Position[1]}</h4>
                        <h5>{data[0].Experience.CompanyName[1]}</h5>
                        <h5>{data[0].Experience.Year[1]}</h5>
                    </li>
                    <li class="">
                        <h4 className="text-[#6b5b21] font-semibold">{data[0].Experience.Position[2]}</h4>
                        <h5>{data[0].Experience.CompanyName[2]}</h5>
                        <h5>{data[0].Experience.Year[2]}</h5>
                    </li>
                </ul>

            </section>
            <section className="p-10 ">
                <h3 className="p-2 rounded bg-[#6b5b21] mt-5 text-white">EDUCATION</h3>
                <ul className="p-2 space-y-4">
                    <li>
                        <h5 className="text-[#6b5b21] font-semibold">{data[0].EducationPg.Name}</h5>
                        <h4>{data[0].EducationUg.Degree} </h4>
                        <h4>{data[0].EducationUg.Year}</h4>
                    </li>
                    <li>
                        <h5 className="text-[#6b5b21] font-semibold">{data[0].EducationUg.Name}</h5>
                        <h4>{data[0].EducationUg.Degree} </h4>
                        <h4>{data[0].EducationUg.Year}</h4>
                    </li>
                    <li>
                        <h5 className="text-[#6b5b21] font-semibold">{data[0].School.Name}</h5>
                        <h4>{data[0].School.HSC} </h4>
                        <h4>{data[0].School.SSLC}</h4>
                    </li>
                </ul>
            </section>
            <section className="p-10 ">
                <h3 className="p-2 rounded bg-[#6b5b21] mt-5 text-white">PROFESSIONAL SKILLS</h3>
                <ul className="p-2 space-y-4">
                    <li className="grid grid-cols-2 m-2">
                        <h4>{data[0].Skills[0].Skill}</h4>
                        <div>
                            <div className="w-full bg-neutral-200 rounded">
                                <div
                                    className="bg-[#d1b653] p-2 text-center text-xs font-medium leading-none text-white rounded"
                                    style={{ width: '85%' }}>{data[0].Skills[0].Percentage}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 m-2">
                        <h4>{data[0].Skills[1].Skill}</h4>
                        <div>
                            <div className="w-full bg-neutral-200 rounded">
                                <div
                                    className="bg-[#d1b653] p-2 text-center text-xs font-medium leading-none text-white rounded"
                                    style={{ width: '85%' }}>{data[0].Skills[1].Percentage}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 m-2">
                        <h4>{data[0].Skills[2].Skill}</h4>
                        <div>
                            <div className="w-full bg-neutral-200 rounded">
                                <div
                                    className="bg-[#d1b653] p-2 text-center text-xs font-medium leading-none text-white rounded"
                                    style={{ width: '65%' }}>{data[0].Skills[2].Percentage}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 m-2">
                        <h4>{data[0].Skills[3].Skill}</h4>
                        <div>
                            <div className="w-full bg-neutral-200 rounded">
                                <div
                                    className="bg-[#d1b653] p-2 text-center text-xs font-medium leading-none text-white rounded"
                                    style={{ width: '75%' }}>{data[0].Skills[3].Percentage}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 m-2">
                        <h4>{data[0].Skills[4].Skill}</h4>
                        <div>
                            <div className="w-full bg-neutral-200 rounded">
                                <div
                                    className="bg-[#d1b653] p-2 text-center text-xs font-medium leading-none text-white rounded"
                                    style={{ width: '85%' }}>{data[0].Skills[4].Percentage}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 m-2">
                        <h4>{data[0].Skills[5].Skill}</h4>
                        <div>
                            <div className="w-full bg-neutral-200 rounded">
                                <div
                                    className="bg-[#d1b653] p-2 text-center text-xs font-medium leading-none text-white rounded"
                                    style={{ width: '75%' }}>{data[0].Skills[5].Percentage}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </section>

            <section className="p-10  ">
                <h1 className="p-2 rounded bg-[#6b5b21] mt-5 text-white">REACH ME!</h1>
                <form className=" p-2 space-y-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-[#6b5b21] font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#6b5b21] font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" placeholder="name@example.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-[#6b5b21] font-semibold mb-2">Message</label>
                        <textarea id="message" name="message"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" rows="4"
                            placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit"
                        className="w-full text-white p-3 rounded bg-[#6b5b21] hover:bg-[#a58d35] focus:outline-none">Submit</button>
                </form>
            </section>


        </div>
    )
}

export default AboutPage;