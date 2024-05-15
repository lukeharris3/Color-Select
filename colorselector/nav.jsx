import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div id="navbar">
        <Link to="/">Home/Gray</Link>
        <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link>
      </div>
    </>
  );
}
export default NavBar;