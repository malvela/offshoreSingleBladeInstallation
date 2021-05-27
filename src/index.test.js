import { render, screen } from "@testing-library/react";
import Home from "./views/Home";
import React, { Component } from "react";

test("Load FAQ", () => {
    render(<Home />);
    const headlineElement = screen.getByText("FAQ", {exact: false})
    expect(headlineElement).toBeInTheDocument()
});
