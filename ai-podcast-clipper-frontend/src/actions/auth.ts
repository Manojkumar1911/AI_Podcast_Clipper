"use server";

import { redirect } from "next/navigation"
import { createClient } from "~/lib/supabase/server"

export async function signIn(provider: string, options: { email: string; password: string; redirect: boolean }) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: options.email,
    password: options.password,
  })

  if (error) {
    return { error: error.message }
  }

  if (options.redirect) {
    redirect("/dashboard")
  }

  return { error: null }
}

export async function signUp(data: { email: string; password: string }) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/")
}