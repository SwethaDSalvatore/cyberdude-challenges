import { useForm } from "react-hook-form";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";
import { FormTextArea } from "../components/FormTextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(3).max(20),
  emailID: z.string().email(),
  message: z.string().min(200).max(2000),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  const sendInfo = (data) => {
    console.log("Sending this info to the server: ", data);
  };

  return (
    <>
      <div className="sm:m-10 m-4">
        <h4 className="text-[#7B2869] sm:text-2xl text-xl font-semibold pb-5">
          Contact me{" "}
        </h4>
        <form
          onSubmit={handleSubmit(sendInfo)}
          className="sm:mr-[350px] sm:space-y-6 space-y-3 bg-[#DEBACE] rounded-lg sm:p-10 p-4"
        >
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 space-y-3 sm:space-y-0">
            <FormInput
              name="fullName"
              label="Full Name"
              placeholder="Enter Your Name"
              register={register("fullName")}
              error={errors.fullName}
              required
            />
            <FormInput
              name="emailID"
              label="Email ID"
              placeholder="Enter Your Email ID"
              register={register("email")}
              error={errors.email}
              required
            />
          </div>
          <FormTextArea
            name="message"
            label="Message"
            placeholder="Type Your Message"
            register={register("message")}
            error={errors.message}
            required
          />
          <FormButton text="Save" />
        </form>
      </div>
    </>
  );
};

export default ContactPage;
