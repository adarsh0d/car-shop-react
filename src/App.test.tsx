import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react router', async () => {
  render(<App />);
  const routerElement = screen.getByTestId("router");
  expect(routerElement).toBeInTheDocument();
});
