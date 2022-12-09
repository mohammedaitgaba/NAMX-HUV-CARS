import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import "primeicons/primeicons.css";
import { Password } from 'primereact/password';
import PrimaryButton from "../layouts/button/PrimaryButton";
interface Prop{
    Open:Boolean,
    Close:()=>void
  }
function AuthModal(props:Prop) {
  const [value, setValue] = useState<any>();
    const[isLogin ,setIsLogin] = useState<Boolean>(true)
  const Sign_up = () => {
    props.Close;
  };
  if (!props.Open) return null;
  if (isLogin)  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-[#00000057]">
      <div className="w-3/4 lg:w-3/6 m-auto text-senary">
        <form className="bg-quinary p-5 relative">
            <div className="absolute right-6">
                <i className="pi pi-times text-primary cursor-pointer" onClick={()=>props.Close()}></i>
            </div>
          <div className="text-center text-lg font-bold">Sign in</div>
          <div className="relative z-0 sm:mb-4 mb-0 w-full group">
            <label htmlFor="floating_email">Email address</label>
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-1.5 px-1 w-full text-sm text-gray-90 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
          </div>
            <div className=" md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="underline underline-offset-1 text-primary hover:text-senary cursor-pointer" onClick={()=>setIsLogin(false)}>Not registred</div>
          <PrimaryButton
            children={"Register"}
            onClick={() => Sign_up()}
            width={"w-60"}
          />
        </form>
      </div>
    </div>
  )
  else  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-[#00000057]">
      <div className="w-3/4  m-auto text-senary">
        <form className="bg-quinary p-5 relative">
            <div className="absolute right-6">
                <i className="pi pi-times text-primary cursor-pointer" onClick={()=>props.Close()}></i>
            </div>
          <div className="text-center text-lg font-bold">Registration</div>
          <div className="relative z-0 sm:mb-4 mb-0 w-full group">
            <label htmlFor="floating_email">Email address</label>
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-1.5 px-1 w-full text-sm text-gray-90 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
          </div>
          <div className="relative z-0 sm:mb-4 mb-0 w-full group">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_first_name">First name</label>
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_last_name">Last name</label>
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_phone">Phone number</label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="Age">Age</label>
                <input
                  type="Number"
                  min={0}
                  max={100}
                  name="Age"
                  id="Age"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div className="relative z-0 sm:mb-4 mb-0 w-full group">
                <label htmlFor="floating_repeat_password">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>
          <div className="underline underline-offset-1 text-primary hover:text-senary cursor-pointer" onClick={()=>setIsLogin(true)}>Already registred</div>

          <PrimaryButton
            children={"Register"}
            onClick={() => Sign_up()}
            width={"w-60"}
          />
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
