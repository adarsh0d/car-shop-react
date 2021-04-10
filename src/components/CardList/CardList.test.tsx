import React, { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import Car from '../../interfaces/Car';

type CardListProps = {
    pageNumber?: number
}
const mockedFun = jest.fn();
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
            currentPageNumber={props.pageNumber}

            updateCurrentPage={mockedFun}
            renderList={(list: Array<Car>) => (
                <>
                    {list.map((el: Car, i: number) => <li key={i}>{el?.stockNumber}</li>)}
                </>
            )}
        ></CardList>
    )
}
describe("Card List", () => {
    afterEach(()=>{
        jest.resetAllMocks();
    })
    test('should show the list count', () => {
        render(<CardListElement pageNumber={1} />);
        const cardListElement: HTMLElement = screen.getByText('Showing 1 of 45 results');
        const paginationTitle: HTMLElement = screen.getByText('Page 1 of 5');
        expect(paginationTitle).toBeInTheDocument();
        expect(cardListElement).toBeInTheDocument();
    });
    test('should show card', () => {
        render(<CardListElement pageNumber={1} />);
        const cardElement: HTMLElement = screen.getByText('95550');
        expect(cardElement).toBeInTheDocument();
    });
    test('prev should be disabled', () => {
        render(<CardListElement pageNumber={1} />);
        const prevButtonElement: HTMLButtonElement = screen.getByText('Previous') as HTMLButtonElement;
        expect(prevButtonElement).toBeDisabled();
    });
    test('first should be disabled', () => {
        render(<CardListElement pageNumber={1} />);
        const firstButtonElement: HTMLButtonElement = screen.getByText('First') as HTMLButtonElement;
        expect(firstButtonElement).toBeDisabled();
    });
    test('next should be enabled', () => {
        render(<CardListElement pageNumber={1} />);
        const nextButtonElement: HTMLButtonElement = screen.getByText('Next') as HTMLButtonElement;
        expect(nextButtonElement).not.toBeDisabled();
    });
    test('last should be enabled', () => {
        render(<CardListElement pageNumber={1} />);
        const lastButtonElement: HTMLButtonElement = screen.getByText('Last') as HTMLButtonElement;
        expect(lastButtonElement).not.toBeDisabled();
    });
    test('first and prev should be enabled', () => {
        render(<CardListElement pageNumber={2} />);
        const firstButtonElement: HTMLButtonElement = screen.getByText('First') as HTMLButtonElement;
        const prevButtonElement: HTMLButtonElement = screen.getByText('Previous') as HTMLButtonElement;
        const paginationTitle: HTMLElement = screen.getByText('Page 2 of 5');
        expect(firstButtonElement).not.toBeDisabled();
        expect(prevButtonElement).not.toBeDisabled();
        expect(paginationTitle).toBeInTheDocument();
    });

    test('handleFirst should be called', () => {
        render(<CardListElement pageNumber={2} />);
        const firstButtonElement: HTMLButtonElement = screen.getByText('First') as HTMLButtonElement;
        firstButtonElement.click();
        expect(mockedFun).toBeCalled();
    })
    test('handlePrev should be called', () => {
        render(<CardListElement pageNumber={2} />);
        const prevButtonElement: HTMLButtonElement = screen.getByText('Previous') as HTMLButtonElement;
        prevButtonElement.click();
        expect(mockedFun).toBeCalled();
    })

    test('handleNext should be called', () => {
        render(<CardListElement pageNumber={1} />);
        const nextButtonElement: HTMLButtonElement = screen.getByText('Next') as HTMLButtonElement;
        nextButtonElement.click();
        expect(mockedFun).toBeCalled();
    })

    test('handleLast should be called', () => {
        render(<CardListElement pageNumber={1} />);
        const lastButtonElement: HTMLButtonElement = screen.getByText('Last') as HTMLButtonElement;
        lastButtonElement.click();
        expect(screen.getByText('Page 5 of 5')).toBeInTheDocument()
        expect(mockedFun).toBeCalled();
    })
    test('last button should be disable', () => {
        render(<CardListElement pageNumber={5} />);
        const lastButtonElement: HTMLButtonElement = screen.getByText('Last') as HTMLButtonElement;
        expect(lastButtonElement).toBeDisabled();
    })
    test('next button should be disabled', () => {
        render(<CardListElement pageNumber={5} />);
        const nextButtonElement: HTMLButtonElement = screen.getByText('Next') as HTMLButtonElement;
        expect(nextButtonElement).toBeDisabled();
    })
    test('force reset', () => {
        const { rerender } = render(<CardListElement pageNumber={1} />);
        const nextButtonElement: HTMLButtonElement = screen.getByText('Next') as HTMLButtonElement;
        nextButtonElement.click()
        rerender(<CardListElement pageNumber={1}></CardListElement>)
        expect(screen.getByText('Page 2 of 5')).toBeInTheDocument()
    })
})