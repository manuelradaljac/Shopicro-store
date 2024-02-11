import Container from "@/components/ui/container";
import Link from "next/link";
import MainNavigation from "./main-navigation";
import getCategories from "../../actions/get-categories";
import NavbarActions from "./navbar-actions";
import getStoreInfo from "../../actions/get-store-info";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories()
  const storeInfo = await getStoreInfo()
  
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-3 flex lg:ml-0 gap-x-2">
            <Image src={storeInfo.logo} alt="shopicro" width={100} height={100} priority/>
          </Link>
          <MainNavigation data={categories}/>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
