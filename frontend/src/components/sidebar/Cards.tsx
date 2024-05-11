import Elipse from "../../icons/Elipse";
import Tick from "../../icons/Tick";
interface Props {
  logo: string;
  logoalt: string;
  query: string;
  done: boolean;
}

const Cards = ({ logo, logoalt, query, done }: Props) => {
  return (
    <div className="sidebar-card">
      <div className="sidebar-logo-container">
        <img className="sidebar-logo" src={logo} alt={logoalt} />
      </div>
      <div className="sidebar-content">
        <h5>{query}</h5>
        <h6 className="side-bar-status">{done ? <Tick /> : <Elipse />}</h6>
      </div>
    </div>
  );
};
export default Cards;
