import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Alldata = () => {
  const [Student, setStudent] = useState([]);
  const [Delete, setDelete] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setStudent(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container flex flex-wrap gap-3 w-3/4 mx-auto my-3">
        {Student.map((student) => (
          <div
            key={student._id}
            className="border-2 border-black p-3 m-3 rounded-md flex flex-col gap-1 bg-green-500 mx-auto"
          >
            <p className="text-lg m-1">Name: {student.name}</p>
            <div className="w-full h-[2px] bg-black"></div>
            <p className="text-lg m-1">Age: {student.age}</p>
            <div className="w-full h-[2px] bg-black"></div>
            <p className="text-lg m-1">Phone: {student.phone}</p>
            <div className="w-full h-[2px] bg-black"></div>
            <div className="flex">
              <Link
                to={`/${student._id}`}
                className="bg-blue-600 m-1 px-3 py-1 rounded-lg"
              >
                Edit
              </Link>
              <Link
                to={`/delete/${student._id}`}
                className="bg-red-600 m-1 px-3 py-1 rounded-lg"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alldata;
