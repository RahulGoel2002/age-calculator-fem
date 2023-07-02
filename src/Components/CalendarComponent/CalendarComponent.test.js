import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import CalendarComponent from "./CalendarComponent";

describe("Calendar Component", () => {
    test("Calendar component is rendered", () => {
        render(<CalendarComponent />)
        const CalEl = screen.queryByTestId(/calendar component/i)
        expect(CalEl).toBeInTheDocument()
    })
})