const Information = ({
  handleClickNext,
  handleClickPrev,
  dataPerson,
  setDataPerson,
  errors,
  setErrors,
}) => {
  const inputClass =
    "p-2 sm:p-1 border-b-2 border-blue-500/50 bg-gray-50 focus:outline-0 focus:border-b-2 focus:border-blue-500";

  const regexCurp =
  /^([A-Z&Ñ]|[a-z&ñ]{1})([AEIOU]|[aeiou]{1})([A-Z&]|[a-z&]{1})([A-Z&]|[a-z&]{1})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([HM]|[hm]{1})([AS|as|BC|bc|BS|bs|CC|cc|CS|cs|CH|ch|CL|cl|CM|cm|DF|df|DG|dg|GT|gt|GR|gr|HG|hg|JC|jc|MC|mc|MN|mn|MS|ms|NT|nt|NL|nl|OC|oc|PL|pl|QT|qt|QR|qr|SP|sp|SL|sl|SR|sr|TC|tc|TS|ts|TL|tl|VZ|vz|YN|yn|ZS|zs|NE|ne]{2})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([0-9]{2})$/g
  
  const regexRfc =
    /[A-ZÑ&]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])(?:[A-Z\d]{3})$/;

  const handlerOnBlurCurp = (e) => {
    if (!regexCurp.test(dataPerson.curp)) {
      setErrors({ ...errors, curp: true });
    } else {
      setErrors({ ...errors, curp: false });
    }
  };

  const handlerOnBlurRfc = (e) => {
    if (!regexRfc.test(dataPerson.rfc)) {
      setErrors({ ...errors, rfc: true });
    } else {
      setErrors({ ...errors, rfc: false });
    }
  };

  return (
    <div className="flex flex-col px-4 py-4 justify-start sm:justify-center h-[75%] sm:m-6 sm:shadow sm:shadow-gray-500 sm:py-2 sm:rounded-md">
      <section className="flex flex-col justify-between">
        <div className="flex flex-col p-4 sm:px-4 sm:pt-4 sm:pb-2">
          <label className="font-semibold">CURP</label>
          <input
            name="curp"
            type="text"
            className={inputClass}
            value={dataPerson.curp}
            onChange={(e) => {
              setDataPerson({ ...dataPerson, curp: e.target.value.trim() });
            }}
            onBlur={handlerOnBlurCurp}
          ></input>

          {errors.curp ? (
            <label className="text-sm text-red-700">
              Formato de CURP inválido
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col p-4 sm:px-4 sm:pt-4 sm:pb-2">
          <label className="font-semibold">RFC</label>
          <input
            name="rfc"
            type="text"
            className={inputClass}
            value={dataPerson.rfc}
            onChange={(e) => {
              setDataPerson({ ...dataPerson, rfc: e.target.value.trim() });
            }}
            onBlur={handlerOnBlurRfc}
          ></input>
          {errors.rfc ? (
            <label className="text-sm text-red-700">
              Formato de RFC inválido
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col p-4 sm:px-4 sm:pt-2 sm:pb-4">
          <label className="font-semibold">Fecha de Nacimiento</label>
          <input
            name="birth"
            type="date"
            className={inputClass}
            value={dataPerson.birth}
            onChange={(e) => {
              setDataPerson({ ...dataPerson, birth: e.target.value });
            }}
          ></input>
        </div>
      </section>
      <div className="flex flex-row justify-around mt-2 mb-4">
        <button
          onClick={handleClickPrev}
          className="px-2 py-1 font-semibold text-white rounded shadow-md bg-blue-500/70 hover:bg-blue-700 shadow-blue-500/40"
        >
          Anterior
        </button>

        {errors.curp === true ||
        errors.rfc === true ||
        dataPerson.curp === "" ||
        dataPerson.rfc === "" ||
        dataPerson.birth === "" ? (
          <button className="px-2 py-1 font-semibold text-white bg-gray-500 rounded shadow-md shadow-gray-500/40">
            Siguiente
          </button>
        ) : (
          <button
            onClick={handleClickNext}
            className="px-2 py-1 font-semibold text-white bg-blue-500 rounded shadow-md hover:bg-blue-700 shadow-blue-500/40"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Information;
