import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import NameForm from "../components/FormCoding/FormCoding"
import "@testing-library/jest-dom"

describe('NameForm', () => {
    test('renders NameForm component', () => {
        render(<NameForm />)
        // screen.debug()
        expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument()
        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument()
    })

    test('normal all input', () => {
        render(<NameForm />)
        // screen.debug()
        fireEvent.input(
            screen.getByRole('textbox', { name: /nama/i }),
            { target: { value: "Elang" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /email/i }),
            { target: { value: "halo@mail.com" } }
        )
        fireEvent.input(
            screen.getByRole('spinbutton', { name: /no Handphone/i }),
            { target: { value: "082315135317" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /harapan/i }),
            { target: { value: "Semangat Sampai Lulus" } }
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Elang");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("halo@mail.com");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("082315135317");
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Semangat Sampai Lulus");
    })

    test('error input', () => {
        render(<NameForm />)
        // screen.debug()
        fireEvent.input(
            screen.getByRole('textbox', { name: /nama/i }),
            { target: { value: "Elang7" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /email/i }),
            { target: { value: "hal" } }
        )
        fireEvent.input(
            screen.getByRole('spinbutton', { name: /no Handphone/i }),
            { target: { value: "08231" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /harapan/i }),
            { target: { value: "Semangat Sampai Lulus" } }
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Elang7");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("hal");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("08231");
        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument()
        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument()
        expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument()
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Semangat Sampai Lulus");
    })

    test('submit button', () => {
        render(<NameForm />)
        // screen.debug()
        fireEvent.input(
            screen.getByRole('textbox', { name: /nama/i }),
            { target: { value: "Elang" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /email/i }),
            { target: { value: "halo@mail.com" } }
        )
        fireEvent.input(
            screen.getByRole('spinbutton', { name: /no Handphone/i }),
            { target: { value: "082315135317" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /harapan/i }),
            { target: { value: "Semangat Sampai Lulus" } }
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Elang");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("halo@mail.com");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("082315135317");
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Semangat Sampai Lulus");

        const success = jest.spyOn(window, 'alert').mockImplementation();

        fireEvent.click(
            screen.getByRole('button', { name: /submit/i })
        );

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");

        expect(success).toHaveBeenCalledTimes(1);
    })

    test('reset button', () => {
        render(<NameForm />)
        // screen.debug()
        fireEvent.input(
            screen.getByRole('textbox', { name: /nama/i }),
            { target: { value: "Elang" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /email/i }),
            { target: { value: "halo@mail.com" } }
        )
        fireEvent.input(
            screen.getByRole('spinbutton', { name: /no Handphone/i }),
            { target: { value: "082315135317" } }
        )
        fireEvent.input(
            screen.getByRole('textbox', { name: /harapan/i }),
            { target: { value: "Semangat Sampai Lulus" } }
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Elang");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("halo@mail.com");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("082315135317");
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Semangat Sampai Lulus");

        const success = jest.spyOn(window, 'alert').mockImplementation();

        fireEvent.click(
            screen.getByText("Reset")
        );

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");

        expect(success).toHaveBeenCalledTimes(1);
    })
});
