import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe('Header', () => {
  test('display the app name', () => {
    render(<Header />);
    expect(screen.getByText('Meme Generator')).toBeInTheDocument();
  })

  test('display the troll face', () => {
    render(<Header />);
    expect(screen.getByRole('img').src).toContain('/troll-face.png');
  })
})
