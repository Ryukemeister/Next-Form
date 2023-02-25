import { useRouter } from "next/router";
import Link from "next/link";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";

function Success() {
  const router = useRouter();
  console.log(router.query);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen h-screen flex justify-center items-center"
      /*  className="h-screen border-2 border-red-400 flex items-center justify-center"*/
    >
      <Confetti />
      <div className="bg-emerald-400 mx-4 rounded-lg font-poppins sm:mx-52 text-white py-16 px-5 sm:p-16">
        <h1 className="text-3xl pl-4 md:pl-0 pb-4 font-bold">
          Thank you for the submission {router.query.firstName} ✨
        </h1>
        <p className="text-lg pl-4 md:pl-0 font-normal">
          {" "}
          We have sent you a link over at {router.query.email}. Please log in to
          your account using the link provided!
        </p>
        <button className="bg-yellow-500 font-bold px-4 ml-4 md:ml-0 py-1 text-lg rounded-full mt-3">
          <Link href="/">Home</Link>
        </button>
      </div>
    </m.main>
  );
}

export default Success;
