import React, { useReducer } from 'react';
import axios from 'axios';
import { fireEvent, render, screen } from '@testing-library/react';
import CarListPage from './CarListPage';
import { BrowserRouter } from 'react-router-dom';

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

describe("LoadCars", () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValue(
            { data: {
                cars: [car, car], 
                colors: ['red', 'yellow'], 
                manufacturers: [ {
                    "name": "Fiat",
                    "models": [
                      {
                        "name": "Marea"
                      }
                    ]
                  },  {
                    "name": "Toyota",
                    "models": [
                      {
                        "name": "Verna"
                      }
                    ]
                  }] 
            }});
    })
    // clear all mocks
    afterEach(() => {
        jest.clearAllMocks();
    });


    it("loads cars", async () => {
        // mock axios promise

        render(<BrowserRouter><CarListPage/></BrowserRouter>);
        const filterBtn = await screen.findByText("Filter");
        expect(filterBtn).toHaveTextContent("Filter");
        fireEvent(
            filterBtn,
            new MouseEvent('click', {
                bubbles: false,
                cancelable: true,
            })
        )
    });

});

