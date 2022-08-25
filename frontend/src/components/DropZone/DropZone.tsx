import * as React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { readFileSync } from 'fs';
import fs = require('fs');
import readline = require('readline');
import './styles.css'

interface DropZoneProps {
    setFileContentValue: (content: string) => void;
}


export const  DragDrop = (props: DropZoneProps) => {

    const getFileContent = async (e) => {
        e.preventDefault();
        const reader = new FileReader()
        let text = '';
        reader.onload = async (e) => { 
          text = (e.target.result) as string;
          props.setFileContentValue(text);
        };
        reader.readAsText(e.target.files[0])
        return text;
    }

    return (
        <label className="file-dropper">
            <p>Drag files here</p>
            <img src="http://cdn.onlinewebfonts.com/svg/img_364183.png" />
            <input type="file" onChange={getFileContent} />
        </label>
  );
};
