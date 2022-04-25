import ReactMarkdown from "react-markdown";
import { useState, React } from "react";
import { Button, PopoverBody, UncontrolledPopover } from "reactstrap";
import copy from "copy-to-clipboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const copyasMD = () => copy(input);

  return (
    <div className="App">
      <h1 className="py-2 bg-danger text-center text-light" id="title">
        Markdown Editor
      </h1>
      <div className="container d-flex mt-4">
        <textarea
          className="textarea col-6 p-4"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="d-flex mx-3" style={{ height: "80vh" }}>
          <div className="vr"></div>
        </div>

        <ReactMarkdown
          children={input}
          className="markdown col-6 text-align-start p-4"
        />
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Button
          color="danger"
          outline
          size="lg"
          onClick={copyasMD}
          id="PopoverLegacy"
          type="button"
        >
          Copy as markdown
        </Button>

        {/* Popover message after copying the message */}

        <UncontrolledPopover
          placement="right"
          target="PopoverLegacy"
          trigger="focus"
        >
          <PopoverBody>Copied to clipboard!</PopoverBody>
        </UncontrolledPopover>
      </div>
    </div>
  );
}

export default App;
