import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ThemeToggle in App', () => {
  render(<App />);
  const themeToggle = screen.getByRole('checkbox');
  expect(themeToggle).toBeInTheDocument();
});