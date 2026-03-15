import { Download, PanelRightClose, PanelRightOpen } from "lucide-react";
import "./App.css";
import Editor from "./components/pageComponents/Editor";
import HtmlViewer from "./components/pageComponents/HtmlViewer";
import { Button } from "./components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import useCode from "./hooks/useCode";
function App() {
  const {
    htmlString,
    setHtmlString,
    isSideBarOpen,
    setSideBarOpen,
    handleDownload,
  } = useCode();
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="flex-none w-full flex justify-between p-2 border-b border-border bg-background">
        <button onClick={() => setSideBarOpen(!isSideBarOpen)}>
          {isSideBarOpen ? <PanelRightClose /> : <PanelRightOpen />}
        </button>
        <Button
          onClick={() => {
            handleDownload(htmlString);
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Export HTML
        </Button>
      </div>
      <div className="flex-1 min-h-0 ">
        <ResizablePanelGroup orientation="horizontal" className="h-full">
          <ResizablePanel>
            <Editor htmlString={htmlString} setHtmlString={setHtmlString} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <HtmlViewer htmlString={htmlString} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default App;
