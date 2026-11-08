// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Rafael Arciniegas
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>© 2026 Rafael Arciniegas</footer>
      </body>
    </html>
  );
}
