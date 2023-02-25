import Head from "next/head";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import FormComponent from "@/components/formComponent";
import FormButton from "@/components/formBtn";
import { motion as m } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const formik = useFormik({
    // Setting up initial values for our input fields
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subscription: "free",
    },

    //Setting up user validation
    validationSchema: yup.object({
      firstName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name is required"),
      email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    }),

    // Setting up the handleClick for submission
    onSubmit: (values) => {
      console.log(values);
      router.push({ pathname: "/success", query: values });
      values = {
        firstName: "",
        lastName: "",
        email: "",
        subscription: "free",
      };
    },
  });

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
      <main className="flex font-poppins my-5 flex-col gap-y-3 h-screen w-screen justify-center items-center">
        <h1 className="font-bold text-xl sm:text-2xl">Create an Account</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex pt-3 sm:pt-5 px-5 sm:px-8 pb-6 sm:pb-16 flex-col border-2 border-emerald-500 rounded-xl w-[80%] sm:w-[410px]"
        >
          <FormComponent
            labelName="First Name"
            handleChange={formik.handleChange}
            value={formik.values.firstName}
            error={formik.errors.firstName}
            inputName="firstName"
            inputType="text"
          />
          <FormComponent
            labelName="Last Name"
            handleChange={formik.handleChange}
            value={formik.values.lastName}
            error={formik.errors.lastName}
            inputName="lastName"
            inputType="text"
          />
          <FormComponent
            labelName="Email"
            handleChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
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
                handleChange={formik.handleChange}
                value="free"
                checkedValue={formik.values.subscription === "free"}
              />
              <FormComponent
                inputType="radio"
                inputName="subscription"
                labelName="Pro - $10"
                handleChange={formik.handleChange}
                value="paid"
                checkedValue={formik.values.subscription !== "free"}
              />
            </div>
          </div>
          <FormButton btnName="Create Account" type="submit" />
        </form>
      </main>
    </m.div>
  );
}
