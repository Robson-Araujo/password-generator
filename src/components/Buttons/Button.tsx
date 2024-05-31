interface ButtonProps {
    changePassword: (data: string, value?: number) => void;
    text: string;
    size?: number;
    showInput?: boolean;
}

export default function Button({ changePassword, text, size, showInput }: ButtonProps) {

    size = showInput ? size : 8;
    text = showInput ? (text === 'Gerar!' ? `Gerar senha de ${size} caracteres!` : text) : (text === 'Gerar!' ? `Gerar senha de ${size} caracteres!` : text);

    return (
        <button
            className={`bg-zinc-900 rounded-md p-2 w-auto border border-transparent hover:border-white`}
            onClick={() => changePassword(text, size)}
        >
            {text}
        </button>
    )
}