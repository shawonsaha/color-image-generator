import { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";

interface FormData {
  color: string;
  width: number;
  height: number;
  format: "png" | "jpeg" | "webp";
}

interface ImageFormProps {
  onGenerate: (formData: FormData) => void;
  isLoading: boolean;
}

const ImageForm = ({ onGenerate, isLoading }: ImageFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    color: "#3b82f6",
    width: 500,
    height: 300,
    format: "png",
  });

  const [aspectRatio, setAspectRatio] = useState<string>("1:1");

  const handleColorChange = (color: string) => {
    setFormData((prev) => ({ ...prev, color }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "width" || name === "height") {
      // Ensure dimensions are numbers and within reasonable limits
      const numValue = parseInt(value);
      if (numValue && numValue > 0 && numValue <= 100000) {
        setFormData((prev) => ({ ...prev, [name]: numValue }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAspectRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ratio = e.target.value;
    setAspectRatio(ratio);
    const [widthRatio, heightRatio] = ratio.split(":").map(Number);
    const newWidth = formData.height * (widthRatio / heightRatio);
    setFormData((prev) => ({ ...prev, width: Math.round(newWidth) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-1">
        <label className="block text-sm font-medium">Color</label>
        <ColorPicker color={formData.color} onChange={handleColorChange} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="width" className="block text-sm font-medium">
            Width (px)
          </label>
          <input
            type="number"
            id="width"
            name="width"
            min="1"
            max="100000"
            value={formData.width}
            onChange={handleInputChange}
            className="w-full rounded border border-gray-300 dark:border-gray-700 px-3 py-2"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="height" className="block text-sm font-medium">
            Height (px)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            min="1"
            max="100000"
            value={formData.height}
            onChange={handleInputChange}
            className="w-full rounded border border-gray-300 dark:border-gray-700 px-3 py-2"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="aspect-ratio" className="block text-sm font-medium">
          Aspect Ratio
        </label>
        <select
          id="aspect-ratio"
          name="aspect-ratio"
          value={aspectRatio}
          onChange={handleAspectRatioChange}
          className="w-full rounded border border-gray-300 dark:border-gray-700 px-3 py-2"
        >
          <option value="1:1">1:1</option>
          <option value="16:9">16:9</option>
          <option value="4:3">4:3</option>
          <option value="3:2">3:2</option>
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="format" className="block text-sm font-medium">
          Format
        </label>
        <select
          id="format"
          name="format"
          value={formData.format}
          onChange={handleInputChange}
          className="w-full rounded border border-gray-300 dark:border-gray-700 px-3 py-2"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WebP</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-4 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Generating..." : "Generate Image"}
      </button>
    </form>
  );
};

export default ImageForm;
