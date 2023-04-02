const Profile = ({
  handleClickNext,
  dataPerson,
  setDataPerson,
  errors,
  setErrors,
}) => {
  const inputClass =
    " p-2 sm:p-1 border-b-2 border-blue-500/50 bg-gray-50 focus:outline-0 focus:border-b-2 focus:border-blue-500";

  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;

  const regexPhone = /^([0-9]{2,3})([\s.-]?)([0-9]{3,4})([\s.-]?)([0-9]{4})$/gm;

  const handlerOnBlurEmail = (e) => {
    if (!regexEmail.test(dataPerson.email)) {
      setErrors({ ...errors, email: true });
    } else {
      setErrors({ ...errors, email: false });
    }
  };

  const handlerOnBlurPhone = (e) => {
    if (!regexPhone.test(dataPerson.phone)) {
      setErrors({ ...errors, phone: true });
    } else {
      setErrors({ ...errors, phone: false });
    }
  };

  return (
    <div className="flex flex-col px-4 py-4 justify-start sm:justify-center h-[75%] sm:m-6 sm:shadow sm:shadow-gray-500 sm:py-2 sm:rounded-md">
      <section className="flex flex-col justify-between sm:flex-row">
        <div className="flex flex-col p-4 sm:px-4 sm:pt-4 sm:pb-2">
          <label className="font-semibold">Nombre</label>
          <input
            name="name"
            type="text"
            className={inputClass}
            value={dataPerson.name}
            onChange={(e) => {
              setDataPerson({ ...dataPerson, name: e.target.value.trim() });
            }}
          ></input>
        </div>
        <div className="flex flex-col p-4 sm:px-4 sm:pt-4 sm:pb-2">
          <label className="font-semibold">Apellidos</label>
          <input
            name="lastname"
            type="text"
            className={inputClass}
            value={dataPerson.lastname}
            onChange={(e) => {
              setDataPerson({ ...dataPerson, lastname: e.target.value.trim() });
            }}
          ></input>
        </div>
      </section>
      <section className="flex flex-col justify-between">
        <div className="flex flex-col p-4 sm:px-4 sm:pt-2 sm:pb-4">
          <label className="font-semibold">Correo electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="bruno@example.com"
            className={inputClass}
            value={dataPerson.email}
            onChange={(e) => {
              setDataPerson({ ...dataPerson, email: e.target.value.trim() });
            }}
            onBlur={handlerOnBlurEmail}
          ></input>

          {errors.email ? (
            <label className="text-sm text-red-700">
              Formato de correo inválido
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col p-4 sm:px-4 sm:pt-2 sm:pb-4">
          <label className="font-semibold">Celular</label>
          <div className="flex flex-col">
            <input
              name="phone"
              type="tel"
              className={inputClass}
              value={dataPerson.phone}
              onChange={(e) => {
                setDataPerson({ ...dataPerson, phone: e.target.value.trim() });
              }}
              onBlur={handlerOnBlurPhone}
            ></input>
            {errors.phone ? (
              <label className="text-sm text-red-700">
                Formato de celular inválido
              </label>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-center mt-2 mb-4">
        {errors.email === true ||
        errors.phone === true ||
        dataPerson.email === "" ||
        dataPerson.name === "" ||
        dataPerson.lastname === "" ||
        dataPerson.phone === "" ? (
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

export default Profile;
