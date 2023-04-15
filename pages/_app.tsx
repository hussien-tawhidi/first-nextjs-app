import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <PersistGate loading='loading ...' persistor={persistor}>
          <main className={`${open_sans.variable} open-sans`}>
            <Component {...pageProps} />
            <Toaster />
          </main>
        </PersistGate>
      </SessionProvider>
    </Provider>
  );
}
