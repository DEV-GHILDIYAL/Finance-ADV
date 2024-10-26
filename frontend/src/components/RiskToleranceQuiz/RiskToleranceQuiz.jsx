import React, { useState } from "react";
import "./RiskToleranceQuix.css";

const RiskToleranceQuiz = () => {

  const investmentQuestions = [
    {
      id: 1,
      question: "How comfortable are you with investment risks?",
      options: [
        { id: "1a", text: "Very uncomfortable", points: 1, weight: 2 },
        { id: "1b", text: "Somewhat uncomfortable", points: 3, weight: 2 },
        { id: "1c", text: "Neutral", points: 5, weight: 1 },
        { id: "1d", text: "Somewhat comfortable", points: 7, weight: 2 },
        { id: "1e", text: "Very comfortable", points: 10, weight: 2 },
      ],
    },
    {
      id: 2,
      question: "What is your investment horizon?",
      options: [
        { id: "2a", text: "Less than 1 year", points: 1, weight: 3 },
        { id: "2b", text: "1-3 years", points: 3, weight: 2 },
        { id: "2c", text: "3-5 years", points: 5, weight: 1 },
        { id: "2d", text: "5-10 years", points: 7, weight: 1 },
        { id: "2e", text: "More than 10 years", points: 10, weight: 2 },
      ],
    },
    {
      id: 3,
      question: "How do you feel about losing some of your investment?",
      options: [
        { id: "3a", text: "I cannot afford to lose any", points: 1, weight: 2 },
        { id: "3b", text: "I can handle minor losses", points: 3, weight: 2 },
        {
          id: "3c",
          text: "I can accept moderate losses",
          points: 5,
          weight: 1,
        },
        {
          id: "3d",
          text: "I can handle significant losses",
          points: 7,
          weight: 1,
        },
        {
          id: "3e",
          text: "I can take high risks for higher returns",
          points: 10,
          weight: 2,
        },
      ],
    },
    {
      id: 4,
      question: "How often do you review your investment portfolio?",
      options: [
        { id: "4a", text: "Never", points: 1, weight: 2 },
        { id: "4b", text: "Once a year", points: 3, weight: 2 },
        { id: "4c", text: "Every few months", points: 5, weight: 1 },
        { id: "4d", text: "Monthly", points: 7, weight: 1 },
        { id: "4e", text: "Weekly", points: 10, weight: 2 },
      ],
    },
    {
      id: 5,
      question: "What percentage of your total income do you invest?",
      options: [
        { id: "5a", text: "0-5%", points: 1, weight: 2 },
        { id: "5b", text: "6-10%", points: 3, weight: 2 },
        { id: "5c", text: "11-20%", points: 5, weight: 1 },
        { id: "5d", text: "21-30%", points: 7, weight: 1 },
        { id: "5e", text: "More than 30%", points: 10, weight: 2 },
      ],
    },
    {
      id: 6,
      question: "What type of investments do you currently have?",
      options: [
        { id: "6a", text: "Only savings account", points: 1, weight: 2 },
        { id: "6b", text: "Savings + Bonds", points: 3, weight: 2 },
        { id: "6c", text: "Savings + Stocks", points: 5, weight: 1 },
        { id: "6d", text: "Mixed portfolio", points: 7, weight: 1 },
        { id: "6e", text: "High-risk investments", points: 10, weight: 2 },
      ],
    },
    {
      id: 7,
      question: "Have you ever experienced significant losses in investments?",
      options: [
        { id: "7a", text: "Yes, and I was very upset", points: 1, weight: 2 },
        { id: "7b", text: "Yes, but I learned from it", points: 3, weight: 2 },
        { id: "7c", text: "No, I haven't lost money", points: 5, weight: 1 },
        {
          id: "7d",
          text: "Yes, and I'm ready to take more risks",
          points: 10,
          weight: 2,
        },
      ],
    },
    {
      id: 8,
      question: "Do you follow financial news regularly?",
      options: [
        { id: "8a", text: "Not at all", points: 1, weight: 2 },
        { id: "8b", text: "Occasionally", points: 3, weight: 2 },
        { id: "8c", text: "Sometimes", points: 5, weight: 1 },
        { id: "8d", text: "Often", points: 7, weight: 1 },
        { id: "8e", text: "Always", points: 10, weight: 2 },
      ],
    },
    {
      id: 9,
      question: "How do you feel about market fluctuations?",
      options: [
        { id: "9a", text: "Very anxious", points: 1, weight: 2 },
        { id: "9b", text: "Somewhat anxious", points: 3, weight: 2 },
        { id: "9c", text: "Neutral", points: 5, weight: 1 },
        { id: "9d", text: "Somewhat comfortable", points: 7, weight: 1 },
        { id: "9e", text: "Very comfortable", points: 10, weight: 2 },
      ],
    },
    {
      id: 10,
      question: "What is your primary financial goal?",
      options: [
        { id: "10a", text: "Safety of capital", points: 1, weight: 3 },
        { id: "10b", text: "Income generation", points: 3, weight: 2 },
        { id: "10c", text: "Wealth accumulation", points: 5, weight: 1 },
        { id: "10d", text: "Aggressive growth", points: 7, weight: 1 },
        { id: "10e", text: "Maximizing returns", points: 10, weight: 2 },
      ],
    },
    {
      id: 11,
      question: "How do you approach new investment opportunities?",
      options: [
        { id: "11a", text: "Avoid them completely", points: 1, weight: 2 },
        {
          id: "11b",
          text: "Consider them very carefully",
          points: 3,
          weight: 2,
        },
        { id: "11c", text: "Open to some new ideas", points: 5, weight: 1 },
        {
          id: "11d",
          text: "Always looking for new opportunities",
          points: 7,
          weight: 1,
        },
        {
          id: "11e",
          text: "Eager to invest in anything promising",
          points: 10,
          weight: 2,
        },
      ],
    },
    {
      id: 12,
      question: "What is your age group?",
      options: [
        { id: "12a", text: "Under 25", points: 1, weight: 3 },
        { id: "12b", text: "25-35", points: 3, weight: 2 },
        { id: "12c", text: "36-45", points: 5, weight: 1 },
        { id: "12d", text: "46-55", points: 7, weight: 1 },
        { id: "12e", text: "56 or older", points: 10, weight: 2 },
      ],
    },
    {
      id: 13,
      question: "How do you view your investment knowledge?",
      options: [
        { id: "13a", text: "I have no knowledge", points: 1, weight: 3 },
        { id: "13b", text: "I am a beginner", points: 3, weight: 2 },
        {
          id: "13c",
          text: "I have intermediate knowledge",
          points: 5,
          weight: 1,
        },
        { id: "13d", text: "I am quite knowledgeable", points: 7, weight: 1 },
        { id: "13e", text: "I am an expert", points: 10, weight: 2 },
      ],
    },
    {
      id: 14,
      question:
        "How would you rate your decision-making skills regarding investments?",
      options: [
        { id: "14a", text: "Very poor", points: 1, weight: 3 },
        { id: "14b", text: "Somewhat poor", points: 3, weight: 2 },
        { id: "14c", text: "Average", points: 5, weight: 1 },
        { id: "14d", text: "Good", points: 7, weight: 1 },
        { id: "14e", text: "Excellent", points: 10, weight: 2 },
      ],
    },
    {
      id: 15,
      question: "How do you respond to financial advice?",
      options: [
        { id: "15a", text: "I ignore it", points: 1, weight: 3 },
        {
          id: "15b",
          text: "I listen but rarely act on it",
          points: 3,
          weight: 2,
        },
        {
          id: "15c",
          text: "I consider it before making decisions",
          points: 5,
          weight: 1,
        },
        { id: "15d", text: "I often follow good advice", points: 7, weight: 1 },
        {
          id: "15e",
          text: "I always follow trusted advice",
          points: 10,
          weight: 2,
        },
      ],
    },
    {
      id: 16,
      question: "What do you think about diversification in investments?",
      options: [
        { id: "16a", text: "Not important", points: 1, weight: 2 },
        { id: "16b", text: "Somewhat important", points: 3, weight: 2 },
        { id: "16c", text: "Important", points: 5, weight: 1 },
        { id: "16d", text: "Very important", points: 7, weight: 1 },
        { id: "16e", text: "Essential", points: 10, weight: 2 },
      ],
    },
    {
      id: 17,
      question: "How do you prefer to learn about investments?",
      options: [
        { id: "17a", text: "Through articles/books", points: 1, weight: 2 },
        { id: "17b", text: "Through videos", points: 3, weight: 2 },
        { id: "17c", text: "Through courses", points: 5, weight: 1 },
        {
          id: "17d",
          text: "Through discussions with others",
          points: 7,
          weight: 1,
        },
        {
          id: "17e",
          text: "Through hands-on experience",
          points: 10,
          weight: 2,
        },
      ],
    },
    {
      id: 18,
      question: "How do you feel about technology in investing?",
      options: [
        {
          id: "18a",
          text: "I prefer traditional methods",
          points: 1,
          weight: 3,
        },
        {
          id: "18b",
          text: "I’m somewhat open to technology",
          points: 3,
          weight: 2,
        },
        {
          id: "18c",
          text: "I use technology occasionally",
          points: 5,
          weight: 1,
        },
        { id: "18d", text: "I embrace technology", points: 7, weight: 1 },
        {
          id: "18e",
          text: "I fully rely on technology",
          points: 10,
          weight: 2,
        },
      ],
    },
    {
      id: 19,
      question: "What is your attitude towards debt in investing?",
      options: [
        { id: "19a", text: "I avoid it at all costs", points: 1, weight: 2 },
        { id: "19b", text: "I’m cautious with it", points: 3, weight: 2 },
        { id: "19c", text: "I use it wisely", points: 5, weight: 1 },
        { id: "19d", text: "I leverage it for growth", points: 7, weight: 1 },
        {
          id: "19e",
          text: "I actively seek debt opportunities",
          points: 10,
          weight: 2,
        },
      ],
    },
    {
      id: 20,
      question: "How do you view your financial future?",
      options: [
        { id: "20a", text: "Very uncertain", points: 1, weight: 2 },
        { id: "20b", text: "Somewhat uncertain", points: 3, weight: 2 },
        { id: "20c", text: "Neutral", points: 5, weight: 1 },
        { id: "20d", text: "Somewhat confident", points: 7, weight: 1 },
        { id: "20e", text: "Very confident", points: 10, weight: 2 },
      ],
    },
    {
      id: 21,
      question: "How important is financial independence to you?",
      options: [
        { id: "21a", text: "Not important", points: 1, weight: 3 },
        { id: "21b", text: "Somewhat important", points: 3, weight: 2 },
        { id: "21c", text: "Important", points: 5, weight: 1 },
        { id: "21d", text: "Very important", points: 7, weight: 1 },
        { id: "21e", text: "Essential", points: 10, weight: 2 },
      ],
    },
    {
      id: 22,
      question: "How do you feel about inflation's impact on investments?",
      options: [
        { id: "22a", text: "Not concerned at all", points: 1, weight: 3 },
        { id: "22b", text: "Somewhat concerned", points: 3, weight: 2 },
        { id: "22c", text: "Moderately concerned", points: 5, weight: 1 },
        { id: "22d", text: "Very concerned", points: 7, weight: 1 },
        { id: "22e", text: "Extremely concerned", points: 10, weight: 2 },
      ],
    },
    {
      id: 23,
      question: "How do you perceive the stock market?",
      options: [
        { id: "23a", text: "Very risky", points: 1, weight: 3 },
        { id: "23b", text: "Somewhat risky", points: 3, weight: 2 },
        { id: "23c", text: "Neutral", points: 5, weight: 1 },
        { id: "23d", text: "Somewhat stable", points: 7, weight: 1 },
        { id: "23e", text: "Very stable", points: 10, weight: 2 },
      ],
    },
    {
      id: 24,
      question: "What is your approach to financial setbacks?",
      options: [
        { id: "24a", text: "I panic", points: 1, weight: 3 },
        { id: "24b", text: "I feel stressed", points: 3, weight: 2 },
        { id: "24c", text: "I stay calm", points: 5, weight: 1 },
        {
          id: "24d",
          text: "I take it as a learning opportunity",
          points: 7,
          weight: 1,
        },
        { id: "24e", text: "I thrive on challenges", points: 10, weight: 2 },
      ],
    },
    {
      id: 25,
      question: "How much time do you dedicate to financial planning?",
      options: [
        { id: "25a", text: "No time at all", points: 1, weight: 2 },
        { id: "25b", text: "A little time", points: 3, weight: 2 },
        { id: "25c", text: "Some time", points: 5, weight: 1 },
        { id: "25d", text: "Considerable time", points: 7, weight: 1 },
        { id: "25e", text: "A lot of time", points: 10, weight: 2 },
      ],
    },
    {
      id: 26,
      question: "What kind of advice do you seek for investments?",
      options: [
        { id: "26a", text: "I don't seek advice", points: 1, weight: 3 },
        { id: "26b", text: "General advice", points: 3, weight: 2 },
        { id: "26c", text: "Expert advice", points: 5, weight: 1 },
        { id: "26d", text: "Peer advice", points: 7, weight: 1 },
        { id: "26e", text: "All available advice", points: 10, weight: 2 },
      ],
    },
    {
      id: 27,
      question: "How do you view your net worth?",
      options: [
        { id: "27a", text: "Negative", points: 1, weight: 3 },
        { id: "27b", text: "Low", points: 3, weight: 2 },
        { id: "27c", text: "Average", points: 5, weight: 1 },
        { id: "27d", text: "Above average", points: 7, weight: 1 },
        { id: "27e", text: "High", points: 10, weight: 2 },
      ],
    },
    {
      id: 28,
      question: "How often do you review your investments?",
      options: [
        { id: "28a", text: "Never", points: 1, weight: 3 },
        { id: "28b", text: "Rarely", points: 3, weight: 2 },
        { id: "28c", text: "Occasionally", points: 5, weight: 1 },
        { id: "28d", text: "Frequently", points: 7, weight: 1 },
        { id: "28e", text: "Always", points: 10, weight: 2 },
      ],
    },
    {
      id: 29,
      question: "What is your ideal investment time horizon?",
      options: [
        { id: "29a", text: "Less than a year", points: 1, weight: 3 },
        { id: "29b", text: "1-3 years", points: 3, weight: 2 },
        { id: "29c", text: "3-5 years", points: 5, weight: 1 },
        { id: "29d", text: "5-10 years", points: 7, weight: 1 },
        { id: "29e", text: "More than 10 years", points: 10, weight: 2 },
      ],
    },
    {
      id: 30,
      question: "How do you feel about market volatility?",
      options: [
        { id: "30a", text: "I fear it", points: 1, weight: 3 },
        { id: "30b", text: "I’m cautious about it", points: 3, weight: 2 },
        { id: "30c", text: "I accept it", points: 5, weight: 1 },
        { id: "30d", text: "I embrace it", points: 7, weight: 1 },
        { id: "30e", text: "I thrive on it", points: 10, weight: 2 },
      ],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [riskProfile, setRiskProfile] = useState('');

  // Handle answer selection and update state
  const handleAnswerSelection = (selectedOption) => {
    const questionId = investmentQuestions[currentQuestionIndex].id;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  // Calculate risk profile based on selected answers
  const calculateRiskProfile = () => {
    let totalPoints = 0;
    let totalWeight = 0;

    // Calculate weighted average score
    for (let question of investmentQuestions) {
      const selectedOption = answers[question.id];
      if (selectedOption) {
        totalPoints += selectedOption.points * selectedOption.weight;
        totalWeight += selectedOption.weight;
      }
    }
    const averageScore = totalPoints / totalWeight;

    // Map averageScore to a 0-10 risk scale
    let riskScore;

    // Categorize and scale within each range
    if (averageScore <= 2.5) {
      riskScore = (averageScore / 2.5) * 2.5;
    } else if (averageScore <= 5) {
      riskScore = ((averageScore - 2.5) / 2.5) * 2.4 + 2.6;
    } else if (averageScore <= 7.5) {
      riskScore = ((averageScore - 5) / 2.5) * 2.5 + 5.1;
    } else {
      riskScore = ((averageScore - 7.5) / 2.5) * 2.5 + 7.6;
    }

    // Output the calculated risk score
    console.log("Calculated Risk Score (0-10):", riskScore.toFixed(1));
    setRiskProfile(riskScore.toFixed(1)); // Update risk profile state
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < investmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateRiskProfile(); // Calculate risk profile if last question
    }
  };

  const currentQuestion = investmentQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>Investment Risk Tolerance Quiz</h1>
      <div className="question">
        <p>{currentQuestion.question}</p>
        <div className="options-container">
          {currentQuestion.options.map((option) => (
            <label key={option.id} className="option-label">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option.id}
                onChange={() => handleAnswerSelection(option)}
                style={{ display: 'none' }} // Hide the radio button
              />
              {option.text}
            </label>
          ))}
        </div>
      </div>
      <button onClick={handleNextQuestion} disabled={!answers[currentQuestion.id]}>
        {currentQuestionIndex < investmentQuestions.length - 1 ? 'Next' : 'Submit'}
      </button>
      {riskProfile && <p>Your investment risk profile is: {riskProfile}</p>}
    </div>
  );
};

export default RiskToleranceQuiz;