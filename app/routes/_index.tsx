import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/component/Footer";
import Navbar from "~/component/Navbar";
import SearchInputForm from "~/component/SearchInputForm";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// export const loader = async(args:LoaderArgs) => getSearchedName(args);

export default function Index() {
  return (
    <>
      <Navbar />
      <SearchInputForm/>
      <Footer/>
    </>
  );
}
