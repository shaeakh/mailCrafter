import { useState } from "react";
import { defaultHtml } from "../constansts/htmlConstants";

const useCode = () => {
  const [htmlString, setHtmlString] = useState<string>(defaultHtml);
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const handleDownload = (htmlString: string) => {
    const fullHtml = `<!DOCTYPE html>
  <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      ${htmlString}
    </body>
  </html>`;

    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "email-template.html";
    a.click();

    URL.revokeObjectURL(url);
  };
  return {
    htmlString,
    setHtmlString,
    isSideBarOpen,
    setSideBarOpen,
    handleDownload,
  };
};
export default useCode;
