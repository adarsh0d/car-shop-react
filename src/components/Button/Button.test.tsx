import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
const mockedFn = jest.fn()
describe('Button', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    test('should have a button', () => {
        render(<Button text="Save" handleClick={mockedFn} />);
        const buttonElement: HTMLElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
    test('should show button text', () => {
        render(<Button text="Save" handleClick={mockedFn} />);
        const buttonElement: HTMLElement = screen.getByText('Save');
        expect(buttonElement).toBeInTheDocument();
    });
    test('should call a function', () => {
        render(<Button text="Save" handleClick={mockedFn} />);
        const buttonElement: HTMLElement = screen.getByRole('button');
        buttonElement.click();
        expect(mockedFn).toHaveBeenCalled();
    });
})