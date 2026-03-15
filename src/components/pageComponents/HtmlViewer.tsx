interface props {
  htmlString: string;
}
const HtmlViewer = ({ htmlString }: props) => {
  const srcDoc = `
  <!DOCTYPE html>
  <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      ${htmlString}
    </body>
  </html>
`;
  return (
    <iframe
      srcDoc={srcDoc}
      className="h-full w-full border-none"
      title="preview"
    />
  );
};

export default HtmlViewer;
