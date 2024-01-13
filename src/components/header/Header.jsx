import React, { useEffect } from "react";
import { login, logout } from "../../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Logo, Container } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn.jsx";

function Header() {
  const authStatus = useSelector((state) => state.status);

  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },

    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },

    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <div className="py-3 shadow bg-gray-500 ">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/"></Link>
          </div>

          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
