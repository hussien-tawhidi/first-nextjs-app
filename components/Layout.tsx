import Head from "next/head";
import NavbarMenu from "@/components/navbar";
import Footer from "@/components/footer";
export default function Layout({ children, title }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='desciptions' content='create by next frameworkd' />
        <meta name='viewport' content='width-device-width, initial-scale-1' />
        <link rel='shortcut icon' href='/sm-logo.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </Head>
      <main className="bg-white">
        <NavbarMenu />

        {children}
        <Footer />
      </main>
    </>
  );
}
