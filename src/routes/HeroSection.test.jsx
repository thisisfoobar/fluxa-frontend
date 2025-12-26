import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders welcome message', () => {
    render(<HeroSection />);
    expect(screen.getByText(/welcome to/i)).toBeInTheDocument();
  });

  it('renders Connect to Strava button', () => {
    render(<HeroSection />);
    expect(screen.getByText(/connect to strava/i)).toBeInTheDocument();
  });
});
