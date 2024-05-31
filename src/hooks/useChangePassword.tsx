import { useState } from "react";

export default function useChangePassword() {

  const [copy, setCopy] = useState('Copiar');
  const [password, setPassword] = useState('');
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const changePassword = (data: string, size?: number) => {

    console.log('data: ', data);
    console.log('showInput: ', showInput);

    if (data.substring(0, 5) === `Gerar`) {

      const characters = "'abcdefg*()_+~`PQRSTUVWX|}{[]vwxyzAB:;?><,./-=hijklmnopqrstuvwxyzABCDEF]vwxyzAB:;?><,GHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='";
      let newPassword = ``;
      let length = 12;
      if (size) length = size;
      for (let i = 0; i < length; i++) {
        const position = Math.floor(Math.random() * characters.length);
        newPassword += characters[position];
      }
      setPassword(newPassword);
      return setCopy(`Copiar`);
    }

    if (data === `Copiar` || data === `Copiado`) {
      setCopy(`Copiado!`);
      return window.navigator.clipboard.writeText(password);
    }

    if (data === `input` && size) return setPasswordSize(size);

    if (data === `checkbox`) setShowInput((currentState) => !currentState);
  }

  return { password, setPassword, changePassword, copy, passwordSize, showInput }
}