import { NavBar } from './components/NavBar/NavBar';
import { Logo } from './components/Logo/Logo';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

export function App() {
  return (
    <div className='container'>
      <header>
      <Logo name={"Las Diaz"}/>
      <nav className="menu">
        <NavBar links={["Inicio","Productos","Nosotros","Contacto","Ayuda"]}/>
      </nav>
      </header>
      <div>
        <ItemListContainer greeting={"Bienvenidos"}/>
      </div>
    </div>
  );
}
