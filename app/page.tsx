// app/page.tsx
"use client";

import AuthLayout from "@/components/comp/AuthLayout";
import SocialButton from "@/components/comp/SocialButton";
import Link from "next/link";
import { signIn } from "next-auth/react";

import Greeting from "@/components/comp/greeting";

export default function HomePage() {
  return (
    // <AuthLayout
    //      title="Create an account"
    //      subtitle={
    //        <p className="text-sm text-slate-500">
    //          Already have an account?{" "}
    //          <Link href="/login">
    //          <button
              
    //           className="text-emerald-600 hover:underline"
    //           >
    //            Login
    //          </button>
    //            </Link>
    //        </p>
    //      }
    //      image=""
    //    >
    //      <div className="space-y-4">
    //        <Link href="/signup">
    //         <button
           
    //          className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
    //        >
    //          Start for free →
    //        </button>
    //        </Link>
    //        <br /><br />
    //        <SocialButton label="Sign up with GitHub" icon={undefined} onClick={() => signIn("github")} />
    //        <SocialButton label="Sign up with Apple" icon={undefined} onClick={() => signIn("apple")} />
    //        <SocialButton label="Sign up with Google" icon={undefined} onClick={() => signIn("google")} />
    //      </div>
    //    </AuthLayout>
  
    <div>
      <Link href={"/home"}>
      <Greeting/>
      </Link>
    </div>

  );
}
