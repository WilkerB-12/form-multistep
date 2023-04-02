import Card from "./card";
const ProgressBar = ({ progress }) => {
  return (
    <div className="h-10 sm:h-10">
      <div className="relative z-0 top-1/2">
        <div className="w-full h-1 bg-gray-300">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="relative z-10 flex h-12 -top-1 sm:h-auto sm:w-full">
        <div className="flex justify-center w-full gap-6 sm:gap-9">
          <Card numberStep={1} description={"Perfil"} />
          <Card numberStep={2} description={"Información"} />
          <Card numberStep={3} description={"Carga de documentos"} />
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
