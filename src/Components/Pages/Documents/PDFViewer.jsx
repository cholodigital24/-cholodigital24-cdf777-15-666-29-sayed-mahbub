import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import DownloadResume from "../App/DownloadResume";

function PDFViewer() {

  const embedUrl =
    "https://drive.google.com/file/d/15NjYLfVqCLc81U8rLi81zHLPe8I3LbHg/preview";

  const [pdfLoaded, setPdfLoaded] = useState(false);

  const handleDownload = () => {
    window.open(pdfDirectLink, "_blank");
  };

  const handleLoad = () => {
    setPdfLoaded(true);
  };

  const handleError = () => {
    setPdfLoaded(true); // Treat errors as if the PDF is loaded to avoid getting stuck in the loading state
  };

  return (
    <div className="w-full p-0">
      
      {!pdfLoaded ? (
        <div className="flex items-center justify-center h-full">
          <p>Loading PDF...</p>
        </div>
      ) : null}
      <iframe
        title="PDF Viewer"
        src={embedUrl}
        width="100%"
        height="480"
        allow="autoplay"
        onLoad={handleLoad}
        onError={handleError}
      ></iframe>
      <div className="flex items-center justify-between mb-2">
      <DownloadResume />

      </div>
    </div>
  );
}

export default PDFViewer;
