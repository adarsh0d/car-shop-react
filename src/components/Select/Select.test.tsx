import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

test('should have a Select', () => {
    render(<Select default={{value: '', text: 'All Manufacturers'}} ariaLabel="Select Car Manufacturer" options={[{value: 'suzuki', text: 'Suzuki'}]} handleChange={() => console.log('hi')}/>);
    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
    expect(selectElement).toBeInTheDocument();
});
test('should show Select text', () => {
    render(<Select default={{value: '', text: 'All Manufacturers'}} ariaLabel="Select Car Manufacturer" options={[{value: 'suzuki', text: 'Suzuki'}]} handleChange={() => console.log('hi')}/>);
    const selectElement: HTMLElement = screen.getByText('All');
    expect(selectElement).toBeInTheDocument();
});
test('should select a value by default', () => {
    render(<Select default={{value: '', text: 'All Manufacturers'}} ariaLabel="Select Car Manufacturer" options={[{value: 'suzuki', text: 'Suzuki'}, {value: 'tesla', text: 'Tesla'}]} selectedValue="tesla" handleChange={() => {}}/>);
    const optionElement = screen.getAllByTestId('select-option') as Array<HTMLOptionElement>;
    expect(optionElement[1].selected).toBeTruthy();
});
test('should call onChange function', () => {
    let a = ''
    render(<Select default={{value: '', text: 'All Manufacturers'}} ariaLabel="Select Car Manufacturer" options={[{value: 'suzuki', text: 'Suzuki'}, {value: 'tesla', text: 'Tesla'}]} selectedValue="tesla" handleChange={(value) => { a = value }}/>);
    const selectElement: HTMLElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'tesla' } })
    expect(a).toBe('tesla');
});
test('should show a label', () => {
    render(<Select default={{value: '', text: 'All Manufacturers'}}  ariaLabel="Select Car Manufacturer" options={[{value: 'suzuki', text: 'Suzuki'}, {value: 'tesla', text: 'Tesla'}]} labelText="Manufacturer" selectedValue="tesla" handleChange={() => { }}/>);
    const labelElement: HTMLElement = screen.getByText('Manufacturer');
    expect(labelElement).toBeInTheDocument();
});