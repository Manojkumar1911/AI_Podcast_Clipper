"use server";

import { redirect } from "next/navigation"
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react"
import { db } from "~/server/db"
import { hash } from "bcryptjs"

export async function signIn(provider: string, options: { email: string; password: string; redirect: boolean }) {
  const result = await nextAuthSignIn("credentials", {
    email: options.email,
    password: options.password,
    redirect: false,
  })

  if (result?.error) {
    return { error: result.error }
  }

  if (options.redirect) {
    redirect("/dashboard")
  }

  return { error: null }
}

export async function signUp(data: { email: string; password: string }) {
  try {
    const existingUser = await db.user.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      return { success: false, error: "User already exists" }
    }

    const hashedPassword = await hash(data.password, 12)

    await db.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Error creating user:", error)
    return { success: false, error: "Failed to create user" }
  }
}

export async function signOut() {
  await nextAuthSignOut()
  redirect("/")
}