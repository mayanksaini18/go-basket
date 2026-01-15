"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase"; // Adjust path if needed
import Link from "next/link";

import AuthLayout from "@/components/comp/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, MailCheck, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err: any) {
      // Firebase specific error handling improves UX
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email address.");
      } else {
        setError(err.message || "Failed to send reset email.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------------------
  // VIEW 1: Success State (shown after email is sent)
  // ------------------------------------------------------------------
  if (success) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We have sent a password reset link to your email address."
        image="/images/auth.jpg"
      >
        <div className="flex flex-col items-center justify-center space-y-6 pt-4 animate-in fade-in zoom-in duration-300">
          <div className="rounded-full bg-green-100 p-3">
            <MailCheck className="h-10 w-10 text-green-600" />
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Did not receive the email? Check your spam folder or try another email address.
            </p>
          </div>

          <Button asChild className="w-full" variant="outline">
            <Link href="/login">
              Back to login
            </Link>
          </Button>

          <button
            onClick={() => setSuccess(false)}
            className="text-xs text-muted-foreground hover:underline hover:text-primary"
          >
            Try a different email
          </button>
        </div>
      </AuthLayout>
    );
  }

  // ------------------------------------------------------------------
  // VIEW 2: Form State (Default)
  // ------------------------------------------------------------------
  return (
    <AuthLayout
      title="Reset password"
      subtitle="Enter the email address associated with your account and we'll send you a link to reset your password."
      image="/images/auth.jpg"
    >
      <form onSubmit={handleReset} className="space-y-6">
        {/* Error Alert */}
        {error && (
          <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive font-medium animate-in slide-in-from-top-2">
            {error}
          </div>
        )}

        {/* Email Input */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 text-base"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send reset link
        </Button>

        {/* Back to Login Link */}
        <div className="flex justify-center">
          <Link
            href="/login"
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}