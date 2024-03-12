import { render } from "@testing-library/react"
import { Badge } from "."

describe("testing the component of badge",()=>{
    test('info variant',()=>{
        const {getByText}=render(<Badge variant="info">info</Badge>)
        expect(getByText('info')).toHaveClass('badge-info')
    })
})