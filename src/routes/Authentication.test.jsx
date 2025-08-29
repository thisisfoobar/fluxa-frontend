import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Authentication from './Authentication';

describe('Authentication', () => {
  it('renders welcome message', () => {
    render(<Authentication />);
    expect(screen.getByText(/welcome to silly emoji titles/i)).toBeInTheDocument();
  });

  it('renders Connect to Strava button', () => {
    render(<Authentication />);
    expect(screen.getByText(/connect to strava/i)).toBeInTheDocument();
  });
});
