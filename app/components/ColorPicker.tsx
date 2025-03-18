import { HexColorPicker } from 'react-colorful';
import { useState, useEffect } from 'react';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const [localColor, setLocalColor] = useState(color);

  useEffect(() => {
    setLocalColor(color);
  }, [color]);

  const handleColorChange = (newColor: string) => {
    setLocalColor(newColor);
    onChange(newColor);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setLocalColor(newColor);
    
    // Only update parent state if it's a valid hex color
    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      onChange(newColor);
    }
  };

  return (
    <div className="space-y-3">
      <HexColorPicker className="w-full max-w-[240px]" color={localColor} onChange={handleColorChange} />
      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          value={localColor}
          onChange={handleInputChange}
          className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-32 text-sm"
        />
        <div 
          className="w-8 h-8 rounded border border-gray-300 dark:border-gray-700" 
          style={{ backgroundColor: localColor }}
        />
      </div>
    </div>
  );
};

export default ColorPicker; 