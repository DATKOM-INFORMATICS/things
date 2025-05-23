"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, supabase } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <Link href="/" className="text-2xl font-bold text-black">Things</Link>

        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="/">Accueil</Link>
          <Link href="/ideas">Idées</Link>
          <Link href="/products">Produits</Link>
          <Link href="/creators">Entreprises</Link>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                {user.user_metadata?.full_name || user.email}
                <ChevronDown className="ml-2" size={18} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-50">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Mon Profil</Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Connexion
            </Link>
          )}
        </nav>

        {/* Burger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-start space-y-4 p-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link>
            <Link href="/ideas" onClick={() => setIsOpen(false)}>Idées</Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>Produits</Link>
            <Link href="/creators" onClick={() => setIsOpen(false)}>Entreprises</Link>

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full text-center"
              >
                Déconnexion
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full text-center"
              >
                Connexion
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
