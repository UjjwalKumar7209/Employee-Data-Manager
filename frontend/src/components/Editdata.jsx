import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";

const Editdata = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    console.log("HI");
  }, []);

  const onSubmit = async (data) => {
    let a = await fetch(`http://localhost:3000/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let r = await a.text();
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container flex flex-wrap gap-3 w-3/4 mx-auto my-3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 flex-col">
          <input
            placeholder="Enter Your Name"
            defaultValue=""
            type="text"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
            className="border-black border-2 w-[70vw] px-3 py-2 rounded-lg placeholder-gray-600 placeholder:font-bold placeholder:text-sm"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          <input
            placeholder="Enter Your Age"
            defaultValue=""
            type="number"
            {...register("age", {
              required: { value: true, message: "Age is required" },
            })}
            className="border-black border-2 w-[70vw] px-3 py-2 rounded-lg placeholder-gray-600 placeholder:font-bold placeholder:text-sm"
          />
          {errors.age && <p className="text-red-600">{errors.age.message}</p>}
          <input
            placeholder="Enter Your Phone"
            defaultValue=""
            type="number"
            {...register("phone", {
              required: { value: true, message: "Phone is required" },
            })}
            className="border-black border-2 w-[70vw] px-3 py-2 rounded-lg placeholder-gray-600 placeholder:font-bold placeholder:text-sm"
          />
          {errors.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}
          <input
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 font-bold text-sm py-3 rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default Editdata;
