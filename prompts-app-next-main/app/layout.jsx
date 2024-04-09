import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/global.css";
import { children } from "react";

export const metadata = {
  title: "Prompts-App",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
