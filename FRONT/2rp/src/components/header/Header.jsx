import Dropdown from "../dropdown/DropDown";

import Logo from "../../assets/img/Logo";

export default function Header() {
  return (
    <header className="bg-black h-[15vh] flex items-center justify-center">
      <div className="w-[90%] flex justify-between items-center">
        <Logo />
        <Dropdown />
      </div>
    </header>
  );
}
