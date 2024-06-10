"use client";
import { useState, useEffect } from "react";
import { FetchOptions } from "@/lib/types";
import fetchDataBE from "@/lib/fetch";

/**
 *
 * @param apiUrl
 * @param options
 * @param isAdmin (비워두어도 됨) admin 으로 요청하고 싶을 때 true
 * @param isTest (비워두어도 됨) next서버로 테스트하고 싶을 때 true
 * @returns
 */
const useFetch = <T>(
  apiUrl: string,
  options: FetchOptions = {},
  isAdmin: boolean | null = null,
  isTest: boolean | null = null
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log(
          "useFetch에서 데이터를 호출합니다: apiUrl, options, isAdmin, isTest",
          apiUrl,
          options,
          isAdmin,
          isTest
        );
        const data = await fetchDataBE(apiUrl, options, isAdmin, isTest);
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("알 수 없는 에러가 발생했습니다."));
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [apiUrl]);

  console.log("[useFetch.ts] data?", data);

  return [data, error, loading] as const;
};

export default useFetch;
