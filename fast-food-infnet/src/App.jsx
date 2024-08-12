import "./app.css";

import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";

export default function App() {
  return (
    <div>
      <Header />

      <h2 className="subtitle">Fast Food INFNET</h2>

      <div className="container_cards">
        <Card titulo="Feijoada" descricao="Prato Principal" img={img1} />
        <Card titulo="Camarão" descricao="Prato Principal" img={img2} />
        <Card titulo="Coxinha" descricao="Salgadinho" img={img3} />
        <Card titulo="Torta de limão" descricao="Sobremesa" img={img4} />
        <Card titulo="Coca-Cola" descricao="Bebida" img={img5} />

        <Card />
      </div>

      <Footer description="Todos os direitos reservados - 2024" />
    </div>
  );
}
