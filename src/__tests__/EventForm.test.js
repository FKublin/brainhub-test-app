import React from 'react'
import {render} from '@testing-library/react'
import EventForm from '../components/EventForm'
import "@testing-library/jest-dom/extend-expect"

test('Renders component', async () => {
    const { getByText } = render(<EventForm/>) 

    expect(getByText('First name')).toBeInTheDocument()

})