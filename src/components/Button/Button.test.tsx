import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('should have a button', () => {
    render(<Button text="Save" handleClick={() => console.log('hi')}/>);
    const buttonElement: HTMLElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
});
test('should show button text', () => {
    render(<Button text="Save" handleClick={() => console.log('hi')}/>);
    const buttonElement: HTMLElement = screen.getByText('Save');
    expect(buttonElement).toBeInTheDocument();
});
test('should call a function', () => {
    let a = 5
    render(<Button text="Save" handleClick={() => {a=6}}/>);
    const buttonElement: HTMLElement = screen.getByRole('button');
    buttonElement.click();
    expect(a).toBe(6);
});