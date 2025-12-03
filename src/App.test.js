import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título principal', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /hogwarts legacy/i });
  expect(heading).toBeInTheDocument();
});

