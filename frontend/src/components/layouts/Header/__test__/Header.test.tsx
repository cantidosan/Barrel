import React, { ReactElement } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Header from '../Header'


describe('Header', () => {

    it('reveals dropdown options on click', async () => {
        // render the dropdown button then click on it
        // assess the state of the dropdown button
        render(<Header />)


        const user = userEvent.setup()


        const button = screen.getByRole('button', { name: /settings/i });


        user.click(button)
        const settingsButton = await screen.findByRole('button', { name: /settings/i });
        expect(settingsButton).toBeInTheDocument()

    });



})
