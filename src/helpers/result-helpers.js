import path from 'path'

const buildLinks = (fiddle) => {
  return fiddle.links.map(link => path.extname(link) === '.js' 
    ? `<script src="${link}"></script>`
    : `<link rel="stylesheet" href="${link}" />`).join('\n');
}

export const constructHTML = (fiddle) => {
  return `
    <html>
      <head>
        ${buildLinks(fiddle)}
        <style>
          ${fiddle.cssCode}
        </style>
      </head>
      <body>
        ${fiddle.htmlCode}
        <script type="${fiddle.jsType || 'text/javascript'}">
          ${fiddle.javascriptCode}
        </script>
        ${buildLinks(fiddle)}
      </body>
    </html>
  `;
}