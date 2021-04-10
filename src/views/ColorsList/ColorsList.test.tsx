import React from 'react';
import axios from 'axios';
import { cleanup, render, screen } from '@testing-library/react';
import ColorsList from './ColorsList';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("Load Colors", () => {
   
    afterEach(() => {
        jest.clearAllMocks();        
    });
    test('should change selected color', async () => {
        mockedAxios.get.mockResolvedValue(
        {
            data: {
                colors: ['red', 'orange']
        }});
        const mockedDispatch = jest.fn();
        render(
            <BrowserRouter>
                <ColorsList selectColor={mockedDispatch}/>
            </BrowserRouter>
        );
        const element: HTMLElement = await screen.findByText('All Colors');
        element.click()
        const btnElement: HTMLElement = await screen.findByText('orange');
        btnElement.click()
        expect(mockedDispatch).toHaveBeenCalled();
        
    });

    test('unmount', () => {
        const mockedDispatch = jest.fn();
        const {unmount} = render(
            <BrowserRouter>
                <ColorsList selectColor={mockedDispatch}/>
            </BrowserRouter>
        );
        unmount();
    })

});

