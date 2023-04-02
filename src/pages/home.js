import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <>
        <h1>HELLO WORLD!</h1>
      {window.alert("Debe completar el registro primero")}
      <Navigate to="/signup" />
    </>
  );
};
export default Home;
