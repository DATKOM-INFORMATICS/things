"use client";
import supabase from '@/supabase/supabaseClient'
//import { supabase } from "@/supabase/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConnexionPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/`, // la page où tu veux rediriger l'user après connexion
      },
    });

    if (error) {
      console.error("Erreur lors de la connexion Google : ", error.message);
    } else {
      console.log("Redirection vers Google Auth...");
    }
  };

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    // Redirigez l'utilisateur vers l'URL de connexion Google
    if (data?.url) window.location.href = data.url
    if (error) console.error(error)
  }

  const imageUrl = "https://images.unsplash.com/photo-1563696629964-8c3ce077cf3e?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Partie Image */}
      <div className="md:w-1/4 w-full relative h-60 md:h-auto">
      {/*  */}
        <Image
          src={imageUrl}
          alt="Connexion visuelle"
          fill
          className="object-cover"
        />
      </div>

      {/* Partie Connexion */}
      <div className="md:w-3/4 w-full flex flex-col justify-center items-center px-6 md:px-20 py-10">
        {/* User Simple */}
        <div className="w-full max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenue sur Things</h1>
          <p className="text-gray-600 mb-6">Rejoins la communauté et découvre des idées inspirantes.</p>

          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-black text-white py-3 text-lg"
          >
            Se connecter avec Google
          </button>

          <div className="my-6 border-b border-gray-300"></div>

          {/* Entreprises */}
          <h2 className="text-2xl font-semibold mb-2">Vous êtes une entreprise ?</h2>
          <p className="text-gray-600 mb-4">Inscrivez-vous ou connectez-vous pour gérer vos produits et vos idées.</p>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link href="/inscription-entreprise">
              <button className="bg-blue-600 text-white w-full md:w-auto">Inscription Entreprise</button>
            </Link>
            <Link href="/login-entreprise">
              <button className="w-full md:w-auto">Connexion Entreprise</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
