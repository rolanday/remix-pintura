# Basic boilerplate enabling Pintura on Remix

## Prerequisites

You'll need Pinutra license and access to redist folders to clone/fork this repo or recreate boilerplate using the steps outlined below.

```
pintura
pintura-react
```

If cloning/forking this repro, copy Pinutra redist folders to `./redist` folder located in the project root, then run (e.g., `npm run dev`).

## Creating a project from scratch

1. npx create-remix@latest
1. Install project depndencies (e.g; `npm i`)
1. Copy Pintura redist folders (above) to the location of choice in your project directory, and then install (e.g., `npm i ./redist/pintura ./redist/pintura-react`)

4. Edit `remix.config.js` so includes Pintura modules in the server deps bundle. For example:

```
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: ["@pqina/pintura", "@pqina/react-pintura"]
};

```

5. Add Pintura to your page. For example:

```
// app/routes/index.tsx
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

```

