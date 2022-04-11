import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("HELLO I'M JULIO. Full-stack Developer Home Resume Profile Details Matthew is a pianist living in Nashville.", { textContent: true });
  expect(linkElement).toBeInTheDocument();
});
