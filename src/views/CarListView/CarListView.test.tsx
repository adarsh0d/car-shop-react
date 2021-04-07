import React from 'react';
import { render, screen } from '@testing-library/react';
import CarListView from './CarListView';
import Car from '../../interfaces/Car';

test('should print the heading', () => {
    render(<CarListView/>);
    const h1Element: HTMLElement = screen.getByText('Available cars');
    expect(h1Element).toBeInTheDocument();
});


test('should print the cars', () => {
    render(<CarListView />);
    const carListElement: HTMLElement = screen.getByTestId('car-list');
    expect(carListElement).toBeInTheDocument();
});