import { useState } from "react";
import templates from "../constansts/htmlConstants";

const useCode = () => {
  const [htmlString, setHtmlString] = useState<string>(templates[0].html);
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
    handleDownload,
  };
};
export default useCode;
