import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import ManufacturerList from './ManufacturerList';
import CarListPageContext from '../../store/car-list/context';
import { CarState, initState } from '../../store/car-list/state';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');
const mockedAxiosw = axios as jest.Mocked<typeof axios>;
describe("LoadCars", () => {
   
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should change selected Manufacturer', async () => {
        mockedAxiosw.get.mockResolvedValue(
        {
            data: {
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
        const mockedDispatch = jest.fn();
        render(
            <BrowserRouter>
                <CarListPageContext.Provider value={{ state: { ...initState,  isLoading: false } as CarState, dispatch: mockedDispatch }}>
                    <ManufacturerList />
                </CarListPageContext.Provider>
            </BrowserRouter>
        );
        
        const element: HTMLElement = await screen.findByText('All Manufacturers');
        element.click()
        const btnElement: HTMLElement = await screen.findByText('Toyota');
        btnElement.click()
        expect(mockedDispatch).toHaveBeenCalled();
    });

});

