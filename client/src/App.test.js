import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('renders home route', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
});

test('renders resume route', () => {
    render(<App />);
    expect(screen.getByText('Resume')).toBeInTheDocument();
});

test('renders contact route', () => {
    render(<App />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
});

test('navigates to home route', () => {
    render(<App />);

    userEvent.click(screen.getByText('Home'));

    expect(screen.getByText('Home')).toBeInTheDocument();
});
test('navigates to resume route', () => {
    render(<App />);

    userEvent.click(screen.getByText('Resume'));

    expect(screen.getByText('Resume')).toBeInTheDocument();
});
test('navigates to contact route', () => {
    render(<App />);

    userEvent.click(screen.getByText('Contact'));

    expect(screen.getByText('Contact')).toBeInTheDocument();
});




