import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';
import UserList from './UserList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

test('renders UserList component', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
  await waitFor(() => {
    screen.getByText(/users/i)
  })

  expect(screen.getByText(/users/i)).toBeInTheDocument();
});
