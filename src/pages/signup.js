import Profile from "../components/profile.js";
import Information from "../components/information.js";
import Documents from "../components/documents.js";
import { useEffect, useState } from "react";
import ProgressBar from "../components/bar.js";

function Signup() {
  const [page, setPage] = useState(0);

  const [dataPerson, setDataPerson] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    curp: "",
    rfc: "",
    birth: "",
    imgDocument: null,
    numberId: "",
    expirationDate: "",
  });

  const [progress, setProgress] = useState();

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
    curp: false,
    rfc: false,
  });

  useEffect(() => {
    setProgress(((1 + page) / 4) * 100);
  }, [page]);

  const handleClickNext = (e) => {
    setPage(page + 1);
  };

  const handleClickPrev = (e) => {
    setPage(page - 1);
  };

  const handleClickSubmit = (e) => {
    alert("Has sido registrado exitosamente");
    // En este punto se haría el fetch con la información almacenada
  };

  const pagesList = [
    <Profile
      handleClickNext={handleClickNext}
      dataPerson={dataPerson}
      setDataPerson={setDataPerson}
      errors={errors}
      setErrors={setErrors}
    />,
    <Information
      handleClickNext={handleClickNext}
      handleClickPrev={handleClickPrev}
      dataPerson={dataPerson}
      setDataPerson={setDataPerson}
      errors={errors}
      setErrors={setErrors}
    />,
    <Documents
      handleClickPrev={handleClickPrev}
      handleClickSubmit={handleClickSubmit}
      dataPerson={dataPerson}
      setDataPerson={setDataPerson}
    />,
  ];

  return (
    <>
        <div className="flex flex-col justify-evenly pb-1 sm:justify-center sm:content-center bg-gray-50 w-screen h-screen sm:h-[34rem]  sm:w-[35rem] sm:py-6 shadow-xl shadow-blue-800">
          <ProgressBar progress={progress} />
          {pagesList[page]}
        </div>
    </>
  );
}

export default Signup;
