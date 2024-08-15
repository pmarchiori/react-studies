import Button from "../button";
import "./styles.css";

import img1 from "../../../imgs/img-card-01.png";
import img2 from "../../../imgs/img-card-02.png";

export default function Informations() {
  return (
    <div className="informations_container">
      <h3>Informações</h3>

      <div className="container_cards_info">
        <CardInfo image={img1} />
        <CardInfo image={img2} />
      </div>
    </div>
  );
}

function CardInfo(props) {
  return (
    <div className="card_info">
      <img src={props.image} alt="" />

      <div className="card_text">
        <p className="title">Lorem ipsum dolor sit amet</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
          feugiat odio. Pellentesque finibus sem eros, nec vestibulum orci
          pellentesque a. Duis id scelerisque diam. Vestibulum et convallis
          arcu.
        </p>

        <Button title="Saiba mais" />
      </div>
    </div>
  );
}
