import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders Home link', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
