import React, { useState } from "react";
import ContactUsButton from "../assets/images/bgButtonContactUs.png";
import bgContactUs from "../assets/images/contactbgimage.png";
import Logo from "../assets/images/Logo.png";

const ContactUs = () => {
  return (
    <section
      className="bg-senary h-screen flex flex-col gap-10 justify-center items-center"
      style={{
        backgroundImage: `url(${bgContactUs})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className="bg-quinary w-1/2 lg:w-1/3 flex flex-col justify-center items-center relative">
        {/* Header */}
        <div className="w-full flex justify-end items-end">
          <div className="w-5/6  p-3 flex flex-col ">
            <div>
              <h1 className="text-tertiary">
                <span className="text-primary font-bold">
                  We Love To Hear From &nbsp;
                </span>
                You whater you’re curious about features, a free trial, or even
                press we’re ready to anwser any and all question
              </h1>
            </div>
            <div className="text-tertiary w-full h-1/2 flex flex-col justify-end items-end">
              <h1 className="text-primary font-bold z-10">Find us on map</h1>
              <hr className="border-[#FBCCCF] border-2 h-1/2 -m-1 flex justify-end items-end w-[125px]" />
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="w-full">
          <form className="w-full h-full flex flex-col p-4">
            <div>
              <label className="text-primary">
                Name <span>*</span>
              </label>
              <input
                type="text"
                className="w-full border-primary border-b-2 p-2 outline-none
                focus:border-primary "
              />
            </div>
            <div>
              <label className="text-primary">
                Email <span>*</span>
              </label>
              <input
                type="email"
                className="w-full border-primary border-b-2 p-2 outline-none focus:border-primary bg-transparent "
              />
            </div>
            <div>
              <label className="text-primary">
                Message <span>*</span>
              </label>
              <textarea
                className="w-full border-primary border-b-2 p-2 outline-none focus:border-primary bg-transparent 
              resize-none h-32
              "
              />
            </div>
          </form>
        </div>
        {/* Button */}
        <div className="w-full ">
          <div
            className="w-full h-full flex justify-center items-center bg-primary mt-4"
            style={{ backgroundImage: "url(" + ContactUsButton + ")" }}
          >
            <button className=" text-quinary font-bold p-4 rounded-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
