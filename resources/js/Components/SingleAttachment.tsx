import { Button } from "react-bootstrap";

export default function SingleAttachment({ document }: any) {
  async function handleFileOpen(filePath: any) {
    try {
      // Open the file in a new tab
      window.open(`/show-document/${filePath}`, "_blank");
    } catch (error) {
      console.error("File Not Found", error);
    }
  }

  return (
    <>
      <Button
        variant="link"
        className="p-0"
        onClick={() => handleFileOpen(document)}
      >
        {document.split("/").pop()}
      </Button>
    </>
  );
}
