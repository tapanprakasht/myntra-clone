import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components";
import Header from "./Header"
import { theme } from '../App';

const HeaderComponent = ( <ThemeProvider theme={theme}>
                            <Header/>
                          </ThemeProvider>)

describe('Header component test', () => {
    test('navigation menu present', () => {
        render(HeaderComponent);
        expect(screen.getByText("MEN")).toBeInTheDocument();
        expect(screen.getByText(/women/i)).toBeInTheDocument();
        expect(screen.getByText(/home & living/i)).toBeInTheDocument();
        expect(screen.getByText(/beauty/i)).toBeInTheDocument();
    });

    test('Search box present', () => {
        render(HeaderComponent);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
})
