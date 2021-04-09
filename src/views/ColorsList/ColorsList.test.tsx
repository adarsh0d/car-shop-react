import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import ColorsList from './ColorsList';
import CarListPageContext from '../../store/car-list/context';
import { CarState, initState } from '../../store/car-list/state';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');
const mockedAxios1 = axios as jest.Mocked<typeof axios>;
describe("LoadCars", () => {
   
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should change selected color', async () => {
        mockedAxios1.get.mockResolvedValue(
        {
            data: {
                colors: ['red', 'orange']
        }});
        const mockedDispatch = jest.fn();
        render(
            <BrowserRouter>
                <CarListPageContext.Provider value={{ state: { ...initState,  isLoading: false } as CarState, dispatch: mockedDispatch }}>
                    <ColorsList />
                </CarListPageContext.Provider>
            </BrowserRouter>
        );
        
        const element: HTMLElement = await screen.findByText('All Colors');
        element.click()
        const btnElement: HTMLElement = await screen.findByText('orange');
        btnElement.click()
        expect(mockedDispatch).toHaveBeenCalled();
    });

});

