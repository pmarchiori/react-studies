import "./styles.css";

import img1 from "../../../imgs/img1.svg";
import img2 from "../../../imgs/img2.svg";

export default function CardCategory(props) {
  return (
    <div
      className="card_category_container"
      style={{
        backgroundColor: props.title === "Comidas" ? "#ed1c16" : "#009432",
      }}
    >
      <div className="content">
        <p>{props.title}</p>
        <button>Ver opções</button>
      </div>
      <div>
        <img height="150px" src={props.title === "Comidas" ? img1 : img2} />
      </div>
    </div>
  );
}
