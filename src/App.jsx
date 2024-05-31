/* eslint-disable no-undef */
import { useEffect, useState ,useRef } from "react";
import { useCallback } from "react";

useState;
function App() {
  // eslint-disable-next-line no-unused-vars
  const [length, setLenght] = useState(8);

  // eslint-disable-next-line no-unused-vars
  const [numberallowed, setNumberAllowed] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [charAllowed, setCharactersAllowed] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [ Password , setPassword] = useState("");

  const passwordRef =  useRef(null)

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0 , 3)

    window.navigator.clipboard.writeText(Password)
   } , [Password] )



  // eslint-disable-next-line no-unused-vars
  const passwordGenerator = useCallback(() => { 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallowed) str += "0123456789";
    if (charAllowed) str += '!@#$%^&*()_+{}|":><.,/?`~'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numberallowed, charAllowed, setPassword]);
useEffect( () => { passwordGenerator() } , [ length , numberallowed , charAllowed , passwordGenerator ])

  return (
    <div style={{textAlign:"center" } } >
      <h2 style={{ color: "#ffff", textAlign: "center", padding: "40px" }}>
        Password Generator
      </h2>
      <input type="text" value={Password} readOnly ref={passwordRef}  />
      <button onClick={copyPasswordToClipboard}>click Here</button>
      <input type="range" min={6} max={100} onChange={ (e) => {setLenght(e.target.value)} }    value={length} />
      <input type="checkbox" defaultChecked={charAllowed} onChange={ () => { setCharactersAllowed((prev) => !prev) } } />
      <input type="checkbox" defaultChecked={numberallowed} onChange={ () => { setNumberAllowed((prev) => !prev) } } />
      <input type="checkbox" defaultChecked={charAllowed} onChange={ () => { setCharactersAllowed((prev) => !prev) } }/>

    </div>
  );
}

export default App;
