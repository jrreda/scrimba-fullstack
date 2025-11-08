import { test, expect, describe } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test("updates the top text", async () => {
    // Arrange
    const user = userEvent.setup()
    render(<App />)
    const topTextbox = screen.getAllByRole('textbox')[0]

    // Act
    await user.clear(topTextbox)
    await user.type(topTextbox,  "A coder does not simply")

    // Assert
    expect(screen.getByText("A coder does not simply")).toBeInTheDocument()
  })

  test("updates the bottom text", async () => {
    // Arrange
    const user = userEvent.setup()
    render(<App />)
    const bottomTextBox = screen.getAllByRole('textbox')[1]

    // Act
    await user.clear(bottomTextBox)
    await user.type(bottomTextBox, "Code without coffee")

    // Assert
    expect(screen.getByText("Code without coffee")).toBeInTheDocument()
  })
})
