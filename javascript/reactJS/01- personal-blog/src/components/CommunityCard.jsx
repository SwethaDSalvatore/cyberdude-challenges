import { Link } from "react-router-dom";
import SwethaPic from "../assets/Swetha-pic.jpg";

const communityCard = () => {
    return <div className=" text-white max-w-xs mx-auto">
        <div className="mt-10 text-center sm:space-y-4 p-4 space-y-2 bg-[#7B2869] sm:rounded-lg">
            <div className="flex items-center justify-center">
                <img className="w-36 h-36 rounded-full justify-center items-center" src={SwethaPic} alt="" />
            </div>
            <h2 className="sm:text-2xl text-xl font-semibold">Swetha Ramesh</h2>
            <p className="font-semibold sm:text-base text-md">Frontend Developer |Database Administator |Digital Marketer |MBA in Marketing | </p>
            <ul class="flex space-x-4 items-center justify-center">
                <li>
                    <a href="tel:+91 8072625594" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="31.76" height="32" viewBox="0 0 256 258"
                        className="w-7 fill-current"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38" /><stop offset="100%" stop-color="#60D669" /></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9" /><stop offset="100%" stop-color="#FFF" /></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" /><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" /><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" /></svg></a>
                </li>
                <li>
                    <a href="https://github.com/SwethaDSalvatore" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                            className="w-10 text-white fill-current">
                            <path fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2" /></svg></a>
                </li>
                <li>
                    <a href="mailto:swetharamesh35309@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
                        className="w-7 fill-current"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60" /><path fill="#4285F4" d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636" /><path fill="#34A853" d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091" /><path fill="#FBBC04" d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363" /><path fill="#EA4335" d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675" /><path fill="#C5221F" d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493" /></g></svg></a>
                </li>
            </ul>
            <p className="">Passionate about driving business growth through strategic marketing. 📈 Experienced in marketing and business outsourcing. 🌟 Committed to continuous learning and blending non-technical expertise with emerging tech skills. Let's connect and explore opportunities together! 👋</p>


        </div>
        <div className="  mt-10 bg-[#7B2869] p-4 sm:rounded-lg">
            <h1 className="font-semibold  text-xl text-center" >Recent Updates</h1>
            <div className="pl-5 p-2">
              <Link className="underline cursor-pointer " to={"./my-projects"}>Explore My Projects</Link>
            </div>
            <div className="pl-5">
                <Link className="underline cursor-pointer " to={"./LearningReact"}>Excitement in Learning ReactJS</Link>
            </div>
        </div>

    </div>
}

export default communityCard