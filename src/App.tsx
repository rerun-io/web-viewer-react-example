import WebViewer from "@rerun-io/web-viewer-react";
import React from "react";
import Select from "react-select";

const options = [
  {
    label: "arkit scenes",
    value: "https://app.rerun.io/version/nightly/examples/arkit_scenes.rrd",
  },
  { label: "helix", value: "https://app.rerun.io/version/nightly/examples/dna.rrd" },
  {
    label: "structure from motion",
    value: "https://app.rerun.io/version/nightly/examples/structure_from_motion.rrd",
  },
];

export default function App() {
  const [selected, setSelected] = React.useState([] as string[]);
  return (
    <div>
      <Select isMulti options={options} onChange={(e) => setSelected(e.map((v) => v.value))} />
      <WebViewer rrd={selected} />
    </div>
  );
}

