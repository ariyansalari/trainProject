import { render } from "@testing-library/react"
import { Alert } from "."
describe('alert component',()=>{
    test('treats of alert component ',()=>{
        const {getByText}=render(<Alert>alert test</Alert>)
        expect(getByText('alert test'))
    })
})