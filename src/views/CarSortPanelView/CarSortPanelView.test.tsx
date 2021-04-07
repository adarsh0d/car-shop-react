import React from 'react';
import { render, screen } from '@testing-library/react';
import CarSortPanelView from './CarSortPanelView';

test('should have color combobox', () => {
    render(<CarSortPanelView></CarSortPanelView>);
    const colorComboElement: HTMLElement = screen.getByTestId('car-color');
    expect(colorComboElement).toBeInTheDocument();
});


test('should have manufacturer combobox', () => {
    render(<CarSortPanelView></CarSortPanelView>);
    const manufacturerComboElement: HTMLElement = screen.getByTestId('car-manufacturer');
    expect(manufacturerComboElement).toBeInTheDocument();
});