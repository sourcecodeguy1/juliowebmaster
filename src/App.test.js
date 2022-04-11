import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', (textMatch) => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  const hasText = (node: Element) => node.textContent === textMatch || node.textContent.match(textMatch);
  expect(hasText).toBeInTheDocument();
});
