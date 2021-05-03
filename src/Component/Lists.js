import React from "react";
import { FaUser } from "react-icons/fa";

const Lists = () => {
  const list = [
    {
      id: 1,
      button1: "HOME",
      location: "/",
    },
    {
      id: 2,
      button1: "LOGIN",
    },
    {
      id: 3,
      button1: "SIGN UP",
      location: "/signup",
    },
    {
      id: 4,
      button1: "CONTACT US",
    },
  ];
  return (
    <>
      <div className="category ">
        <ul className="d-flex mt-4  float-right">
          {list.map((list) => (
            <li key={list.id}>
              <a href={list.location}>
                <h4 className=" login-btn btn">{list.button1}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Lists;
