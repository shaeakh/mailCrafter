import MonacoEditor from "@monaco-editor/react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  htmlString: string;
  setHtmlString: Dispatch<SetStateAction<string>>;
}

const Editor = ({ htmlString, setHtmlString }: Props) => {
  return (
    <div className="h-full w-full">
      <MonacoEditor
        height="100%"
        width="100%"
        language="html"
        value={htmlString}
        theme="vs-dark"
        onChange={(value) => setHtmlString(value ?? "")}
        options={{
          minimap: { enabled: false },
          wordWrap: "on",
          formatOnType: true,
          fontSize: 20,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          tabSize: 2,
          insertSpaces: true,
          fontLigatures: true,
          cursorSmoothCaretAnimation: "on",
          cursorBlinking: "expand",
          linkedEditing: true,
          rulers: [
            { column: 80, color: "#00FF0010" },
            { column: 100, color: "#BDB76B15" },
            { column: 120, color: "#FA807219" },
          ],
        }}
      />
    </div>
  );
};

export default Editor;
