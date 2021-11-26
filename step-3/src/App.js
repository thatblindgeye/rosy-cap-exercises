import './sanitize.css';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <main aria-live='polite' aria-atomic='true'>
            <Outlet />
        </main>
    );
}

export default App;
