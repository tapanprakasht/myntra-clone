import { ThemeProvider } from "styled-components"
import { theme } from "../App";
import Filter from "./Filter";
import { FilterType } from "./FilterSection";
import { colorList } from '../datasource/Filters';
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import userEvent from "@testing-library/user-event";

const PlaceholderText = 'Search for Color';

const FilterComponent = (<Provider store={store}>
                            <ThemeProvider theme={theme}>
                                <Filter title="COLOR" type={FilterType.COLOR} searchPlaceHolder={PlaceholderText} filterItems={colorList}/>
                            </ThemeProvider>
                        </Provider>);
describe('Filter component tests', () => {
    test('Filter items are present', () => {
        render(FilterComponent);
        expect(screen.getByText(/color/i)).toBeInTheDocument();
        expect(screen.getByText(colorList[0].name)).toBeInTheDocument();
    });
    test('Click on search icon and search', () => {
        render(FilterComponent);
        userEvent.click(screen.getByRole('img'));
        expect(screen.getByPlaceholderText(PlaceholderText)).toBeInTheDocument();
        userEvent.type(screen.getByPlaceholderText(PlaceholderText), 'blue');
        expect(screen.getByPlaceholderText(PlaceholderText)).toHaveValue('blue');
        expect(screen.getAllByText(/blue/i)).not.toBeNull();
        expect(screen.queryByText(/black/i)).not.toBeInTheDocument();

        userEvent.click(screen.getByTestId('exit'));
        expect(screen.queryByPlaceholderText(PlaceholderText)).not.toBeInTheDocument();
    });

    test('Check +more text present', () => {
        render(FilterComponent);
        const { textContent } = screen.getByText(/more/i);
        let moreValue = 0;
        if(textContent) {
            moreValue = Number(textContent.replace('+','').replace('more','').trim());
        }
        expect(moreValue).toEqual(colorList.length - 8);
    })

})