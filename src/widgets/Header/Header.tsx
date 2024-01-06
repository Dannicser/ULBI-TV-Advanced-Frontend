import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link to={"/"}>
        <span className={""}>Main</span>
      </Link>
      <Link to={"/about"}>
        <span className={""}>About</span>
      </Link>
    </>
  );
};
