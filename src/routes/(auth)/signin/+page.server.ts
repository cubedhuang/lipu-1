import { signIn } from "$lib/auth.server";
import type { Actions } from "./$types";

export const actions = { default: signIn } satisfies Actions;
