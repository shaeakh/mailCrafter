import { Download } from "lucide-react";
import "./App.css";
import AppSidebar from "./components/pageComponents/AppSidebar";
import Editor from "./components/pageComponents/Editor";
import HtmlViewer from "./components/pageComponents/HtmlViewer";
import { Button } from "./components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import templates from "./constansts/htmlConstants";
import useCode from "./hooks/useCode";

function App() {
  const { htmlString, setHtmlString, handleDownload, setHtmlStringDebounced } =
    useCode();

  return (
    <SidebarProvider>
      <AppSidebar
        templates={templates}
        selectedTemplateId={templates[0].id}
        onSelect={setHtmlString}
      />

      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <div className="flex-none w-full flex justify-between p-2 border-b border-border bg-background">
          <div className="h-full flex items-center gap-2">
            <SidebarTrigger />
            <button>Custom Theme</button>
          </div>

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
              <Editor
                htmlString={htmlString}
                setHtmlString={setHtmlString}
                setHtmlStringDebounced={setHtmlStringDebounced}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <HtmlViewer htmlString={htmlString} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
