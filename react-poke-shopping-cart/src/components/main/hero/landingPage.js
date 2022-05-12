import "./styles.css";
import "./ResponsiveHero.css";

import HeroImg from "../../../assets/pikachugif.gif";

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <h2>Welcome to PokeShop</h2>
          <div className="handle">
            <a href='/'><h3>Click here to login</h3></a>
          </div>
        </div>

        <div className="rigthContent">
          <div className="heroImg">
            <img src={HeroImg} alt="pikachu" />
          </div>
        </div>
      </div>
    </section>
  );
};