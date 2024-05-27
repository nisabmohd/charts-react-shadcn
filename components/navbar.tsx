import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="h-16 border-b flex items-center">
      <div className="container text-right">
        <ThemeToggle />
      </div>
    </nav>
  );
}
