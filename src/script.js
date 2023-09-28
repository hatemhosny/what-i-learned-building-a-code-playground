import Reveal from "reveal.js@4.6.1";
import Markdown from "reveal.js@4.6.1/plugin/markdown/markdown.esm.js";
import Mermaid from 'reveal.js-mermaid-plugin@2.0.0/plugin/mermaid/mermaid.esm.js'
import Highlight from "reveal.js@4.6.1/plugin/highlight/highlight.esm.js";
import { createPlayground } from 'livecodes@0.2.0'

import "reveal.js@4.6.1/dist/reveal.css";
import "reveal.js@4.6.1/dist/theme/white.css";
import "reveal.js@4.6.1/plugin/highlight/monokai.css";


let deck = new Reveal({
  plugins: [Markdown, Highlight, Mermaid],
});

deck.initialize({
  slideNumber: "c/t",
  transition: "fade",
  mermaid: {
    flowchart: {
      htmlLabels: false,
    },
  },
});

document.querySelector('.reveal').style.visibility = 'visible';

const liveCodesOptions = {
  appUrl: 'https://v14.livecodes.io',
  loading: 'eager',
}

// createPlayground('#pyodide-demo', {
//   ...liveCodesOptions,
//   template: 'pyodide',
// })

createPlayground('#modules-demo', {
  ...liveCodesOptions,
  params: {
    'js': `import { v4 } from "uuid";\n\ndocument.body.innerHTML += v4();`,
  }
})