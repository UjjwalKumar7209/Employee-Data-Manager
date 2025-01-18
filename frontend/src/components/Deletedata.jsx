import React from "react";
import Navbar from "./Navbar";
import { useParams, useNavigate } from "react-router-dom";

const Deletedata = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error deleting item");
      }

      const data = await response.json();
      console.log(data.message);
      navigate("/");
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };
  deleteData()

  return (
    <div>
      <Navbar />i am in delete
    </div>
  );
};

export default Deletedata;
