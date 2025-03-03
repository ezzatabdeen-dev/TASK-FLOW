"use client";
import { useAppContext } from "@/Context/index";
import { FooterForm, Footer } from "@/Components/index";
import { Hero, MainContent1, TextBlock, MainContent2 } from "@/Sections/index";
import Page from './dashboard/page'

const Home = () => {
  const { usLoginState } = useAppContext();

  return (
    <main>
      {usLoginState 
      ? (
        <>
          <Page />
        </>
      ) 
      : (
        <>
          <Hero />
          <MainContent1 />
          <TextBlock />
          <MainContent2 />
          <FooterForm />
          <Footer />
        </>
      )}
    </main>
  );
};
export default Home;
