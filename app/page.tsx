// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Rafael Arciniegas
import { go } from "./actions";

export default function Page() {
  return (
    <form action={go}>
      <button type="submit">Submit (Server Action that redirects)</button>
    </form>
  );
}
