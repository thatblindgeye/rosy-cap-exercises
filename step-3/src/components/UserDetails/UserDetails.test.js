import { render, screen, waitFor } from '@testing-library/react';
import UserDetails from './UserDetails';

test('renders UserDetails component', async () => {
  render(<UserDetails />);

  await waitFor(() => {
    screen.getByRole('heading')
  })

  expect(screen.getByRole('heading')).toBeInTheDocument();
});
