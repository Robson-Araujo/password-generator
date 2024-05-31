import { HiTrash } from "react-icons/hi";
import Button from "./components/Buttons/Button";
import Input from "./components/Inputs/Input";
import useChangePassword from "./hooks/useChangePassword";

function App() {
  const generatePassword = useChangePassword();

  return (
    <body className={`flex justify-center items-center h-screen w-screen bg-zinc-900`}>
      <div className={`gap-5 h-96 w-9/12 flex flex-col justify-center items-center bg-zinc-800`}>
        <h1 className={`font-bold text-4xl text-white`}>Gerador de Senhas</h1>
        {/* <p className={`text-xs text-zinc-800 border-b w-9/12 mb-3`}>a</p> */}
        <Input changePassword={generatePassword.changePassword} size={generatePassword.passwordSize} showInput={generatePassword.showInput} />
        <div className={`flex flex-row gap-5 text-white`}>
          <Button changePassword={generatePassword.changePassword} text={`Gerar!`} size={generatePassword.passwordSize} showInput={generatePassword.showInput} />
          <Button changePassword={generatePassword.changePassword} text={generatePassword.copy} showInput={generatePassword.showInput} />
        </div>
        <p className={`flex justify-center items-center h-6 text-white`}>{generatePassword.password}</p>
        <button
          onClick={() => generatePassword.setPassword(``)}
        >
          <HiTrash className={`text-red-700 h-6 w-6`} />
        </button>
      </div>
    </body >
  );
}

export default App;