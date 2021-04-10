import React from 'react';
import {  render, screen } from '@testing-library/react';
import CarListPage from './CarListPage';
import { BrowserRouter } from 'react-router-dom';


describe("LoadCars", () => {
    it("loads cars", async () => {        // mock axios promise
        render(<BrowserRouter><CarListPage/></BrowserRouter>);
        const filterBtn: HTMLElement = await screen.findByText("Filter");
        expect(filterBtn).toHaveTextContent("Filter");     
    });
    it("should call filter", async () => {        // mock axios promise
      render(<BrowserRouter><CarListPage/></BrowserRouter>);
        const filterBtn: HTMLElement = await screen.findByText("Filter");
        filterBtn.click();
        const listElement: HTMLElement = await screen.findByTestId('skeleton');
        expect(listElement).toBeInTheDocument();  
    });
});

