import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet /> {/* This renders the child route */}
      </main>
    </div>
  );
}
