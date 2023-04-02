const InputImage = ({ dataPerson, setDataPerson }) => {
  return !dataPerson.imgDocument ? (
    <label
      name="dropzone-file"
      className="flex flex-col items-center justify-center w-48 h-40 mb-8 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer sm:mb-10"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          aria-hidden="true"
          className="w-10 h-10 mb-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click </span>para cargar su documento
          de identidad
        </p>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          PNG, o PDF
        </p>
      </div>
      <input
        name="imgDocument"
        id="dropzone-file"
        type="file"
        className="hidden"
        accept=".pdf,.png"
        onChange={(e) => {
          // console.log(e.target.files[0]);
          setDataPerson({ ...dataPerson, imgDocument: e.target.files[0] });
        }}
      />
    </label>
  ) : dataPerson.imgDocument.type === "image/png" ? (
    <label
      name="dropzone-file"
      className="flex flex-col items-center justify-center w-48 h-40 mb-8 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer sm:mb-10"
    >
      <img
        src={URL.createObjectURL(dataPerson.imgDocument)}
        alt="Documento cargado"
      />
      <input
        name="imgDocument"
        id="dropzone-file"
        type="file"
        className="hidden"
        accept=".pdf,.png"
        onChange={(e) => {
          // console.log(e.target.files[0]);
          setDataPerson({ ...dataPerson, imgDocument: e.target.files[0] });
        }}
      />
    </label>
  ) : (
    <label
      name="dropzone-file"
      className="flex flex-col items-center justify-center w-48 h-40 mb-8 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer sm:mb-10"
    >
      <p className="text-xs font-semibold text-center">
        {dataPerson.imgDocument.name}
      </p>
      <input
        name="imgDocument"
        id="dropzone-file"
        type="file"
        className="hidden"
        accept=".pdf,.png"
        onChange={(e) => {
          // console.log(e.target.files[0]);
          setDataPerson({ ...dataPerson, imgDocument: e.target.files[0] });
        }}
      />
    </label>
  );
};
export default InputImage;
