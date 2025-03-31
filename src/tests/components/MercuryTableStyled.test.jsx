import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MercuryTableStyled from "../../components/MercuryTableStyled";

const mockData = [
  { date: new Date("2024-03-01"), description: "Amazon Purchase", amount: -50, category: "Shopping", details: "Credit Card" },
  { date: new Date("2024-03-01"), description: "Salary", amount: 3000, category: "Income", details: "Bank Transfer" },
  { date: new Date("2024-03-02"), description: "Netflix Subscription", amount: -15, category: "Entertainment", details: "Credit Card" },
];

describe("MercuryTableStyled Component", () => {

  it("renders without crashing", () => {
    render(<MercuryTableStyled data={mockData} />);
    expect(screen.getByText("Salary")).toBeInTheDocument();
  });

  it("renders table correctly", () => {
    render(<MercuryTableStyled data={mockData} />);

    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("To/From")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Payment Method")).toBeInTheDocument();
  });

  it("renders table rows with correct data", () => {
    render(<MercuryTableStyled data={mockData} />);
    expect(screen.getByText("Amazon Purchase")).toBeInTheDocument();
    expect(screen.getByText("Netflix Subscription")).toBeInTheDocument();
    expect(screen.getByText("+$3000")).toBeInTheDocument();
    expect(screen.getByText("−$50")).toBeInTheDocument();
  });


  it("hides duplicate date by default", async () => {
    render(<MercuryTableStyled data={mockData} />);
    const dateCells = screen.getAllByText("March 1");
    expect(dateCells.length).toBeGreaterThan(1);
    expect(dateCells[0].classList.length).toBe(0);
    expect(dateCells[1]).toHaveClass("date-cell-hidden");
  });
});
