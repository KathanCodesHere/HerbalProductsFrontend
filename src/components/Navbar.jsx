export default function Navbar() {
  return (
    <nav className="bg-[var(--color-primary)] text-[var(--color-bg)] p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🌿<bold>Herbals</bold></h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-[var(--color-accent)]">Home</a>
        <a href="/products" className="hover:text-[var(--color-accent)]">Products</a>
        <a href="/login" className="hover:text-[var(--color-accent)]">Login</a>
        <a href="/signup" className="hover:text-[var(--color-accent)]">Signup</a>
      </div>
    </nav>
  );
}
