import { Link } from "react-router-dom";

export const HomePage = () => {
    const userId = 10;
  return (
    <>
      <div>HomePage</div>
      <br />
      <Link to="/users">Usuarios</Link>
      <Link to={`/users/${userId}`}>Usuarios</Link>
    </>
  );
};
