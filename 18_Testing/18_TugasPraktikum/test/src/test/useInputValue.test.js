import { renderHook, act } from "@testing-library/react-hooks"
import { useInputValue } from "../components/InputValue/useInputValue";

describe("when rendered", () => {
    it("merender komponen", () => {
        const { result } = renderHook(
            () => useInputValue());
        expect(result.current.onChange).toBeInstanceOf(Function)
    })
})

describe("when update method", () => {
    it("change current initial value", () => {
        const { result } = renderHook(
            () => useInputValue())

        act(() => {
            result.current.onChange({
                target: { value: "Aku Anak Sehat" }
            })
        })

        expect(result.current.value).toHaveValue("Aku Anak Sehat")
    })
})

describe("re-render", () => {
    it("update", () => {
        const { result, rerender } = renderHook(
            ({ text }) => useInputValue(text), { initialProps: { text: "Aku Anak Sehat" } }
        )
        act(() => {
            result.current.onChange({
                target: { value: "Aku Anak Sehat" }
            }
            )
        })

        rerender("Updated")
        expect(result.current.value).toHaveValue("Aku Anak Sehat");
    })
})