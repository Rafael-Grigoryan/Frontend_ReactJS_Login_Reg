export  function Button({title, onClickLogin}) {

  return (
    <button className="btn" onClick={onClickLogin}>{title}</button>
  )
}
