function FormButton({ btnName, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-emerald-500 text-white rounded-full px-4 py-1 sm:py-2 my-3 w-40"
    >
      {btnName}
    </button>
  );
}

export default FormButton;
