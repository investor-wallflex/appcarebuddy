import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./CarebuddyOnbording.css"; // Make sure to create this CSS file
import logo from "./assets/carebuddy.png"; // Import the image file

const CarebuddyOnbording = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Simulate a loader screen for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      setCurrentPage(1); // Move to the next page after loader
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const pages = [
    {
      title: "Welcome To CareBuddy",
      description: "",
      buttonText: "Next",
      skip: true,
    },
    {
      title: "Appointments",
      description: "Easily schedule appointments with your healthcare provider",
      buttonText: "Next",
      skip: true,
    },
    {
      title: "EHR (Electronic Health Records)",
      description: "Access and manage your health records anytime",
      buttonText: "Next",
      skip: true,
    },
    {
      title: "Virtual Consultations",
      description: "Consult with doctors virtually from the comfort of home",
      buttonText: "Next",
      skip: true,
    },
    {
      title: "Emergency Response and Reminder",
      description: "Access emergency contacts and support instantly and also get timely reminders for medications, check-ups and more",
      buttonText: "Continue",
      skip: false,
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      navigate("/register"); // Navigate to the registration page
    }
  };

  const handleSkip = () => {
    setCurrentPage(pages.length - 1);
  };

  if (isLoading) {
    return (
      <div className="care-buddy-container">
        <h1 className="loaderpage">Welcome <br /> To <br /> <div className="spandiv"><span className="carespan">Care</span>Buddy</div></h1>
        <img src={logo} alt="CareBuddy Logo" className="loader-logo" />    
      </div>
    );
  }


  

  return (
    <div className="care-buddy-container">
      {pages[currentPage].skip && (
        <button className="skip-button" onClick={handleSkip}>
          Skip
        </button>
      )}

      <div className="content">
      <img src={logo} alt="CareBuddy Logo" className="loader-logo" /> 
        <h1>{pages[currentPage].title}</h1>
        {pages[currentPage].description && (
          <p>{pages[currentPage].description}</p>
        )}
      </div>

      <div className="navigation">
        {pages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
          ></span>
        ))}
      </div>

      <button className="next-button" onClick={handleNext}>
        {pages[currentPage].buttonText} <FaArrowRight />
      </button>
    </div>
  );
};

export default CarebuddyOnbording;