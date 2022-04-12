import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {

 /* const {getByText} = render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/

  const { getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const getByTextWithMarkup = (text) => getByText((_, node) => node.textContent === text);
  return getByTextWithMarkup();
});
