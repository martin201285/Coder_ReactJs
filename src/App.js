import { NavBar } from './components/NavBar/NavBar';
import './App.css';

export function App({nombre}) {
  return (
    <div className='container'>
      <header>
      <h1>Las Diaz</h1>
      <nav className="menu">
        <NavBar links={["Inicio","Productos","Nosotros","Contacto","Ayuda"]}/>
      </nav>
      </header>
    </div>
  );
}
