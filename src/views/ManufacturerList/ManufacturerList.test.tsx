import React from 'react';
import axios from 'axios';
import { cleanup, render, screen } from '@testing-library/react';
import ManufacturerList from './ManufacturerList';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');
const mockedAxiosw = axios as jest.Mocked<typeof axios>;
describe("Load Manufacturers", () => {
   
    afterEach(async () => {
        jest.clearAllMocks();
        cleanup();
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
                  <ManufacturerList selectManufacturer={mockedDispatch}/>
            </BrowserRouter>
        );
        
        const element: HTMLElement = await screen.findByText('All Manufacturers');
        element.click()
        const btnElement: HTMLElement = await screen.findByText('Toyota');
        btnElement.click()
        expect(mockedDispatch).toHaveBeenCalled();
    });
    test('unmount', () => {
        const mockedDispatch = jest.fn();
        const {unmount} = render(
            <BrowserRouter>
                <ManufacturerList selectManufacturer={mockedDispatch}/>
            </BrowserRouter>
        );
        unmount();
    })

});

