import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import View from './View';
import '@testing-library/jest-dom';

describe('View', () => {
  function renderWithRouter(ui) {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
  }

  it('renders setup message', () => {
    renderWithRouter(<View refreshToken={null} setRefreshToken={() => {}} tokenExchanged={false} setTokenExchanged={() => {}} />);
    expect(screen.getByText(/you're set up/i)).toBeInTheDocument();
  });

  it('renders Strava button', () => {
    renderWithRouter(<View refreshToken={null} setRefreshToken={() => {}} tokenExchanged={false} setTokenExchanged={() => {}} />);
    expect(screen.getByText(/go to strava/i)).toBeInTheDocument();
  });

  it('renders Logout button', () => {
    renderWithRouter(<View refreshToken={null} setRefreshToken={() => {}} tokenExchanged={false} setTokenExchanged={() => {}} />);
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });
});
