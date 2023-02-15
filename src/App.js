import NavBar from "./components/NavBar/NavBar"
import Logo from "./components/Logo/Logo"
import CartWidget from "./components/CartWidget/CartWidget"
import FavWidget from "./components/FavWidget"
import UserWidget from "./components/UserWidget"
import SearchBar from "./components/SearchBar/SearchBar"
import "./App.css";

function App() {
  return (
    <header>
      <Logo/>
      <nav className="menu">
        <NavBar links={["Inicio","Remeras","Pantalones","Nosotros","Contacto"]}/>
      </nav>
      <div className="icons">
        <SearchBar/>
        <UserWidget/>
        <FavWidget/>
        <CartWidget/>
      </div>
    </header>
  );
}

export default App;
