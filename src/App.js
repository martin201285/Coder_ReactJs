import NavBar from "./components/NavBar/NavBar"
import Logo from "./components/Logo/Logo"
import CartWidget from "./components/CartWidget/CartWidget"
import FavWidget from "./components/FavWidget/FavWidget"
import UserWidget from "./components/UserWidget/UserWidget"
import SearchBar from "./components/SearchBar/SearchBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <Logo/>
        <nav className="menu">
          <NavBar links={["Inicio","Productos","Nosotros","Contacto","Ayuda"]}/>
        </nav>
        <div className="icons">
          <SearchBar/>
          <UserWidget/>
          <FavWidget/>
          <CartWidget/>
        </div>
      </header>
      <div>
        <ItemListContainer greeting={'Bienvenidos'} />
      </div>
    </div>
  );
}

export default App;
