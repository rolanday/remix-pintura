import styles from "@pqina/pintura/pintura.css";
import { getEditorDefaults } from "@pqina/pintura";
import { PinturaEditor } from "@pqina/react-pintura";
import { useRef } from "react";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  const editorConfig = getEditorDefaults();
  editorConfig.layoutDirectionPreference = "horizontal";
  editorConfig.layoutHorizontalUtilsPreference = "top";
  editorConfig.enableButtonClose = false;
  editorConfig.enableButtonExport = true;
  return (
    <>
      <div style={{ background: "black", width: "100vw", height: "100vh", fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <PinturaEditor
          id="image-editor"
          {...editorConfig}
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"}
          markupEditorToolbar={[
            ["sharpie", "Sharpie", { disabled: true }],
            ["eraser", "Eraser", { disabled: false }],
            ["rectangle", "Rectangle", { disabled: false }],
          ]}
        ></PinturaEditor>
      </div>
    </>
  );
}

