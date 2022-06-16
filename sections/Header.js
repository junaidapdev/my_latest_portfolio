import { useTheme } from "next-themes";
import Link from "next/link";
import Buttons from "../components/button";

const Header = () => {

 const {systemTheme, theme, setTheme} = useTheme()


  
  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  const renderThemeChanger = () => {
    return (
      <>
      <Buttons className='bg-gray-200'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </Buttons>
      </>
     
    );
  };

  return (
    <header className="h-16 flex items-center justify-between">
      <ul className="flex gap-4">
        {navigations.map((nav, index) => (
          <Link key={index} href={nav.path}>
            <a className="font-smibold text-gray-400 hover:text-gray-500">
              {nav.label}
            </a>
          </Link>
        ))}
      </ul>
      <button>{renderThemeChanger()}</button>
    </header>
  );
};

export default Header;
