import { render } from "@testing-library/react"
import { TextBox } from "."

describe('test textbox component',()=>{
    test('test the text of textbox',()=>{
        const {getByText}=render(<TextBox>how you doing</TextBox>)
        expect(getByText('how you doing'))


    })

    test('test the class of textbox',()=>{
        const {getByText}=render(<TextBox>primary</TextBox>)
        expect(getByText('primary'))
    })
})