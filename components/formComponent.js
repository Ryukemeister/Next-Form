function TestElement({
  labelName,
  handleChange,
  inputType,
  value,
  placeholderText,
  inputName,
  checkedValue,
  error,
}) {
  if (inputType === "radio") {
    return (
      <div>
        <input
          name={inputName}
          value={value}
          type={inputType}
          onChange={handleChange}
          className="mr-3"
          checked={checkedValue}
        />
        <label>{labelName}</label>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col my-2">
        <label className="w-[200px] font-bold">{labelName}</label>
        <input
          onChange={handleChange}
          name={inputName}
          value={value}
          placeholder={`${placeholderText ? `${placeholderText}` : ""}`}
          className="border-gray-300 border-[1.4px] mt-[2px] px-2 py-1 focus:border-teal-500 outline-0"
          type={inputType}
        />
        {error ? (
          <h1 className="text-red-500 mt-1 font-poppins font-bold">{error}</h1>
        ) : null}
      </div>
    );
  }
}

export default TestElement;
