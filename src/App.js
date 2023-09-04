import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // CSS 파일을 import

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/post-endpoint", {
        name,
        age,
      });

      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("There was an error sending the POST request", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Send a POST Request</h1>
      <input
        className="input-field"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      <p className="response-message">{responseMessage}</p>
    </div>
  );
};

export default App;
