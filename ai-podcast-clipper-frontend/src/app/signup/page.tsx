"use server";

import { redirect } from "next/navigation";
import { SignupForm } from "~/components/signup-form";
import { auth } from "~/server/auth";
import Image from "next/image";

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden bg-white/80 backdrop-blur-md">
        {/* Left side: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="/Copilot_20250531_163406.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side: Signup Form */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Create Account
            </h2>
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}