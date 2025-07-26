function FormInput({ name, label, type, value, onChange }) {
  return (
    <div className="flex flex-col mb-[30px] text-bluee">
      <label className="mb-[10px]" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-blackk border-none rounded-[5px] p-5 text-white outline-none"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
