import Cards from "./Cards";
import { cardsData, defaultLogo, defaultLogoAlt } from "./cardsData";
import Play from "../../icons/Play";
import Startover from "../../icons/Startover";
import Step from "../../icons/Step";
import Input from "../input/Input";
import { useState } from "react";
import { postQuery } from "../../api/api";

export interface Payload {
  query: string;
}

const index = () => {
  const [inputMessage, setInputMessage] = useState("");
  const handleInputChange = (event: any) => {
    setInputMessage(event.target.value);
  };
  const submitMessage = (e: any) => {
    e.preventDefault();
    const payload: Payload = {
      query: "hiiii",
    };
    postQuery(payload);
    console.log(e);
  };
  const cards = cardsData.map((el, index) => {
    return (
      <Cards key={index} logo={el.logo} logoalt={el.logoalt} query={el.query} />
    );
  });

  return (
    <div className="sidebar">
      <div className="example-query">{cards}</div>
      <div className="input-area">
        <div className="input-container">
          <Input
            inputMessage={inputMessage}
            handleInputChange={handleInputChange}
            submitMessage={submitMessage}
            placeholder="Write a command"
            showUploadIcon={true}
          />
        </div>
        <div className="action-buttons">
          <div className="start-over-btn">
            {" "}
            <Startover />
          </div>
          <div className="play-btn">
            <Play />
          </div>
          <div className="step-btn">
            <Step />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
