import Container from "@/components/ui/container";
import Link from "next/link";
import MainNavigation from "./main-navigation";
import getCategories from "../../actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories()

  // TODO Napravit da se moze poredak mijenjat jer je trenutno automatski - dodat mozda ono sliding ili samo input za poredak
  
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-3 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-2xl">Shopicro</p>
          </Link>
          <MainNavigation data={categories}/>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
