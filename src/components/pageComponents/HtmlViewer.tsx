interface props {
  htmlString: string;
}
const HtmlViewer = ({ htmlString }: props) => {
  const srcDoc = `
  <!DOCTYPE html>
  <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/lucide@latest"></script>
    </head>
    <body>
      ${htmlString}
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          lucide.createIcons();
        });
      </script>
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
