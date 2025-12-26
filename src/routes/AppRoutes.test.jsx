import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

describe('AppRoutes', () => {
  it('renders Authentication on root route', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes refreshToken={null} setRefreshToken={() => {}} tokenExchanged={false} setTokenExchanged={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText(/welcome to silly emoji titles/i)).toBeInTheDocument();
  });

  it('renders View on /view route', () => {
    render(
      <MemoryRouter initialEntries={["/view"]}>
        <AppRoutes refreshToken={"token"} setRefreshToken={() => {}} tokenExchanged={true} setTokenExchanged={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText(/you're set up/i)).toBeInTheDocument();
  });
});
