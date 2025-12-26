import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

// Basic test to check if App renders

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // You can check for a specific element/text in your App
    // For example, if your App has a header with text 'Welcome'
    // expect(screen.getByText('Welcome')).toBeInTheDocument();
    // For now, just check that the container is rendered
    expect(screen.getByTestId('app-root')).toBeDefined();
  });
});
