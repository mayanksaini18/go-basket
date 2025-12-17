// app/page.tsx
import AuthLayout from "@/components/comp/AuthLayout";
import SocialButton from "@/components/comp/SocialButton";
import Link from "next/link";

export default function HomePage() {
  return (
    <AuthLayout
         title="Create an account"
         subtitle={
           <p className="text-sm text-slate-500">
             Already have an account?{" "}
             <button
              
               className="text-emerald-600 hover:underline"
             >
               Login
             </button>
           </p>
         }
         image=""
       >
         <div className="space-y-4">
           <Link href="/signup">
            <button
           
             className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
           >
             Start for free →
           </button>
           </Link>
   
           <SocialButton label="Sign up with GitHub" icon={undefined} />
           <SocialButton label="Sign up with Apple" icon={undefined} />
           <SocialButton label="Sign up with Google" icon={undefined} />
         </div>
       </AuthLayout>
  );
}
