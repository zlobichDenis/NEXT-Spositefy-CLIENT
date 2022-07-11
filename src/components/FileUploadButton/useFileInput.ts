import { useRef, RefObject, ChangeEvent } from "react";

interface UseFileInput {
  ref: RefObject<HTMLInputElement> | null;
  click: () => void;
  handleUploadFiles: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useFileInput= (): UseFileInput => {
  const ref = useRef<HTMLInputElement>(null);

  const click = () => {
    ref?.current?.click();
  };

  const handleUploadFiles = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files)
  };

  return {
    ref,
    click,
    handleUploadFiles,
  };
};