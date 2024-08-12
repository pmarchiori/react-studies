import CardCategory from "../components/card-category";
import Header from "../components/header";
import Search from "../components/search";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <Header />

      <Search />

      <div className="home_container_category">
        <CardCategory title="Comidas" />
        <CardCategory title="Bebidas" />
      </div>

      <h1>Home</h1>
      <p>Paragraph</p>
    </div>
  );
}
