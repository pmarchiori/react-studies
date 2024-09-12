import React from "react";

export default function Product(props) {
  return (
    <div>
      <p>{props.produto.nome}</p>
      <img src={props.produto.img} />
      <p>{props.produto.fabricante}</p>
      <p>{props.produto.preco}</p>
    </div>
  );
}
