import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import IdeaCard from "./IdeaCard";
import "./form.css";
import industry from "../../images/industry.png";
import audience from "../../images/audience.png";
import budget from "../../images/budget.png";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    industry: "",
    audience: "",
    budget: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [businessIdea, setBusinessIdea] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [industryError, setIndustryError] = useState(null);
  const [audienceError, setAudienceError] = useState(null);
  const [budgetError, setBudgetError] = useState(null);
  const [isEmptyFields, setIsEmptyFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitFormData = async (formData) => {
    setCurrentStep(1);
    if (
      formData.industry.trim() === "" ||
      formData.audience.trim() === "" ||
      formData.budget.trim() === ""
    ) {
      // Show an error message or take appropriate action here

      return; // Prevent form submission
    }
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
    <div className="form-data">
      {formSubmitted ? (
        <IdeaCard businessIdea={businessIdea} />
      ) : (
        <form>
          {isEmptyFields && (
            <p className="error">Please fill in all the form fields.</p>
          )}
          {currentStep === 1 && (
            <motion.div
              initial={currentStep > 1 ? { x: -500 } : { x: 500 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="form-data__item"
            >
              <div className="form-data__img">
                <img src={industry} alt="industry" />
              </div>

              <div className="form-txt">
                <p>
                  Industry: [Enter the industry you want to generate ideas for.]
                </p>
                <p>
                  Example: <br /> Industry: Technology
                </p>
              </div>

              <input
                type="text"
                name="industry"
                placeholder="Enter Industry"
                value={formData.industry}
                onChange={handleChange}
              />

              <p className="error">{industryError}</p>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={currentStep > 1 ? { x: -500 } : { x: 500 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="form-data__item"
            >
              <div className="form-data__img">
                <img src={audience} alt="audience" />
              </div>

              <div className="form-txt">
                <p>Audience: [Enter your target audience]</p>
                <p>
                  Example: <br /> Audience: World wide.
                </p>
              </div>
              <input
                type="text"
                name="audience"
                value={formData.audience}
                placeholder="Enter your target audience"
                onChange={handleChange}
              />

              <p className="error">{audienceError}</p>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={currentStep > 1 ? { x: -500 } : { x: 500 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="form-data__item"
            >
              <div className="form-data__img">
                <img src={budget} alt="budget" />
              </div>

              <div className="form-txt">
                <p>Budget: [Provide your budget]</p>
                <p>
                  Example: <br /> Budget: $2000
                </p>
              </div>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                placeholder="Enter budget amount"
                onChange={handleChange}
              />

              <p className="error">{budgetError}</p>
            </motion.div>
          )}
          <div className="form-data__btn">
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  className="prev"
                  rel="prev"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  &lt; Previous
                </button>
              )}

              <button
                type="button"
                className="next"
                rel="next"
                onClick={() => {
                  if (currentStep === 1) {
                    if (formData.industry.trim() === "") {
                      setIndustryError("Industry is required");
                    } else {
                      setIndustryError("");
                      setCurrentStep(currentStep + 1);
                    }
                  } else if (currentStep === 2) {
                    if (formData.audience.trim() === "") {
                      setAudienceError("Audience is required");
                    } else {
                      setAudienceError("");
                      setCurrentStep(currentStep + 1);
                    }
                  } else if (currentStep === 3) {
                    if (formData.budget.trim() === "") {
                      setBudgetError("Budget is required");
                    } else {
                      setBudgetError("");

                      handleSubmit();
                    }
                  }
                }}
              >
                Next &gt;
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
