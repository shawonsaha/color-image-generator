import { useRef } from "react";
import Image from "next/image";

interface ImageDisplayProps {
  imageUrl: string | null;
  format: string;
  color?: string;
}

const ImageDisplay = ({
  imageUrl,
  format,
  color = "#000000",
}: ImageDisplayProps) => {
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    if (imageUrl && downloadLinkRef.current) {
      // Create a dynamic name based on color and format
      const timestamp = new Date().getTime();
      const colorCode = color.replace("#", "");
      const filename = `generated-image-${colorCode}-${timestamp}.${format}`;

      // Set download attributes
      downloadLinkRef.current.href = imageUrl;
      downloadLinkRef.current.download = filename;
      downloadLinkRef.current.click();
    }
  };

  if (!imageUrl) {
    return (
      <div className="w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center p-8 h-64">
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Generated image will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-1">
        <Image
          src={imageUrl}
          alt="Generated color image"
          layout="responsive"
          width={500}
          height={500}
          className="max-w-full object-contain mx-auto"
          style={{ maxHeight: "400px" }}
        />
      </div>

      <div className="flex space-x-2">
        <button
          onClick={handleDownload}
          className="bg-green-600 cursor-pointer w-full hover:bg-green-700 text-white rounded py-2 px-4 font-medium transition"
        >
          Download
        </button>

        {/* <a
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded py-2 px-4 font-medium transition"
          style={{ pointerEvents: "none", opacity: 0.5 }}
        >
          Open in New Tab
        </a> */}

        {/* Hidden anchor for downloads */}
        <a ref={downloadLinkRef} className="hidden" />
      </div>
    </div>
  );
};

export default ImageDisplay;
