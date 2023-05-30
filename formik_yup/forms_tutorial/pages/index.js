import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import formImage from "../public/sideImage.jpg";
import { FormikContext, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import { useState } from "react";
import Modal from "react-overlays/Modal";

export default function Home() {
  // MODAL LOGIC
  const [showModal, setShowModal] = useState(false);
  // to close the modal
  var handleClose = () => setShowModal(false);
  // to save when save it clicked
  var handleSuccess = () => {
    console.log("Success");
  };
  const renderBackdrop = (props) => <div className="fixed z-1000 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30" {...props} />;

  // End of modal Logic
  // router
  const router = useRouter();
  // formik logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Rwanda",
      terms: "",
    },
    // validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),
    // submit form
    onSubmit: (values) => {
      // can save to database here
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
  });

  // console.log(formik.values);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex relative items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-1/2"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-bold">Let's Get Started 👋🏽</h1>
            <p className="text-lg text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses
              and digital assets ready to download
            </p>
            {/* input fields */}
            <div className="mt-6">
              {/* name input */}
              <div className="pb-4">
                <label className="block text-sm font-bold" htmlFor="name">
                  Name
                  <div className="text-red-500 font-bold">
                    {formik.touched.name && formik.errors.name
                      ? formik.errors.name
                      : ""}
                  </div>
                </label>
                <input
                  className="p-1.5 border rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} //prevent highlighting if the input field is not in focus
                  id=""
                />
              </div>
              {/* email input */}
              <div className="pb-4">
                <label className="block text-sm font-bold" htmlFor="email">
                  Email
                  <div className="text-red-500 font-bold">
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : ""}
                  </div>
                </label>
                <input
                  className="p-1.5 border rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id=""
                />
              </div>
              {/* ecountry input */}
              <div className="pb-4">
                <label className="block text-sm font-bold" htmlFor="country">
                  Country
                </label>
                <select
                  className="p-1.5 border rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  id=""
                >
                  <option>Nigeria</option>
                  <option>Kenya</option>
                  <option>Ghana</option>
                  <option>Egypt</option>
                  <option>Rwanda</option>
                  <option>Malawi</option>
                </select>
              </div>
              {/* Terms of service*/}
              <div className="pb-4">
                <label className="block text-sm font-bold" htmlFor="terms">
                  Terms of serice
                  <div className="text-red-500 font-bold">
                    {formik.touched.terms && formik.errors.terms
                      ? formik.errors.terms
                      : ""}
                  </div>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white text-sm py-3 mt-6 rounded-lg w-full"
              >
                Start learning today
              </button>
            </div>
            {/* end of input fields */}
          </div>

          <div className=" relative flex-1">
            <Image
              src={formImage}
              alt="form-learn"
              fill
              className="object-cover"
            />
          </div>
        </form>
        <div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-white text-teal-500 px-4 py-1.5 hover:bg-teal-500 border border-white hover:text-white rounded-md ml-4 font-bold text-sm"
          >
            Open
          </button>
        </div>
        <Modal
          className="modal"
          show={showModal}
          onHide={handleClose}
          renderBackdrop={renderBackdrop}
        >
          
            <div className="bg-white absolute top-0 w-1/2 text-center self-center flex flex-col justify-center items-center">
              <div className="my-4">
                <span className="text-gray-900" onClick={handleClose}>
                  x
                </span>
              </div>
              <div className="text-gray-700 font-bold text-lg p-4">
                Thank you for coming to our platform! Murakoze!🙏🏽
              </div>
              <div>
                <button
                  className="bg-teal-500 px-2 py-1.5 text-white font-bold text-sm"
                  type="button"
                  onClick={handleSuccess}
                >
                  Save
                </button>
              </div>
            </div>
       
        </Modal>
      </main>
    </m.div>
  );
}