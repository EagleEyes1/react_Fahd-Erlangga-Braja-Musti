import React from "react";
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"
import Search from "../components/Search/Search"

jest.mock('axios')

describe('Search', () => {
    test('fetches stories from an API and display', async () => {
        render(<Search />)
        const stories = [
            { objectsID: '1', title: 'Hello' },
            { objectsID: '2', title: 'React' }
        ]

        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { hits: stories } })
        )

        await act(async () => {
            await userEvent.click(screen.getByRole('button'))
        })

        const items = await screen.findAllByRole('listitem');

        expect(items).toHaveLength(2)
    })
    test('fetches stories from an API and fails', async () => {
        render(<Search />)
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error())
        )

        await act(async () => {
            await userEvent.click(screen.getByRole('button'))
        })

        const items = await screen.findByText('Ada yang error ...');

        expect(items).toBeInTheDocument()
    })
    test('blok try set stories', async () => {
        render(<Search />);

        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { value: '' } })
        );

        await act(async () => {
            await fireEvent.input(screen.getByRole('textbox'), {
                target: {
                    value: 'Aku Anak Sehat',
                }
            })

            const inputCerita = await screen.findByPlaceholderText(/Tulis Cerita/);

            expect(inputCerita).toHaveValue('Aku Anak Sehat');
        });
    });
});
