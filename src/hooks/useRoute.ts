import { useCallback } from "react";
import { useRouter } from "next/router";


export const useRoute = (): (path: string) => void => {
  const { push } = useRouter();

  const routeTo = useCallback((path: string) => () => {
    push(path);
  }, [push]);

  return routeTo;
};