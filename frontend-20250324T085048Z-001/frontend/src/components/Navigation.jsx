import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Task List</Link> | <Link to="/add">Add Task</Link>
    </nav>
  );
}

export default Navigation;
