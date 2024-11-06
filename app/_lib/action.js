"use server";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function guestUpdate(formData) {
  const session = await auth();
  if (!session) throw new Error("You must log in first");

  const nationalID = formData.get("nationalID");

  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("please provide a valid ID number");
  const updatedData = { nationalID, nationality, countryFlag };


  const { data, error } = await supabase
  .from("guests")
  .update(updatedData)
  .eq("id", session.user.guestId)
  
if (error) {
  console.error(error);
  throw new Error("Guest could not be updated");

  console.log(updatedData);
}

export default async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
