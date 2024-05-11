import PlayOutline from "../../icons/PlayOutline";
import Cards from "./Cards";
import { cardsData } from "./CardsData";

const index = () => {
  const cards = cardsData.map((el,index) => {
    return <Cards key={index} stepNo={el.stepNo} query={el.query} />;
  });
  return (
    <div className="main">
      <div className="main-child">
        <PlayOutline />
        <div>
          <h2 className="center-text">Playground</h2>
          <h4>Your live preview will get started here</h4>
        </div>
        <div>{cards}</div>
      </div>
    </div>
  );
};

export default index;
