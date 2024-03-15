import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode, MdSettings } from "react-icons/md";
import avatar from "../assets/avatar.png";
import useTheme from "../context/theme";
import useSidebar from "../context/sidebar";
const Topbar = () => {
  const { themeMode, toggleThemeMode } = useTheme();
  const { expand, toggleSidebar } = useSidebar();

  return (
    <div className={`flex z-50 sticky top-0 justify-between p-4 w-full bg-offWhite dark:bg-drkSec  ${expand?"rounded-br-xl":"rounded-b-xl"}`} >
      <GiHamburgerMenu size={38} className="hover:cursor-pointer dark:text-drkBtn  text-brown"  onClick={toggleSidebar}/>
      <div className="flex gap-6">
        {themeMode === "dark" ? (
          <MdDarkMode
            size={38}
            className="hover:cursor-pointer dark:text-drkBtn "
            onClick={toggleThemeMode}
          />
        ) : (
          <MdLightMode
            size={38}
            className="hover:cursor-pointer text-brown"
            onClick={toggleThemeMode}
          />
        )}
        <MdSettings size={38} className="hover:cursor-pointer dark:text-drkBtn text-brown" />
        <img
          src={avatar}
          alt="user-pic"
          className="w-8 h-7 rounded-xl hover:cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Topbar;
