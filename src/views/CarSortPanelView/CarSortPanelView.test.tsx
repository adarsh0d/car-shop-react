import React from 'react';
import { render, screen } from '@testing-library/react';
import CarSortPanelView from './CarSortPanelView';



test('should call fetch cars', () => {
    render(<CarSortPanelView></CarSortPanelView>);
    const filterElement: HTMLElement = screen.getByText('Filter');
    filterElement.click();
});