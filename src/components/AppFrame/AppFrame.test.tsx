import React from 'react';
import { render, screen } from '@testing-library/react';
import AppFrame from './AppFrame';

test('should have a header section', () => {
  render(<AppFrame headerLeft={<div>Header</div>} headerRight={<div></div>} footer={<div></div>}/>);
  const headerElement: HTMLElement = screen.getByText('Header');
  expect(headerElement).toBeInTheDocument();
});

test('should have a container section', () => {
    render(<AppFrame headerLeft={<div></div>} headerRight={<div></div>} footer={<div></div>}/>);
    const mainElement: HTMLElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
});

test('should have a footer section', () => {
    render(<AppFrame headerLeft={<div></div>} headerRight={<div></div>} footer={<div>Footer</div>}/>);
    const footerElement: HTMLElement = screen.getByText('Footer');
    expect(footerElement).toBeInTheDocument();
});