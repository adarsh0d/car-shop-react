import React from 'react';
import { render, screen } from '@testing-library/react';
import CarSortPanelView from './CarSortPanelView';
const mockedFn = jest.fn()
describe('sort panel', () => {
    afterAll(()=>{
        jest.clearAllMocks();
    })
    test('should call fetch cars', () => {
        render(<CarSortPanelView handleSubmit={mockedFn}></CarSortPanelView>);
        const filterElement: HTMLElement = screen.getByText('Filter');
        filterElement.click();
        expect(mockedFn).toHaveBeenCalled();
    });
})