import React, {FunctionComponent} from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import Car from '../../interfaces/Car';
let pageNumber = 1

type CardListProps = {
    pageNumber: number
}
const CardListElement: FunctionComponent<CardListProps> = (props) => {
    return (
        <CardList
            list={[{
                "stockNumber": 95550,
                "manufacturerName": "Fiat",
                "modelName": "Fullback",
                "color": "white",
                "mileage": {
                  "number": 152182,
                  "unit": "km"
                },
                "fuelType": "Diesel",
                "pictureUrl": "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"
            }]}
            totalCount={45}
            totalPageCount={5}
            pageNumber={props.pageNumber}
            updateCurrentPage={(page: number) => { pageNumber = page}}
            renderList={(list: Array<Car>) => (
                <>
                    {list.map((el: Car) => <li>{el?.stockNumber}</li>)}
                </>
            )}
        ></CardList>
    )
}
test('should show the list count', () => {
    render(<CardListElement pageNumber={1}/>);
    const cardListElement: HTMLElement = screen.getByText('Showing 1 of 45');
    const paginationTitle: HTMLElement = screen.getByText('Page 1 of 5');
    expect(paginationTitle).toBeInTheDocument();
    expect(cardListElement).toBeInTheDocument();
});
test('should show card', () => {
    render(<CardListElement pageNumber={1}/>);
    const cardElement: HTMLElement = screen.getByText('95550');
    expect(cardElement).toBeInTheDocument();
});
test('prev should be disabled', () => {
    render(<CardListElement pageNumber={1}/>);
    const prevButtonElement = screen.getByText('Previous') as  HTMLButtonElement;
    expect(prevButtonElement).toBeDisabled();
});
test('first should be disabled', () => {
    render(<CardListElement pageNumber={1}/>);
    const firstButtonElement = screen.getByText('First') as  HTMLButtonElement;
    expect(firstButtonElement).toBeDisabled();
});
test('next should be enabled', () => {
    render(<CardListElement pageNumber={1}/>);
    const nextButtonElement = screen.getByText('Next') as  HTMLButtonElement;
    expect(nextButtonElement).not.toBeDisabled();
});
test('last should be enabled', () => {
    render(<CardListElement pageNumber={1}/>);
    const lastButtonElement = screen.getByText('Last') as  HTMLButtonElement;
    expect(lastButtonElement).not.toBeDisabled();
});
test('first and prev should be enabled', () => {
    render(<CardListElement pageNumber={2}/>);
    const firstButtonElement = screen.getByText('First') as  HTMLButtonElement;
    const prevButtonElement = screen.getByText('Previous') as  HTMLButtonElement;
    const paginationTitle: HTMLElement = screen.getByText('Page 2 of 5');
    expect(firstButtonElement).not.toBeDisabled();
    expect(prevButtonElement).not.toBeDisabled();
    expect(paginationTitle).toBeInTheDocument();
});

test('handleFirst should be called', () => {
    render(<CardListElement pageNumber={2}/>);
    const firstButtonElement = screen.getByText('First') as  HTMLButtonElement;
    firstButtonElement.click();    
    expect(pageNumber).toBe(1);
})

test('handleLast should be called', () => {
    render(<CardListElement pageNumber={2}/>);
    const lastButtonElement = screen.getByText('Last') as  HTMLButtonElement;
    lastButtonElement.click();    
    expect(pageNumber).toBe(5);
})
test('last button should be disable', () => {
    render(<CardListElement pageNumber={5}/>);
    const lastButtonElement = screen.getByText('Last') as  HTMLButtonElement;
    expect(lastButtonElement).toBeDisabled();
})
test('next button should be disable', () => {
    render(<CardListElement pageNumber={5}/>);
    const nextButtonElement = screen.getByText('Next') as  HTMLButtonElement;
    expect(nextButtonElement).toBeDisabled();
})