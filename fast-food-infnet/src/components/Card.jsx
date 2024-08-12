import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        width="100"
        src={
          props.img
            ? props.img
            : "https://www.frsa.com.au/Themes/BPDTHEME01/theme-client-updates/img/placeholder/product-image.png"
        }
      ></img>
      <p>{props.titulo ? props.titulo : "Título indisponível"}</p>
      <p className="description">
        {props.descricao ? props.descricao : "Descrição indisponível"}
      </p>
    </div>
  );
}
