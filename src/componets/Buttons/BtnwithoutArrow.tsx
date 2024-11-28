interface BtnDataType {
  label: string;
}

// Dynamic SimpleBtn component
function BtnwithoutArrow({ label }: BtnDataType) {
  return (
    <div>
      <button
        type="button"
        className={`px-10 py-[10px] text-white transition-colors duration-300 bg-[#B5843F] rounded-lg fontpoppins font-[500] cursor-pointer `} // Dynamic styles
      >
        {label}
      </button>
    </div>
  );
}

export default BtnwithoutArrow;
