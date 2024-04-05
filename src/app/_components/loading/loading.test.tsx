import { render, screen } from "@testing-library/react"
import { Loading } from "."

describe('test loading component',()=>{
test('test loading class',()=>{
    render(<Loading />)
    expect(screen.getByRole('')).toHaveClass('loading-primary')
})
})