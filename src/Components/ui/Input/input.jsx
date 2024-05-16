function Input({lable, state, setState, type='text'}) {
  return (
    <div className="form-floating my-2">
        <input value={state} onChange={(e)=>setState(e.target.value)} type={type} className="form-control"  placeholder={lable} />
        <label htmlFor="floatingPassword">{lable}</label>
      </div>
  )
}

export default Input