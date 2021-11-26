import { render, screen } from '@testing-library/react';
import App from '../../App';
import UserList from './UserList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

test('renders "Users" heading', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  const h1Element = screen.getByText(/Users/i);
  expect(h1Element).toBeInTheDocument();
});
