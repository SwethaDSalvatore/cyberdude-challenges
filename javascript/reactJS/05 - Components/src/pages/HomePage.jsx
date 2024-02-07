import { AlertComponents } from "../components/AlertComponents";
import { ButtonComponents } from "../components/ButtonComponents";
import { CardComponents } from "../components/CardComponents";

const HomePage = () => {
    const alerts = [
        {
            backgroundColor: "bg-blue-400",
            textColor: "text-white",
            message: "A simple primary alert"
        },
        {
            backgroundColor: "bg-black",
            textColor: "text-white",
            message: "A simple secondary alert"
        },
        {
            backgroundColor: "bg-indigo-400",
            textColor: "text-white",
            message: "A simple info alert"
        },
        {
            backgroundColor: "bg-neutral-200",
            textColor: "text-black",
            message: "A simple light alert"
        },
        {
            backgroundColor: "bg-neutral-700",
            textColor: "text-white",
            message: "A simple dark alert"
        },
    ];

    const button = [
        {
            backgroundColor: "bg-blue-700 hover:bg-blue-400",
            textColor: "text-white",
            message: "Primary"
        },
        {
            backgroundColor: "bg-black hover:bg-neutral-700",
            textColor: "text-white",
            message: "Secondary"
        },
        {
            backgroundColor: "bg-indigo-700 hover:bg-indigo-400",
            textColor: "text-white",
            message: "Info"
        },
        {
            backgroundColor: "bg-neutral-200 hover:bg-neutral-400",
            textColor: "text-black",
            message: "Light"
        },
        {
            backgroundColor: "bg-neutral-700 hover:bg-neutral-400",
            textColor: "text-white",
            message: "Dark"
        },
    ];

    return (
        <>
            <div id="alert">
                <h1 className="p-5 font-bold text-2xl text-[#294B29] underline">Alert Components - TailwindCSS</h1>
                <AlertComponents alerts={alerts} />
            </div>
            <div id="button">
                <h1 className="p-5 font-bold text-2xl text-[#294B29] underline">Button Components - TailwindCSS</h1>
                <ButtonComponents alerts={button} />
            </div>
            <div id="button">
                <h1 className="p-5 font-bold text-2xl text-[#294B29] underline">Card Components - TailwindCSS</h1>
                <CardComponents alerts={button} />
            </div>
        </>
    );
}

export default HomePage;