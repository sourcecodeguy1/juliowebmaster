import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {
  /*const {getByText} = render(<App />);
  expect(
      // - content: text content of current element, without text of its children
      // - element.textContent: content of current element plus its children
      screen.getByText((content, element) => {
        return content !== '' && element.textContent === 'HELLO! I\'M JULIO.';
      })
  ).toBeInTheDocument();*/

  const {getByText} = render(<App />);
  const linkElement = screen.getByText((content, element) => {
    return content !== '' && element.textContent === 'HELLO! I\'M JULIO.';
  });
  expect(linkElement).toBeInTheDocument();

});
