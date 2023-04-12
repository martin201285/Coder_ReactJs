import { NavBar } from './components/NavBar/NavBar';
import { Logo } from './components/Logo/Logo';
import { SearchBar } from './components/SearchBar/SearchBar';
import { UserWidget } from './components/UserWidget/UserWidget';
import { FavWidget } from './components/FavWidget/FavWidget';
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './App.css';

export function App() {
  return (
    <div className='container'>
      <header>
        <Logo name={"Las Diaz"}/>
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
        <ItemListContainer greeting={"Bienvenidos"}/>
      </div>
    </div>
  );
}
