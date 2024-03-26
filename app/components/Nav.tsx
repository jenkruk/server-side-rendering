import Image from "next/image";
import Link from "next/link";
import Tooltip from "./Tooltip";
import amexLogo from "@/public/nav/amex.svg";

export const Nav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 lg:px-24 shadow-bottom shadow-md min-w-full max-w-full">
      <div className="flex items-center flex-1">
        <Image src={amexLogo} alt="Logo" width={100} height={100} />
        <h1 className="text-2xl lg:text-4xl font-bold cursor-default text-amex ml-4">
          Welcome
        </h1>
      </div>

      <div className="flex items-center justify-end lg:justify-center flex-1">
        <Link href="/" className="mr-4 hover:text-shadow-sm">
          Dashboard
        </Link>

        <Link href="/clients?page=1" className="ml-4 hover:text-shadow-sm">
          Clients
        </Link>
      </div>

      <div className="flex items-center justify-end flex-1 max-lg:hidden">
        <h3 className="cursor-defaul whitespace-nowrap">
          &#169; Jennifer Kruk
        </h3>
        <div className="hidden">
          <Link
            href="https://docs.google.com/document/d/1fxLSTDecv2Ilv-flTK9YAJ-xtlEC1yBnsCs8aFY2gsU/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="resume flex items-center hover:text-shadow-sm"
          >
            Résumé
            <Tooltip />
          </Link>

          <Link
            href="https://github.com/jenkruk"
            className="github ml-8 flex items-center hover:text-shadow-sm"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </Link>
        </div>
      </div>
    </nav>
  );
};
