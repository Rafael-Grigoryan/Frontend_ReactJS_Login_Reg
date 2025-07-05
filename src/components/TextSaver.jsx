import { useState } from "react";

function TextSaver() {
  const [inputValue, setInputValue] = useState(""); 
  const [savedText, setSavedText] = useState("");   

  const handleSave = () => {
    alert(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введите текст"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSave}>Сохранить</button>

      <p>Сохранённый текст: {savedText}</p>
    </div>
  );
}

export default TextSaver;
