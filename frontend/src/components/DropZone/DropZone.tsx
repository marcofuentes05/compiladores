import * as React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { readFileSync } from 'fs';
import './styles.css'
const fileTypes = ["JPG", "PNG", "GIF", "g4"];


export const  DragDrop = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
    setFile(file);
    const readFile = readFileSync(file);
    console.log("🚀 ~ file: DropZone.tsx ~ line 14 ~ handleChange ~ readFile", readFile)
    console.log("🚀 ~ file: DropZone.tsx ~ line 11 ~ handleChange ~ file", file)
  };
  return (
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
            <div className="file-dropper">
            <p> Drag files here</p>
            </div>
        </FileUploader>
  );
};