// import { useRouter } from "next/navigation";
// import { useUser } from "@supabase/auth-helpers-react";

// export default function NewIdeaButton() {
//   const user = useUser();
//   const router = useRouter();

//   const handleClick = () => {
//     if (!user) {
//       router.push("/login");
//     } else {
//       router.push("/ideas/new");
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//     >
//       + Nouvelle idée
//     </button>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";


export default function NewIdeaButton() {
  const { session } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    if (!session) {
      router.push("/login");
    } else {
      router.push("/ideas/new");
    }
  };

  return (
        <button
          onClick={handleClick}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          + Nouvelle idée
        </button>
      );
}
