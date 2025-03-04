import "@/styles/globals.css";

import UserProvider from "../context/user-context";
import ThemeProvider from "@/context/theme-context";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}
