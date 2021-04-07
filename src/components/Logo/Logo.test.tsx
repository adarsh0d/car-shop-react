import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('should have a banner', () => {
    render(<Logo/>);
    const logoElement: HTMLElement = screen.getByRole('banner');
    expect(logoElement).toBeInTheDocument();
  });