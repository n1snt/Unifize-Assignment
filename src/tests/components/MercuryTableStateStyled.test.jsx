import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import MercuryTableStateStyled from "../../components/MercuryTableStateStyled";
import userEvent from "@testing-library/user-event";

const mockData = [
    { date: new Date("2024-03-01"), description: "Amazon Purchase", amount: -50, category: "Shopping", details: "Credit Card" },
    { date: new Date("2024-03-01"), description: "Salary", amount: 3000, category: "Income", details: "Bank Transfer" },
    { date: new Date("2024-03-02"), description: "Netflix Subscription", amount: -15, category: "Entertainment", details: "Credit Card" },
];

describe("MercuryTableStyled Component", () => {

    it("renders without crashing", () => {
        render(<MercuryTableStateStyled data={mockData} />);
        expect(screen.getByText("Salary")).toBeInTheDocument();
    });

    it("renders table correctly", () => {
        render(<MercuryTableStateStyled data={mockData} />);
        expect(screen.getByText("Date")).toBeInTheDocument();
        expect(screen.getByText("To/From")).toBeInTheDocument();
        expect(screen.getByText("Amount")).toBeInTheDocument();
        expect(screen.getByText("Account")).toBeInTheDocument();
        expect(screen.getByText("Payment Method")).toBeInTheDocument();
    });

    it("renders table rows with correct data", () => {
        render(<MercuryTableStateStyled data={mockData} />);
        expect(screen.getByText("Amazon Purchase")).toBeInTheDocument();
        expect(screen.getByText("Netflix Subscription")).toBeInTheDocument();
        expect(screen.getByText("+$3000")).toBeInTheDocument();
        expect(screen.getByText("−$50")).toBeInTheDocument();
    });

    it("shows duplicate date on hover & hides on unhover", async () => {
        render(<MercuryTableStateStyled data={mockData} />);
        const user = userEvent.setup();
        const targetRow = screen.getByTestId("row-1");
        expect(targetRow).not.toBeNull();
        expect(screen.queryByTestId("date-cell-1")).toBeNull();
        await user.hover(targetRow);
        await waitFor(() => {
            expect(screen.getByTestId("date-cell-1")).toBeInTheDocument();
        });
        await user.unhover(targetRow);
        expect(screen.getByTestId("date-cell-1")).toBeVisible();
    });
});
