import { useCallback } from "react";
import { useRouter } from "next/router";

export const useRoute = () => {
  const { push } = useRouter();

  const routeTo = useCallback((path: string) => () => {
    push(path);
  }, [push]);

  return routeTo;
};