import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Authentication from './Authentication';

test('renders main elements', () => {
  render(<Authentication />);
  
  const headingElement = screen.getByText(/Welcome To Silly Emoji Titles/i);
  expect(headingElement).toBeInTheDocument();
  
  const paragraphElement = screen.getByText(/With this fun little app, you no longer will have boring titles/i);
  expect(paragraphElement).toBeInTheDocument();
  
  const buttonElement = screen.getByRole('button', { name: /Connect to Strava/i });
  expect(buttonElement).toBeInTheDocument();
});

test('button click calls handleAuth', () => {
  const originalLocation = window.location;
  delete window.location;
  window.location = { href: '' };

  render(<Authentication />);
  
  const buttonElement = screen.getByRole('button', { name: /Connect to Strava/i });
  fireEvent.click(buttonElement);
  
  const clientId = import.meta.env.VITE_STRAVA_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_STRAVA_REDIRECT_URI;
  const expectedUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}/&scope=read_all,activity:write,activity:read_all&state=someRandomState`;
  
  expect(window.location.href).toBe(expectedUrl);

  window.location = originalLocation;
});