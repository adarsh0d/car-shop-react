import React from 'react';
import axios from 'axios';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CarDetailsPage from './CarDetailsPage';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
// mock data
const data = {
    car: {
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

    },
};
const props: any = {
    match: {
        isExact: true,
        params: {
            stockNumber: "12"
        },
        path: "",
        url: ""
    },
    location: {} as any,
    history: {} as any,
    staticContext: {
    }
};
describe("LoadCar", () => {
    
    // clear all mocks
    afterEach(() => {
        jest.clearAllMocks();
    });


    it("loads car details", async () => {
        // mock axios promise
        mockedAxios.get.mockResolvedValue({ data: data });
        
        render(<BrowserRouter><CarDetailsPage match={props.match} location={props.location} history={props.history} /></BrowserRouter>);
        const resolvedSpan = await waitFor(() => screen.getByTestId("heading"));
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(resolvedSpan).toHaveTextContent("Stilo");
        expect(mockedAxios.get).toHaveBeenCalled();
    });

});
