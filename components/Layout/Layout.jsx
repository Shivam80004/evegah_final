import Header1 from "@/components/Header1/Header";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }) {

  let headerData = null;
  let footerData = null;


  return (
    <>
      <Header1 />
      <main className="relative bg-white z-0 mb-[40vh] rounded-b-4xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
