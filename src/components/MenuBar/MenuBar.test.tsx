import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuBar from './MenuBar';

test('should have a nav section', () => {
  render(<MenuBar options={[{text: 'Purchase', url: '/purchase'}]}/>);
  const navElement: HTMLElement = screen.getByTestId('menu');
  expect(navElement).toBeInTheDocument();
});

test('should have a list section', () => {
    render(<MenuBar options={[{text: 'Purchase', url: '/purchase'}]}/>);
    const ulElement: HTMLElement = screen.getByRole('list');
    expect(ulElement).toBeInTheDocument();
});

test('should have a menu options', () => {
    render(<MenuBar options={[{text: 'Purchase', url: '/purchase'}]}/>);
    const listElement: Array<HTMLElement> = screen.getAllByRole('listitem');
    expect(listElement.length).toBe(1);
});