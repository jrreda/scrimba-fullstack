import { test, expect, describe } from "vitest";

import { render, screen } from "@testing-library/react";

import Header from "./components/Header";
import Main from "./components/Main";

describe("a11y", () => {
  test("ensures troll face image is accessible", () => {
    render(<Header />);

    expect(screen.getByAltText("Troll face")).toBeInTheDocument();
  });

  test("ensures meme image is accessible", () => {
    render(<Main />);

    expect(screen.getByAltText("One Does Not Simply")).toBeInTheDocument();
  });
});
