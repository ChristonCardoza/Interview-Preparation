import React, { useState } from "react";

import "./style.css";
import usePasswordGenerator from "./use-password-generator";
import PasswordStrengthIndicator from "./comp/StrengthChecker";
import Button from "./comp/Button";
import Checkbox from "./comp/Checkbox";

const PasswordGenerator = () => {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);

  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Inclued Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Inlude Symbols", state: false },
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkBoxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckBoxData(updatedCheckboxData);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="container">
      {/* Password Text and Copy */}

      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copied ? "copied" : "copy"}
            onClick={() => handleCopy()}
            customClass="button copyBtn"
          />
        </div>
      )}

      {/* Charecter Length */}

      <div className="charLength">
        <span>
          <label>Charecter Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* Checkboxes */}

      <div className="checkboxes">
        {checkBoxData.map((checkbox, index) => {
          return (
            <div>
              <Checkbox
                key={index}
                title={checkbox.title}
                checked={checkbox.state}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>
          );
        })}
      </div>

      {/* Strength */}
      <PasswordStrengthIndicator password={password} />

      {/* Error Handling */}
      {errorMessage && <dic className="errorMessage">{errorMessage}</dic>}

      {/* Generate Button */}
      <Button
        text="Generate Password"
        onClick={() => generatePassword(checkBoxData, length)}
        customClass="button generateBtn"
      />
    </div>
  );
};

export default PasswordGenerator;
