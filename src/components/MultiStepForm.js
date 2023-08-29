import React, { useState } from "react";
import axios from "axios";
import IdeaCard from "./IdeaCard";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    industry: "",
    audience: "",
    budget: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [businessIdea, setBusinessIdea] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitFormData = async (formData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/generate-ideas/",
        formData
      );
      setBusinessIdea(response.data);
      console.log(businessIdea);
    } catch (error) {
      console.log("Error sender data to server", error);
      throw error;
    }
  };

  const handleSubmit = () => {
    console.log("form data:", formData);
    submitFormData(formData);
    setFormSubmitted(true);
  };

  return (
    <div>
      {formSubmitted ? (
        <IdeaCard businessIdea={businessIdea} />
      ) : (
        <form>
          {currentStep === 1 && (
            <div>
              <label>Industry</label>
              <input type="text" name="industry" onChange={handleChange} />
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label>Audience</label>
              <input type="text" name="audience" onChange={handleChange} />
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <label>Budget</label>
              <input type="text" name="budget" onChange={handleChange} />
            </div>
          )}

          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </button>
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </button>
          ) : (
            <button type="button" onClick={handleSubmit}>
              Next
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
