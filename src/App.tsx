import { useState } from "react";
import "./App.css";
import Editor from "./components/pageComponents/Editor";
import HtmlViewer from "./components/pageComponents/HtmlViewer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { defaultHtml } from "./constansts/htmlConstants";

function App() {
  const [htmlString, setHtmlString] = useState<string>(defaultHtml);
  return (
    <div className="w-screen h-screen">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel>
          <Editor htmlString={htmlString} setHtmlString={setHtmlString} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <HtmlViewer htmlString={htmlString} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
