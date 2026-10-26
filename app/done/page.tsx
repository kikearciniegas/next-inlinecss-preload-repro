import { connection } from "next/server";

export default async function Done() {
  await connection(); // render per request, like a signed-in page reading cookies
  return <p id="done">Redirected. Open DevTools: after ~3 s Chrome warns the CSS chunk was preloaded but not used.</p>;
}
