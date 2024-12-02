import PropTypes from "prop-types";
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";

export default function Navbar({ toggleTheme }) {
  return (
    <>
      <header>
        <nav className="flex text-white bg-gradient-to-r to-[#FFC719] from-[#BF033B] shadow-md p-[10px] pl-5 pr-10">
          <div className="text-[30px] font-bold">Note App</div>
        </nav>
      </header>
    </>
  );
}

Navbar.propTypes = {
  toggleTheme: PropTypes.func,
};
