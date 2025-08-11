import maprealrootimg from "../../assets/maprealrootimg.jpg";
import maprootimg from "../../assets/maprootimg.jpg";
import "../../styles/home.css";
const GoogleMapCont = () => {
  return (
    <div className="container map_cont">
      <div>
        <div className="img">
          <img src={maprealrootimg} alt="Built-in map feature" />
          <img src={maprootimg} alt="User navigating to service provider" />
        </div>
        <p>
          Our platform makes it easy for users to find the exact location of the
          selected service provider by providing a built-in map feature powered
          by Google Maps.
        </p>
      </div>

      <p>
        Once a request is accepted, the service provider’s shop address or
        designated meeting location is securely shared with the user through the
        application. This ensures that the user knows exactly where to go,
        without the need for lengthy phone calls or confusing directions.
      </p>

      <p>
        The integrated map link allows real-time navigation, helping the user
        follow the best route and reach the location on time. Whether the
        meeting point is a shop, office, or any other designated area, this
        feature guarantees clarity and convenience.
      </p>

      <div>
        <p>
          By removing guesswork and saving time, our location-sharing system
          ensures a smooth and timely meeting for the money exchange. The
          process not only improves efficiency but also builds trust between
          users and service providers, as both parties can be confident they are
          meeting at the correct location.
        </p>
      </div>

      <p>
        Overall, this feature plays a crucial role in ensuring safe, quick, and
        hassle-free transactions on our platform.
      </p>
    </div>
  );
};

export default GoogleMapCont;
