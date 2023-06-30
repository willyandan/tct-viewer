import { useDropzone } from "react-dropzone";
import "./Dropzone.css";

function Dropzone({ open }:{open:(param:File)=>void}) {
  const { getRootProps, getInputProps, acceptedFiles, } =
    useDropzone({});

  const file = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ))[0];

  return (
    <>
        <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p className="dropzone-content">
            Jogue o arquivo .tct aqui
            </p>
        </div>
        <aside>
            <ul>{file}</ul>
        </aside>
        </div>
        <br/>
        <button type="button" onClick={()=>open(acceptedFiles[0])} className="btn">
            Clique aqui para confirmar
        </button>
    </>
  );
}

export default Dropzone;