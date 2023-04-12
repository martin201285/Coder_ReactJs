import { NavBar } from './components/NavBar/NavBar';
import { Logo } from './components/Logo/Logo';
import { SearchBar } from './components/SearchBar/SearchBar';
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
        </div>
      </header>
      <div>
        <ItemListContainer greeting={"Bienvenidos"}/>
      </div>
    </div>
  );
}
