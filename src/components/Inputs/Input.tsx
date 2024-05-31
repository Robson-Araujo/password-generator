interface InputProps {
    changePassword: (data: string, value?: number, showInput?: boolean) => void;
    size: number;
    showInput: boolean;
}

export default function Input({ changePassword, size, showInput }: InputProps) {

    return (
        <div className="flex flex-col gap-5 items-center justify-center border-t w-10/12 pt-6">
            <div className="flex flex-row justify-center items-center ">
                <label
                    className={`text-xl text-white mr-3`}
                    htmlFor={`showInput`}
                >
                    Customizar Tamanho:
                </label>
                <input
                    className={`h-4 w-4 text-red-600`}
                    type={`checkbox`}
                    id={`showInput`}
                    value={`${showInput}`}
                    onChange={() => changePassword(`checkbox`, 0)}
                />
            </div>
            {showInput ? (
                <div className={`flex flex-row justify-center items-center pl-4`}>
                    <label
                        className={`text-xl text-white mr-3`}
                        htmlFor={`passwordSize`}
                    >
                        Tamanho:
                    </label>
                    <input
                        className={`bg-zinc-900 text-white rounded-md p-2 h-7 w-14 border border-transparent hover:border-white`}
                        type={`number`}
                        id={`passwordSize`}
                        min={1}
                        value={size}
                        onChange={(ev) => changePassword(`input`, Number(ev.target.value))}
                    />
                </div>
            ) : null
            }
        </div >
    )
}