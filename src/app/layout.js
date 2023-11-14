import "./globals.css";

export const metadata = {
  title: "Custom File Explorer",
  description: "Application to work as custom file explorer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
