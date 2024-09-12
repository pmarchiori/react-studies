import React from "react";
import Header from "../../components/header";
import Product from "../../components/product";

const mock = [
  {
    id: 1,
    nome: "Teste",
    fabricante: "fabricante",
    preco: 899,
    img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
  },
  {
    id: 2,
    nome: "Teste",
    fabricante: "fabricante",
    preco: 899,
    img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
  },
  {
    id: 3,
    nome: "Teste",
    fabricante: "fabricante",
    preco: 899,
    img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <h2>Produtos</h2>

      <div>
        {mock.map((produto) => (
          <Product key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
