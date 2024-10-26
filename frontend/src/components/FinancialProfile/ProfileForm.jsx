import React, { useState } from 'react';
import './ProfileForm.css'; // Ensure to import your CSS file

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    savings: '',
    bankAccount: '',
    monthlyIncome: '',
    primaryIncome: '',
    employmentType: '',
    totalDebt: '',
    primaryGoal: '',
    investmentStyle: '',
    timeHorizon: '',
    riskTolerance: '',
    experienceLevel: '',
    ageGroup: '',
    location: '',
    preferredPlatform: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="profile-form">
      <h2>Basic Financial Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Current Savings Amount</label>
            <input
              type="number"
              name="savings"
              value={formData.savings}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Type of Bank Account</label>
            <select
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="savings">Savings</option>
              <option value="fixedDeposit">Fixed Deposit</option>
              <option value="recurringDeposit">Recurring Deposit</option>
              <option value="currentAccount">Current Account</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Monthly Income Range</label>
            <select
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0-50k">0-50k</option>
              <option value="50k-1L">50k-1L</option>
              <option value="1L-2L">1L-2L</option>
              <option value="2L+">2L+</option>
            </select>
          </div>
          <div className="form-group">
            <label>Primary Source of Income</label>
            <select
              name="primaryIncome"
              value={formData.primaryIncome}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="salary">Salary</option>
              <option value="business">Business</option>
              <option value="freelance">Freelance</option>
              <option value="investments">Investments</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Employment Type</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="fullTime">Full-time</option>
              <option value="partTime">Part-time</option>
              <option value="freelance">Freelance</option>
              <option value="selfEmployed">Self-employed</option>
              <option value="retired">Retired</option>
            </select>
          </div>
          <div className="form-group">
            <label>Total Debt Amount</label>
            <select
              name="totalDebt"
              value={formData.totalDebt}
              onChange={handleChange}
              required
            >
              <option value="">Yes/No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Primary Financial Goal</label>
            <select
              name="primaryGoal"
              value={formData.primaryGoal}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="wealthGrowth">Wealth Growth</option>
              <option value="savingForPurchase">Saving for a Purchase</option>
              <option value="emergencyFund">Emergency Fund</option>
              <option value="retirement">Retirement</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Investment Style</label>
            <select
              name="investmentStyle"
              value={formData.investmentStyle}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="selfManaged">Self-managed</option>
              <option value="balanced">Balanced approach</option>
              <option value="aiSuggested">AI-suggested</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Investment Time Horizon</label>
            <select
              name="timeHorizon"
              value={formData.timeHorizon}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="shortTerm">Short-term</option>
              <option value="mediumTerm">Medium-term</option>
              <option value="longTerm">Long-term</option>
            </select>
          </div>
          <div className="form-group">
            <label>Risk Tolerance</label>
            <select
              name="riskTolerance"
              value={formData.riskTolerance}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Investment Experience Level</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age Group</label>
            <select
              name="ageGroup"
              value={formData.ageGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-50">36-50</option>
              <option value="50+">50+</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Preferred Investment Platform</label>
            <input
              type="text"
              name="preferredPlatform"
              value={formData.preferredPlatform}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;
