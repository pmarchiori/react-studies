import CardCategory from "../components/card-category";
import Header from "../components/header";
import Search from "../components/search";
import Restaurants from "../components/restaurants";
import Informations from "../components/informations";
import Footer from "../components/footer";

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

      <Restaurants />

      <Informations />

      <Footer />
    </div>
  );
}
