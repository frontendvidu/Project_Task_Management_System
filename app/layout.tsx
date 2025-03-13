import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import SideBar from "./SideBar";
export default function RootLayout({ children }: { children: React.ReactNode })
{
  return (
    <html lang="en">
      <body>
        <Theme>
          <div className="flex">
            <SideBar />
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
