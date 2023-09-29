import Reveal from "reveal.js@4.6.1";
import Markdown from "reveal.js@4.6.1/plugin/markdown/markdown.esm.js";
import Mermaid from 'reveal.js-mermaid-plugin@2.0.0/plugin/mermaid/mermaid.esm.js'
import Highlight from "reveal.js@4.6.1/plugin/highlight/highlight.esm.js";
import { createPlayground } from 'livecodes@0.2.0'






let deck = new Reveal({
  plugins: [Markdown, Highlight, Mermaid],
});

deck.initialize({
  // slideNumber: "c/t",
  transition: "fade",
  center: false,
  mermaid: {
    flowchart: {
      htmlLabels: false,
    },
  },
});

document.querySelector('.reveal').style.visibility = 'visible';

const liveCodesOptions = {
  appUrl: 'https://v14.livecodes.io',
}

createPlayground('#react-demo', {
  ...liveCodesOptions,
  template: 'react',
})

createPlayground('#ruby-demo', {
  ...liveCodesOptions,
  template: 'ruby',
})

createPlayground('#php-demo', {
  ...liveCodesOptions,
  template: 'php',
})

createPlayground('#modules-demo', {
  ...liveCodesOptions,
  params: {
    'js': `import { v4 } from "uuid";\n\ndocument.body.innerHTML += v4();`,
  }
})