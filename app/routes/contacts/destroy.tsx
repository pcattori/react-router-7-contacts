import { redirect } from "react-router";
import invariant from "tiny-invariant";

import type * as Route from "./+types.destroy"
import { deleteContact } from "~/data";

export const action = async ({ params }: Route.ActionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  await deleteContact(params.contactId);
  return redirect("/");
};
