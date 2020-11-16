import React, { useRef } from 'react'

interface TodoFormProps {
    onAdd(title: string): void,
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [text, setText] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(e.target.value)
    // }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(inputRef.current!.value)
            inputRef.current!.value = ''

            // setText('')
        }
    }

    return (
        <div className="input-field mt-2">
            <input
                type="text"
                id="title"
                placeholder="Buy something..."
                // value={text}
                // onChange={changeHandler}
                onKeyPress={keyPressHandler}
                ref={inputRef}
            />
            <label htmlFor="title" className="active">
                Input name
            </label>
        </div>
    )
}
