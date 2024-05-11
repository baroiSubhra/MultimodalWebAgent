import Cards from "./Cards";
import { useRecoilState } from "recoil";
import { sidebarCards } from "../../atoms/atoms";
import { defaultLogo, defaultLogoAlt } from "./cardsData";
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
  const [querryInProgress, setQuerryInProgress] = useState(false);
  const [cardsData, setCardsData] = useRecoilState(sidebarCards);

  const handleInputChange = (event: any) => {
    setInputMessage(event.target.value);
  };

  const submitMessage = async (e: any) => {
    if (querryInProgress) return;
    setQuerryInProgress(true);
    e.preventDefault();
    const payload: Payload = {
      query: inputMessage,
    };
    setInputMessage("");
    addNewCard(payload.query, false);
    const result = await postQuery(payload);
    if (!result.success) {
      setInputMessage(payload.query);
    }
    addNewCard(payload.query, true);
    setQuerryInProgress(false);
  };

  const addNewCard = (query: string, done: boolean) => {
    const payload = {
      logo: defaultLogo,
      logoalt: defaultLogoAlt,
      query,
      done,
    };
    setCardsData([...cardsData, payload]);
  };

  const cards = cardsData.map((el, index) => {
    return (
      <Cards
        key={index}
        logo={el.logo}
        logoalt={el.logoalt}
        query={el.query}
        done={el.done}
      />
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
            disabled={querryInProgress}
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
