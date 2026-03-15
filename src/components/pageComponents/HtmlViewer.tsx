interface props {
  htmlString: string;
}
const HtmlViewer = ({ htmlString }: props) => {
  return <div>{htmlString}</div>;
};

export default HtmlViewer;
