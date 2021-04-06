import React from 'react';
import { render, screen } from '@testing-library/react';
import AppFrame from './AppFrame';

test('should have a header section', () => {
  render(<AppFrame />);
  const headerElement = screen.getByRole('header');
  expect(headerElement).toBeInTheDocument();
});

test('should have a container section', () => {
    render(<AppFrame />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
});

test('should have a footer section', () => {
    render(<AppFrame />);
    const footerElement = screen.getByRole('footer');
    expect(footerElement).toBeInTheDocument();
});