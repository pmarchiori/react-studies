import React, { useEffect, useState } from "react";

import Header from "../../components/header";

import styles from "./styles.module.css";

import { useParams } from "react-router-dom";
import axios from "axios";

import "react-responsive-modal/styles.css";

// const mock = {
//   id: 3,
//   nome: "Teste",
//   fabricante: "fabricante",
//   preco: 899,
//   img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   descricao:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum erat neque, at placerat quam ullamcorper ac. Sed interdum nibh et condimentum mattis. Aliquam blandit, ante aliquet facilisis sollicitudin, orci ante ultricies erat, ut aliquam justo massa congue erat. In fringilla dolor sit amet elit sodales bibendum. Curabitur placerat neque sit amet ex varius laoreet ac eu est. Nam hendrerit rutrum libero eget elementum. Curabitur sit amet purus tortor. Praesent fermentum quam leo, ut rhoncus turpis ornare id.",
// };

export default function Details() {
  const parametros = useParams();

  const [productDetails, setProductDetails] = useState({});

  async function getProductDetails() {
    try {
      const response = await axios.get(
        `https://api-produtos-unyleya.vercel.app/produtos/${parametros.id}`
      );
      setProductDetails(response.data);
    } catch (error) {
      alert("Erro ao buscar detalhes do produto.");
    }
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <div>
          <img src={productDetails.url_imagem} />
        </div>
        <div className={styles.details}>
          <p>{productDetails.nome}</p>
          <p>{productDetails.id}</p>
          <p>R$ {productDetails.preco}</p>
          <p>{productDetails.fornecedor}</p>
          <p>{productDetails.descricao}</p>
        </div>
      </div>
    </div>
  );
}
