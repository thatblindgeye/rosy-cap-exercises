import { render, screen } from '@testing-library/react';
import UserDetail from './UserDetail';

test('renders "Details for" heading', () => {
  render(<UserDetail />);
  const h1Element = screen.getByText(/Details for/i);
  expect(h1Element).toBeInTheDocument();
});
