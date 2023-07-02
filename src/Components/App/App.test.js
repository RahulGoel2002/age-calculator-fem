import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import App from "./App";

describe("App Component", () => {
    test("App component is rendered", () => {
        render(<App />)
        const AppEl = screen.queryByTestId(/App id/i)
        expect(AppEl).toBeInTheDocument()
    })
    
})