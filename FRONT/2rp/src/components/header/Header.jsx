import Dropdown from "../dropdown/DropDown";

import Logo from "../../assets/img/Logo";

export default function Header() {
  return (
    <header className="bg-black h-[15vh] flex items-center justify-center">
      <div className="w-[90%] flex justify-between items-center">
        <Logo />
        <Dropdown />
        {/* <DropdownMenuPrimitive.Root >
          <DropdownMenuPrimitive.Trigger asChild>
            <button>
              <HamburgerMenuIcon />
            </button>
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Content sideOffset={5}>
            <DropdownMenuPrimitive.Item>
              <Link to="/MeuPerfil">
                <PersonIcon />
              </Link>
            </DropdownMenuPrimitive.Item>
            {parseJwt().role === "2" && (
              <>
                <DropdownMenuPrimitive.Item>
                  <Link to="/Cadastro">
                    <PlusIcon />
                  </Link>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item>
                  <Link to="/VerPerfis"></Link>
                </DropdownMenuPrimitive.Item>
              </>
            )}
            {parseJwt().role === "3" && (
              <>
                <DropdownMenuPrimitive.Item>
                  <Link to="/Cadastro">
                    <PlusIcon />
                  </Link>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item>
                  <Link to="/VerPerfis"></Link>
                </DropdownMenuPrimitive.Item>
              </>
            )}
            <DropdownMenuPrimitive.Item>
              <ExitIcon onClick={logOut} />
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root> */}
      </div>
    </header>
  );
}
