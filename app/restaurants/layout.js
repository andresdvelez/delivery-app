import NavigationBar from "../components/NavigationBar";

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavigationBar />
      </body>
    </html>
  );
}
