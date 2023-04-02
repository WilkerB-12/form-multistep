import InputImage from './image.js'

const Documents = ({handleClickPrev, handleClickSubmit, dataPerson, setDataPerson}) => {
  const inputClass =
    "p-2 sm:p-1 border-b-2 border-blue-500/50 bg-gray-50 focus:outline-0 focus:border-b-2 focus:border-blue-500";

  return (
    <div className="flex flex-col px-4 py-4 justify-start sm:justify-center h-[75%] sm:m-6 sm:shadow sm:shadow-gray-500 sm:py-2 sm:rounded-md">
      <section className="flex flex-col justify-between sm:flex-row">
        <div className="flex items-center justify-center w-full">
            <InputImage dataPerson={dataPerson} setDataPerson={setDataPerson}/>
        </div>
        <section>
        <div className="flex flex-col p-4 sm:px-4 sm:pt-4 sm:pb-2">
          <label className="font-semibold">Número de identificación</label>
          <input
            name="numberId"
            type="text"
            className={inputClass}
            value={dataPerson.numberId}
            onChange={(e) => {
              setDataPerson({ ...dataPerson, numberId: e.target.value.trim() });
            }}
          ></input>
        </div>
        <div className="flex flex-col p-4 sm:px-4 sm:pt-2 sm:pb-4">
          <label className="font-semibold">Fecha de vencimiento</label>
          <input name="date" type="date" className={inputClass}   value={dataPerson.expirationDate}
            onChange={(e) => {
              setDataPerson({ ...dataPerson, expirationDate: e.target.value });
            }}></input>
        </div>
        </section>
      </section>
      <div className="flex flex-row justify-around mt-2 mb-4">
        <button onClick={handleClickPrev} className="px-2 py-1 font-semibold text-white rounded shadow-md bg-blue-500/70 hover:bg-blue-700 shadow-blue-500/40">
          Anterior
        </button>
        {dataPerson.imgDocument === null ||
        dataPerson.numberId === "" ||
        dataPerson.expirationDate === "" ? (
          <button className="px-2 py-1 font-semibold text-white bg-gray-500 rounded shadow-md shadow-gray-500/40">
            Registrar
          </button>
        ) : (
          <button
            onClick={handleClickSubmit}
            className="px-2 py-1 font-semibold text-white bg-blue-500 rounded shadow-md hover:bg-blue-700 shadow-blue-500/40"
          >
            Registrar
          </button>
        )}
      </div>
    </div>
  );
};

export default Documents;
