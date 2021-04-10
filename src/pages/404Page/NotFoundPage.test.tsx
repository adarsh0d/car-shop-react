import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
test('should print the heading', () => {
    render(<BrowserRouter><NotFoundPage/></BrowserRouter>);
    const headingElement: HTMLElement = screen.getByTestId('heading');
    expect(headingElement).toBeInTheDocument();
});

test('should print the message', () => {
    render(<BrowserRouter><NotFoundPage></NotFoundPage></BrowserRouter>);
    const messageElement: HTMLElement = screen.getByTestId('message');
    expect(messageElement).toBeInTheDocument();
});