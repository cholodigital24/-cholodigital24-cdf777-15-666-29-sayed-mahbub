import { FaDownload } from "react-icons/fa";

function DownloadResume() {
  const pdfDirectLink =
  "https://drive.google.com/uc?id=15NjYLfVqCLc81U8rLi81zHLPe8I3LbHg";

  return (
    <a
      href={pdfDirectLink}
      download="your-file-name.pdf" // Specify the desired file name
      className={`bg-primary flex justify-center items-center my-5 shadow-xl text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105`}
    >
      <FaDownload className="mr-2" /> Download Resume
    </a>
  );
}

export default DownloadResume;