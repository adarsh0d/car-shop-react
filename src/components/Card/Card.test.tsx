import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('should print the Card', () => {
    render(<Card>Hello</Card>);
    const cardElement: HTMLElement = screen.getByText('Hello');
    expect(cardElement).toBeInTheDocument();
});