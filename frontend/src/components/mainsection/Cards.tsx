interface Props {
  stepNo: string;
  query: string;
}

const Cards = ({ stepNo, query }: Props) => {
  return (
    <div className="sidebar-card steps-card">
      <div className="sidebar-no-container">
        <h2>{stepNo}</h2>
      </div>
      <div className="sidebar-content">
        <h3>{query}</h3>
      </div>
    </div>
  );
};
export default Cards;
