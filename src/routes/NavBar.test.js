import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

// FILE: src/routes/NavBar.test.js

test('renders Navbar component', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders NavLinks', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
  
  const stravaLink = screen.getByText(/Strava/i);
  expect(stravaLink).toBeInTheDocument();
});
