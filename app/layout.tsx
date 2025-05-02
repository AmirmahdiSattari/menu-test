import { AppBar, Box } from '@mui/material';

import { Metadata } from 'next';
import SideMenu from '@/components/Menus/SideMenu';
import ThemeRegistry from './ThemeRegistry';
import { vazirmatn } from './fonts';

export const metadata: Metadata = {
  title: 'My App',
  description: 'An app with Vazirmatn font',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <ThemeRegistry>
          <AppBar position="sticky" sx={{ borderRadius: 3, height: 120, backgroundColor: '#fafafa' }} />

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '25%', minHeight: '100vh', p: 2 }}>
              <SideMenu />
            </Box>

            <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f4f4' }}>{children}</Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
