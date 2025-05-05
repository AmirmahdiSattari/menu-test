import { AppBar, Box } from "@mui/material";

import { Metadata } from "next";
import SideMenuWrapper from "@/components/Menus/SideMenuWrapper";
import ThemeRegistry from "./ThemeRegistry";
import { vazirmatn } from "./fonts";

export const metadata: Metadata = {
  title: "My App",
  description: "An app with Vazirmatn font",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body style={{ margin: 0, height: "100vh", overflow: "hidden" }}>
        <ThemeRegistry>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
          >
            {/* Header */}
            <AppBar
              position="static"
              sx={{
                height: "10vh",
                backgroundColor: "#D9D9D9",
                boxShadow: "none",
              }}
            />

            {/* Main Content */}
            <Box
              sx={{ display: "flex", flex: 1, backgroundColor: "#ffff" }}
              pl={4}
              pt={4}
            >
              {/* Sidebar */}
              <Box
                sx={{ width: "20%", height: "90vh", px: 2, overflowY: "auto" }}
              >
                <SideMenuWrapper />
              </Box>

              {/* Scrollable Content */}
              <Box
                sx={{
                  flexGrow: 1,
                  p: 3,
                  backgroundColor: "#D9D9D9",
                  overflowY: "auto",
                  height: "90vh",
                  borderRadius: 5,
                  overflowX: "hidden",
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
