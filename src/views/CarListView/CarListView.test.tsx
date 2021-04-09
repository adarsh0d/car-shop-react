import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CarListView from './CarListView';
import CarListPageContext from '../../store/car-list/context';
import { CarState, initState } from '../../store/car-list/state';
import { BrowserRouter } from 'react-router-dom';
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
const initialState = {...initState, isLoading: true}
test('should print the heading', () => {
    render(
        <CarListPageContext.Provider value={{state: initialState as CarState, dispatch: () => {} }}>
           <CarListView />
        </CarListPageContext.Provider>
    );
    const h1Element: HTMLElement = screen.getByText('Available cars');
    expect(h1Element).toBeInTheDocument();
});


test('should print the skeleton', async () => {
    render(
      <CarListPageContext.Provider value={{state: initialState as CarState, dispatch: () => {} }}>
         <CarListView />
      </CarListPageContext.Provider>);
    const skeletonListElement: HTMLElement = await screen.findByTestId('skeleton');
    expect(skeletonListElement).toBeInTheDocument();
});

test('should print the car list', async () => {
    render(
        <BrowserRouter>
            <CarListPageContext.Provider value={{state: {...initState, cars: [car], isLoading: false} as CarState, dispatch: () => {} }}>
                <CarListView />
            </CarListPageContext.Provider>
      </BrowserRouter>
    );
    const listElement: HTMLElement[] = await screen.findAllByRole('listitem');
    expect(listElement.length).toBe(1);
});

test('should change page number', async () => {
    
    const mockedDispatch = jest.fn();
    render(
        <BrowserRouter>
            <CarListPageContext.Provider value={{state: {...initState, cars: Array(20).fill(car), isLoading: false} as CarState, dispatch: mockedDispatch }}>
                <CarListView />
            </CarListPageContext.Provider>
      </BrowserRouter>
    );
    const btnElement: HTMLElement = screen.getByText('Next');
    btnElement.click()
    expect(mockedDispatch).toHaveBeenCalled();
});