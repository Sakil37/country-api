import { Link } from "react-router-dom";
const Singelservice = ({ contry }) => {
  const { name, capital, flags, cca2 } = contry;

  return (
    <div className="col-lg-3 mb-3">
      <div className=" text-center main py-4 px-4">
        <h2>{name.common}</h2>
        <h3>{capital}</h3>
        <div className="flagbg text-center">
          <img src={flags.png} />
        </div>
        <Link to={`/details/${cca2}`} className="linkcss">
          details
        </Link>
      </div>
    </div>
  );
};

export default Singelservice;
