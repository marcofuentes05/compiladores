import * as React from "react";
import './styles.css'

interface FileImporterProps {
    setFileContentValue: (content: string) => void;
}


export const  FileImporter = (props: FileImporterProps) => {

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
            <p>Importar</p>
            <input type="file" onChange={getFileContent} />
        </label>
  );
};
