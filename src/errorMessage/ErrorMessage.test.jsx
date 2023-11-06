import { describe, expect, it } from "vitest"
import ErrorMessage from "./ErrorMessage"
import { render, screen } from "@testing-library/react"

describe('ErrorMessage', () => {
  it('renders default error state', () => {
    render(<ErrorMessage />)
    screen.debug()
    expect(screen.getByTestId('message-container')).toHaveTextContent('Error message in function declaration')
  })

  it('renders custom error state', () => {
    render(<ErrorMessage message="Error custom message test" />)
    screen.debug()
    expect(screen.getByTestId('message-container')).toHaveTextContent('Error custom message test')
  })
})

//Teste de renderização de component e de rendereização de component customizado