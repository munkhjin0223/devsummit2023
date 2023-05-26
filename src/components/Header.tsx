import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {
  isWhite?: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({ isWhite }) => {
  return (
    <header className="mb-4">
      <Link className={`text-xl underline${isWhite ? " text-white" : ""}`} href="/">
        Back
      </Link>
    </header>
  );
};

export default Header;
