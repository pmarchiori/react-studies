import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Product from "../../components/product";

import axios from "axios";
import { Modal } from "react-responsive-modal";

import styles from "./styles.module.css";

import "react-responsive-modal/styles.css";

// const mock = [
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
// ];

export default function Home() {
  const [visibilidadeModal, setVisibilidadeModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    fornecedor: "",
    url: "",
    descricao: "",
  });

  const [produtos, setProdutos] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://api-produtos-unyleya.vercel.app/produtos"
      );
      setProdutos(response.data);
    } catch (error) {
      alert("Erro ao buscar produto");
    }
  }

  useEffect(() => {
    getProducts();
  });

  async function criarProduto() {
    try {
      await axios.post("https://api-produtos-unyleya.vercel.app/produtos", {
        nome: formData.nome,
        preco: formData.preco,
        fornecedor: formData.fornecedor,
        url: formData.url,
        descricao: formData.descricao,
      });
      getProducts();
      setVisibilidadeModal(false);
      setFormData({
        nome: "",
        preco: "",
        fornecedor: "",
        url: "",
        descricao: "",
      });
      alert("Produto criado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar produto.");
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>Produtos</h2>

        <div className={styles.container_list}>
          {produtos.map((produto) => (
            <Product key={produto._id} produto={produto} />
          ))}
        </div>
      </div>

      <button
        className={styles.float_button}
        onClick={() => setVisibilidadeModal(true)}
      >
        +
      </button>

      <Modal
        open={visibilidadeModal}
        onClose={() => setVisibilidadeModal(false)}
      >
        <div className={styles.container_modal}>
          <h3>Cadastrar produto</h3>
          <input
            value={formData.nome}
            onChange={() =>
              setFormData({ ...formData, nome: event.target.value })
            }
            placeholder="Nome do produto"
          />

          <div className={styles.row}>
            <input
              value={formData.preco}
              onChange={() =>
                setFormData({ ...formData, preco: event.target.value })
              }
              placeholder="Preço"
            />
            <input
              value={formData.fornecedor}
              onChange={() =>
                setFormData({ ...formData, fornecedor: event.target.value })
              }
              placeholder="Fornecedor"
            />
          </div>

          <input
            value={formData.url}
            onChange={() =>
              setFormData({ ...formData, url: event.target.value })
            }
            placeholder="URL da imagem"
          />
          <textarea
            value={formData.descricao}
            onChange={() =>
              setFormData({ ...formData, descricao: event.target.value })
            }
            placeholder="Descrição"
          ></textarea>

          <div className={styles.row}>
            <button onClick={criarProduto}>Salvar</button>
            <button onClick={() => setVisibilidadeModal(false)}>
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
