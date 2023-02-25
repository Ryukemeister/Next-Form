import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import FormComponent from "@/components/formComponent";
import FormButton from "@/components/formBtn";
import { userSchema } from "@/validation/userValidation";
import { motion as m } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [allValues, setAllValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subscription: "free",
  });

  function handleChange(event) {
    setAllValues((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleClick(event) {
    event.preventDefault();

    // Check if the user schema defined matches with the argument passed
    // If schema is valid redirect to success page, else show an alert
    const isValid = await userSchema.isValid(allValues);

    if (isValid) {
      router.push({ pathname: "/success", query: allValues });

      setAllValues({
        firstName: "",
        lastName: "",
        email: "",
        subscription: "free",
      });
    } else {
      alert(
        "ERROR: Form input is not valid, you have may have left some fields incomplete. Please check if the input fields you enter are valid and not empty."
      );
    }
  }

  return (
    <m.div>
      <Head>
        <title>Welcome to the form component!</title>
        <meta
          name="description"
          content="This is a dynamic form with validation built using Next.js which checks if the user input is valid and redirects the user to a success page on form submission"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex font-poppins flex-col gap-y-3 h-screen w-screen justify-center items-center">
        <h1 className="font-bold text-xl sm:text-2xl">Create an Account</h1>
        <form className="flex pt-3 sm:pt-5 px-5 sm:px-8 pb-6 sm:pb-16 flex-col border-2 border-emerald-500 rounded-xl w-[80%] sm:w-[410px]">
          <FormComponent
            labelName="First Name"
            handleChange={handleChange}
            value={allValues.firstName}
            inputName="firstName"
            inputType="text"
          />
          <FormComponent
            labelName="Last Name"
            handleChange={handleChange}
            value={allValues.lastName}
            inputName="lastName"
            inputType="text"
          />
          <FormComponent
            labelName="Email"
            handleChange={handleChange}
            value={allValues.email}
            inputName="email"
            inputType="email"
            placeholderText="samueljackson@gmail.com"
          />
          <div className="mb-2 sm:mb-5 mt-3 sm:mt-6">
            <label className="font-bold">Choose a billing plan</label>
            <div className="flex flex-col gap-2 mt-4">
              <FormComponent
                inputType="radio"
                inputName="subscription"
                labelName="Free - $0"
                handleChange={handleChange}
                value="free"
                checkedValue={allValues.subscription === "free"}
              />
              <FormComponent
                inputType="radio"
                inputName="subscription"
                labelName="Pro - $10"
                handleChange={handleChange}
                value="paid"
                checkedValue={allValues.subscription !== "free"}
              />
            </div>
          </div>
          <FormButton btnName="Create Account" handleClick={handleClick} />
        </form>
      </main>
    </m.div>
  );
}
