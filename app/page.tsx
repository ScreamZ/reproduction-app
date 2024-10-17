"use client";

import { useTransition } from "react";
import { setSomeCookie } from "./action";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <p>
        Do not execute this in the code sandbox environment, as you don't want
        to deal with cross site cookies.
      </p>
      <button
        onClick={() =>
          startTransition(async () => {
            await setSomeCookie();
          })
        }
      >
        {isPending ? "Loading" : "Click me"}
      </button>
    </>
  );
}
