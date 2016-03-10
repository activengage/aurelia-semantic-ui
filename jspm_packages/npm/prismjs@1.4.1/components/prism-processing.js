/* */ 
(function(process) {
  Prism.languages.processing = Prism.languages.extend('clike', {
    'keyword': /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
    'operator': /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
  });
  Prism.languages.insertBefore('processing', 'number', {
    'constant': /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
    'type': {
      pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z][A-Za-z\d_]*)\b/,
      alias: 'variable'
    }
  });
  Prism.languages.processing['function'].pattern = /[a-z0-9_]+(?=\s*\()/i;
  Prism.languages.processing['class-name'].alias = 'variable';
})(require('process'));
