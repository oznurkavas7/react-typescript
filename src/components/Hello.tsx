import React, { useRef, useState } from 'react'

interface IProps {
    name: string;
    desc: string;
    label: string;
    onSmtHappen: (name: string) => void;
}

interface CountNode {
    age: number | string
}

export const Hello: React.FC<IProps> = ({ name, desc }) => {
    const [count, setCount] = useState<CountNode>({ age: 1453 });

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <h1>{name}</h1>
            <input type="text" ref={inputRef} />
        </div>
    )
}
