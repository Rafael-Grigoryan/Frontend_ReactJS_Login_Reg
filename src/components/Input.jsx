export  function Input({title, value, onChange}) {
  return <input 
            type="text" 
            placeholder={title} 
            value={value} 
            onChange={onChange} 
            className="input"/>
}
