import { Outlet } from 'react-router-dom';
import './sanitize.css';
import './App.css';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <>
      <header>
        <ThemeToggle />
      </header>
      <main aria-live='polite' aria-atomic='true'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
