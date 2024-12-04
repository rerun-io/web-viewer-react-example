import WebViewer from "@rerun-io/web-viewer-react";
import React from "react";
import Select from "react-select";

const options = [
  {
    label: "arkit scenes",
    value: "https://app.rerun.io/version/0.20.3/examples/arkit_scenes.rrd",
  },
  { label: "helix", value: "https://app.rerun.io/version/0.20.3/examples/dna.rrd" },
  {
    label: "structure from motion",
    value: "https://app.rerun.io/version/0.20.3/examples/structure_from_motion.rrd",
  },
];

export default function App() {
  const [selected, setSelected] = React.useState([] as string[]);
  return (
    <>
      <Select isMulti options={options} onChange={(e) => setSelected(e.map((v) => v.value))} />
      <WebViewer width="100%" height="100%" rrd={selected} hide_welcome_screen />
    </>
  );
}

