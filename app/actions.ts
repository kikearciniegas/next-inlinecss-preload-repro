// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Rafael Arciniegas
"use server";
import { redirect } from "next/navigation";

export async function go() {
  redirect("/done");
}
