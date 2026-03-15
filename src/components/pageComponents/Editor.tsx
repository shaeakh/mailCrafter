import type { Dispatch, SetStateAction } from "react";

interface Props {
  htmlString: string;
  setHtmlString: Dispatch<SetStateAction<string>>;
}

const Editor = ({ htmlString, setHtmlString }: Props) => {
  return (
    <div>
      <textarea
        value={htmlString}
        onChange={(e) => setHtmlString(e.target.value)}
      />
    </div>
  );
};

export default Editor;
