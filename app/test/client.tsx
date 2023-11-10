"use client";

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

const getSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  // Create a params object
  let params = {} as Record<string, string>;

  searchParams.forEach(function (val, key) {
    params[key] = val;
  });

  return params;
};

export default function PageClient() {
  const searchParams = useSearchParams();

  return (
    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      This page uses searchParams&nbsp;
      <code className="font-mono font-bold">
        {JSON.stringify(getSearchParams(searchParams), null, 2)}
      </code>
    </p>
  );
}
