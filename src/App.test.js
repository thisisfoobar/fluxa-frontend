import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

it('renders NavBar component', () => {
  render(<App />);
  const navBarElement = screen.getByRole('navigation');
  expect(navBarElement).toBeInTheDocument();
});

it('initial state values', () => {
  render(<App />);
  const refreshToken = localStorage.getItem('strava_token');
  expect(refreshToken).toBeNull(); // Assuming localStorage is initially empty
  const tokenExchanged = screen.queryByText(/tokenExchanged/i);
  expect(tokenExchanged).toBeNull(); // Assuming initial state is false
});