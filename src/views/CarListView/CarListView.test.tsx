import React from 'react';
import axios from 'axios';

import { render, screen } from '@testing-library/react';
import CarListView from './CarListView';
import { BrowserRouter } from 'react-router-dom';
import CarFilterObj from '../../interfaces/CarFilterObj';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
// mock data

const car = {
    "stockNumber": 74309,
    "manufacturerName": "Fiat",
    "modelName": "Stilo",
    "color": "white",
    "mileage": {
        "number": 108322,
        "unit": "km"
    },
    "fuelType": "Petrol",
    "pictureUrl": "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"

};
describe('Car list skeleton', () => {
    
    test('should print the skeleton list', async () => {
        const { unmount } = render(
            <BrowserRouter>
                <CarListView filterObj={{} as CarFilterObj} />
            </BrowserRouter>
        );
        const listElement: HTMLElement[] = await screen.findAllByRole('listitem');
        expect(listElement.length).toBe(10);
    });

})
describe('Car list view', () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValue(
            { data: {
                cars: Array(10).fill(car),
                totalPageCount: 2,
                totalCarsCount: 15
            }});
    })
    // clear all mocks
    afterEach(() => {
        jest.clearAllMocks();
    });
    // clear all mocks
   
    test('should print the heading', async () => {
        const { unmount } = render(
            <BrowserRouter><CarListView filterObj={{} as CarFilterObj} /></BrowserRouter>
        );
        const h1Element: HTMLElement = await screen.findByText('Available cars');
        expect(h1Element).toBeInTheDocument();
    });

    test('should change page number', async () => {
        render(
            <BrowserRouter>
                <CarListView filterObj={{} as CarFilterObj} />
            </BrowserRouter>
        );
        const btnElement: HTMLElement = await screen.findByText('Next');
        btnElement.click()       
        expect((await screen.findAllByRole('listitem')).length).toBe(10);
    });

    test('should change filterObj', async () => {
        render(
            <BrowserRouter>
                <CarListView filterObj={{selectedColor: 'red', selectedManufacturer: 'tesla'}} />
            </BrowserRouter>
        );
        const btnElement: HTMLElement = await screen.findByText('First');
        expect(btnElement).toBeDisabled();
    });
    test('unmount', () => {
        const {unmount} = render(
            <BrowserRouter>
                <CarListView filterObj={{selectedColor: 'red', selectedManufacturer: 'tesla'}} />
            </BrowserRouter>
        );
        unmount();
    })
})