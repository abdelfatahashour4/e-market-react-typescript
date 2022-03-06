import { MouseEvent, useState } from "react";

type buttonProps = {
  onClick: () => Promise<void>;
  text: string;
};

export default function Submit({ onClick, text }: buttonProps) {
  const [disabled, setDisabled] = useState<boolean>(false);
  return (
    <button
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setDisabled(true);
        onClick()
          .then(() => setDisabled(false))
          .catch(() => setDisabled(false));
      }}
      type="submit"
      disabled={disabled}
      className="button_submit"
    >
      {text}
    </button>
  );
}
