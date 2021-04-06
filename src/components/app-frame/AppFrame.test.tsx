import React from 'react';
import { render, screen } from '@testing-library/react';
import AppFrame from './AppFrame';

test('should have a header section', () => {
  render(<AppFrame headerLeft={<div>Header</div>} headerRight={<div></div>} footer={<div></div>}/>);
  const headerElement = screen.getByText('Header');
  expect(headerElement).toBeInTheDocument();
});

test('should have a container section', () => {
    render(<AppFrame headerLeft={<div></div>} headerRight={<div></div>} footer={<div></div>}/>);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
});

test('should have a footer section', () => {
    render(<AppFrame headerLeft={<div></div>} headerRight={<div></div>} footer={<div>Footer</div>}/>);
    const footerElement = screen.getByText('Footer');
    expect(footerElement).toBeInTheDocument();
});