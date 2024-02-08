import { useState } from "react"
import { FormButton } from "../components/FormButton"
import { FormInput } from "../components/FormInput"
import { FormTextArea } from "../components/FormTextArea"

const ContactPage = () => {
    const [form, setForm] = useState({ fullName: "", emailID: "", message: "" })

    const [formError, setFormError] = useState({
        fullName: null,
        emailID: null,
        message: null,
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;

        if (name === "fullName") {
            if (value.length < 4) {
                setFormError((prev) => ({
                    ...prev,
                    fullName: "Full Name validation failed!",
                }));
            } else {
                setFormError((prev) => ({
                    ...prev,
                    fullName: "",
                }));
            }
        }

        setForm((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const submitFormToServer = (e) => {
        e.preventDefault();
        console.log(form);
        alert("Form submitted, successfully!");
    };

    return (<>
        <div className="sm:m-10 m-4">
            <h4 className="text-[#7B2869] sm:text-2xl text-xl font-semibold pb-5">Contact me </h4>
            <form action="" onSubmit={submitFormToServer} className="sm:mr-[350px] sm:space-y-6 space-y-3 bg-[#DEBACE] rounded-lg sm:p-10 p-4">
                <div className="sm:grid sm:grid-cols-2 sm:gap-10 space-y-3 sm:space-y-0">
                    <FormInput name="fullName" label="Full Name" placeholder="Enter Your Name" value={form.fullName} handleOnChange={handleInputs} required />
                    {formError.fullName ? (
                        <small className="text-red-500">{formError.fullName}</small>
                    ) : (
                        ""
                    )}
                    <FormInput name="emailID" label="Email ID" placeholder="Enter Your Email ID" value={form.emailID}
                        handleOnChange={handleInputs} required />
                </div>
                <FormTextArea name="message" label="Message" placeholder="Type Your Message" value={form.desc}
                    handleOnChange={handleInputs}
                    required />
                <FormButton text="Save" />
            </form>
        </div>
    </>)
}

export default ContactPage