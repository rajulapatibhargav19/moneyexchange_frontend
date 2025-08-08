import { Link } from "react-router-dom";
import '../../styles/exchange.css'
const Exchange = () => {
  return (
    <div className="container">
      <h2 className="text-center">CHOOSE THE EXCHANGE WAY</h2>
      <div className="choose_way">
        <div className="ptod">
        <h3>
          <Link to="/ptod">phisical money to digital money</Link>
        </h3>
      </div>
      <div className="dtop">
        <h3>
          <Link to="/dtop">digital money to phisical money</Link>
        </h3>
      </div>
      </div>
    </div>
  );
};
export default Exchange;
