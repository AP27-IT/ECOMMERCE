import { render, screen } from "@testing-library/react";
import App from "./App";

const originalFetch = global.fetch;

jest.mock("react-router-dom", () => {
  const React = require("react");

  return {
    BrowserRouter: ({ children }) => <>{children}</>,
    Link: ({ children, ...props }) => <a {...props}>{children}</a>,
    NavLink: ({ children, ...props }) => <a {...props}>{children}</a>,
    Route: () => null,
    Routes: ({ children }) => {
      const homeRoute = React.Children.toArray(children).find(
        (child) => child.props.path === "/"
      );

      return <>{homeRoute?.props.element ?? null}</>;
    },
  };
}, { virtual: true });

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          success: true,
          products: [],
        }),
    })
  );
});

afterEach(() => {
  global.fetch = originalFetch;
  jest.clearAllMocks();
});

test("renders the featured products home route", async () => {
  render(<App />);

  expect(
    await screen.findByRole("heading", { name: /featured products/i })
  ).toBeInTheDocument();
});
