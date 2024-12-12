import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How CareerNest Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Get started by creating a personalized account on CareerNest. Fill in your details and preferences, whether you're looking for a job or posting a job. 
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Explore a wide range of job listings based on your skills and preferences. 
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Once you've found the right job or candidate, take the next step by applying. 
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HowItWorks;
