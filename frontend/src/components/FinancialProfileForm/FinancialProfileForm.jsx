import React, { useState } from "react";
import "./FinancialProfileForm.css";

const FinancialProfileForm = () => {
  const [formData, setFormData] = useState({
    savingsAmount: "",
    monthlyIncomeRange: "",
    incomeSource: "",
    employmentType: "",
    hasDebt: "",
    financialGoal: "",
    investmentStyle: "",
    timeHorizon: "",
    riskTolerance: "3", // Fixed value for risk tolerance
    investmentExperience: "",
    ageGroup: "",
    country: "",
    state: "",
  });

  const countries = [
    { name: "India", states: ["Andhra Pradesh", "Gujarat", "Karnataka", "Maharashtra", "Tamil Nadu"] },
    { name: "USA", states: ["California", "Florida", "New York", "Texas"] },
    { name: "Canada", states: ["Alberta", "British Columbia", "Ontario", "Quebec"] },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "country" && { state: "" }), // Reset state when country changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  // Get the selected country object to determine available states
  const selectedCountry = countries.find(country => country.name === formData.country);

  return (
    <div className="profile-form-container">
      <h2>Basic Financial Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">

        <div className="form-row">
          <label>
            Current Savings Amount:
            <input
              type="number" // Change input type to number
              name="savingsAmount"
              value={formData.savingsAmount}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Monthly Income Range:
            <select name="monthlyIncomeRange" value={formData.monthlyIncomeRange} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="0-50k">0-50k</option>
              <option value="50k-1L">50k-1L</option>
              <option value="1L+">1L+</option>
            </select>
          </label>

          <label>
            Primary Source of Income:
            <select name="incomeSource" value={formData.incomeSource} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Salary">Salary</option>
              <option value="Business">Business</option>
              <option value="Freelance">Freelance</option>
              <option value="Investments">Investments</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Employment Type:
            <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Freelance">Freelance</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Retired">Retired</option>
            </select>
          </label>

          <label>
            Do you have any outstanding debts?
            <select name="hasDebt" value={formData.hasDebt} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Primary Financial Goal:
            <select name="financialGoal" value={formData.financialGoal} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Wealth growth">Wealth growth</option>
              <option value="Saving for a purchase">Saving for a purchase</option>
              <option value="Emergency fund">Emergency fund</option>
              <option value="Retirement">Retirement</option>
            </select>
          </label>

          <label>
            Preferred Investment Style:
            <select name="investmentStyle" value={formData.investmentStyle} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Self-managed">Self-managed</option>
              <option value="Balanced approach">Balanced approach</option>
              <option value="AI-suggested">AI-suggested</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Investment Time Horizon:
            <select name="timeHorizon" value={formData.timeHorizon} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Short-term">Short-term</option>
              <option value="Medium-term">Medium-term</option>
              <option value="Long-term">Long-term</option>
            </select>
          </label>

          <label>
            Risk Tolerance:
            <input
              type="text"
              name="riskTolerance"
              value={formData.riskTolerance}
              readOnly // Make the input read-only
              className="read-only-input"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Investment Experience Level:
            <select name="investmentExperience" value={formData.investmentExperience} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Experienced">Experienced</option>
            </select>
          </label>

          <label>
            Age Group:
            <select name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-50">36-50</option>
              <option value="51+">51+</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Country:
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select...</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            State:
            <select name="state" value={formData.state} onChange={handleChange} disabled={!formData.country}>
              <option value="">Select...</option>
              {selectedCountry && selectedCountry.states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" className="submit-button">Submit Profile</button>
      </form>
    </div>
  );
};

export default FinancialProfileForm;
