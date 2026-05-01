"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFuncData = (data) => {
    console.log(data, "Input data");
  };

  return (
    <div className="w-[90%]  mx-auto flex justify-center items-center mt-4 ">
      <div className="bg-base-200 border-base-300 border flex flex-col justify-center w-xl  rounded-box  px-10 py-10 space-y-10">
        <h1 className="text-xl  font-bold text-gray-600 text-center">Login your account</h1>
        <hr className="text-gray-300 border" />
        <form onSubmit={handleSubmit(handleFuncData)}>
          <fieldset className="fieldset">
            <label className="label font-bold">Email</label>
            <input type="email" {...register("email", { required: true })} className="input w-full" placeholder="Email" />
            {errors.email && <p className="text-red-500 text-xl">Please input your valid email</p>}
          </fieldset>

          <fieldset className="fieldset">
            <label className="label font-bold">Password</label>
            <input type="password" {...register("password", { required: true })} className="input w-full" placeholder="Password" />
            {errors.password && <p className="text-red-500 text-xl">Please input your password</p>}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center">
          Don&apos;t have An Account?{" "}
          <Link href={"/register"} className="text-red-500 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
