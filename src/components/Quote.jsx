import React from "react";
import { useQuery } from "@tanstack/react-query";

import { quoteFetcher as fetcher } from "../services";

import RefreshIcon from "./icons/RefreshIcon";

export default function Quote() {
  const { data, isFetching, refetch, error } = useQuery(["quote"], fetcher, {
    refetchOnWindowFocus: false,
  });

  const fetchQuote = () => {
    refetch();
  };

  if (!data || error) {
    return (
      <div className="flex">
        <p>An error has occurred.</p>
        <button className="h-max pl-4" onClick={fetchQuote}>
          <RefreshIcon isLoading={isFetching} />
        </button>
      </div>
    );
  }

  return (
    <>
      <blockquote className="max-w-lg relative">
        &ldquo;{data.text}&rdquo; <br />
        &mdash;
        <footer>
          <strong>{data.author ? data.author : "Missing author"}</strong>
        </footer>
        <button className="h-max absolute -right-8 top-0" onClick={fetchQuote}>
          <RefreshIcon isLoading={isFetching} />
        </button>
      </blockquote>
    </>
  );
}
