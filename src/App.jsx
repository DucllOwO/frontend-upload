import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios
      .post("http://localhost:3000/voice-ai/response", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <input type="file" onChange={onFileChange} />
          <button onClick={onFileUpload}>Upload!</button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
