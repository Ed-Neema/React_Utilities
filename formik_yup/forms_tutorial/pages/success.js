import React from "react";
import { useRouter } from "next/router";
const success = () => {
  const router = useRouter();
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg w-1/2 text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-bold">
          Thanks for the Submission {router.query.name} ✨
        </h1>
        <p className="text-lg text-gray-500">
          We have sent you an email over at {router.query.email}
        </p>
      </div>
    </main>
  );
};

export default success;
