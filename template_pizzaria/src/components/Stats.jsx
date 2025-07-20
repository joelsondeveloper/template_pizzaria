import "./Stats.css";

const Stats = ({ number, text }) => {
  return (
    <div className="Stats">
      <span>{number}+</span>
      <p>{text}</p>
    </div>
  );
};

export default Stats;
