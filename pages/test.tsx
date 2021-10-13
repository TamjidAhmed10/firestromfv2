import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    console.log(editorRef.current.getContent());
    return editorRef.current.getContent();
  };
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 600,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo |fullscreen formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent image indent | " +
            "removeformat | help",
          image_caption: true,
        }}
      />
      <button onClick={log}>Log editor content{log}</button>
    </>
  );
}
