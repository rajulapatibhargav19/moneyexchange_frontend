import girlimg from "../../assets/girldtopimg.jpg";
import currency from "../../assets/currency.webp";
import reqaccept from "../../assets/reqaccept.jpg";
import transationmoney from "../../assets/transactionmoney.jpg";
import transferimg from "../../assets/transferimg.webp";
import "../../styles/home.css";

const PtodCont = () => {
  return (
    <div class="cont container">
      <div class="step">
        <img src={currency} alt="User raising request"  />
        <p>
          In our money exchange platform, the process starts when a user needs
          to convert physical cash into digital money. The user first logs into
          the application using their registered account and raises a request,
          providing all the necessary details such as the amount to be converted
          and preferred transaction time.
        </p>
      </div>

      <div >
        <p>
          Once the request is submitted, it becomes visible to available
          employees (service providers) on the platform. Any employee who is
          ready to provide the service can review the request and choose to
          accept it. As soon as an employee accepts, the system automatically
          connects both parties and securely shares the employee’s shop location
          or address with the user.
        </p>
        <img src={girlimg} alt="User raising request"  />

      </div>

      <div class="step">
        <img src={reqaccept} alt="Request accepted by employee" class="right" />

        <p>
          The user then visits the employee’s location at the agreed time,
          carrying the physical cash for the exchange. At the meeting point, the
          transaction takes place — the user hands over the physical cash, and
          the employee transfers the equivalent amount in digital form directly
          to the user’s UPI account.
        </p>
      </div>

      <div >
        <p>
          To compensate for their time and service, the user also pays a small
          commission to the employee, which is agreed upon before the exchange.
          After the transaction is completed successfully, the user can confirm
          the completion within the app and is given the option to rate and
          review the employee’s service. This feedback helps maintain trust,
          ensures service quality, and assists other users in making informed
          choices when selecting an employee for future transactions. The entire
          process is designed to be quick, secure, and transparent, making it
          easy for anyone to convert physical cash into digital money without
          unnecessary delays or complications.
        </p>
         <img
          src={transationmoney}
          alt="Transaction taking place"
          
        />
      </div>
      <img src={transferimg} alt="User giving rating" class="lastimg" />
    </div>
  );
};

export default PtodCont;
