import React from "react";

import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../compontents";

const change = (args) => {
  let preview = document.getElementById("preview");
  preview.style.backgroundColor = args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded=2xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pattern</p>
            <ColorPickerComponent
              id="inline-pattern"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pick</p>
            <ColorPickerComponent
              id="inline-pattern"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
