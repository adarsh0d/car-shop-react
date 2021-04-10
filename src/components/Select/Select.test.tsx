import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';
const mockedFun = jest.fn();
        
describe("select box", () => {
    beforeEach(() => {
        render(<Select labelText="Manufacturer" default={{ value: '', text: 'All Manufacturers' }} ariaLabel="Select Car Manufacturer" options={[{ value: 'suzuki', text: 'Suzuki' }]} handleChange={mockedFun} />);
    })
    afterAll(() => {
        jest.clearAllMocks()
    });
    test('should have a Select', () => {
        const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();
    });
    test('should show Select text', () => {
        const selectElement: HTMLElement = screen.getByText('All Manufacturers');
        expect(selectElement).toBeInTheDocument();
    });
    
    test('should call onChange function', async () => {
        screen.getByRole('combobox').click()
        const selectElement: HTMLElement = await screen.findByText('Suzuki');
        fireEvent(selectElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
        expect(mockedFun).toHaveBeenCalled();
    });
    test('should show a label', () => {
        const labelElement: HTMLElement = screen.getByText('Manufacturer');
        expect(labelElement).toBeInTheDocument();
    });
})