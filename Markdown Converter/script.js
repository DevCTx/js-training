const markdown = document.getElementById("markdown-input");const rawHTML = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  const htmlMap = [
    { pattern : /^### (.+)$/gm,
      html : "<h3>$1</h3>"  },
    { pattern : /^## (.+)$/gm,
      html : "<h2>$1</h2>"  },
    { pattern : /^# (.+)$/gm,
      html : "<h1>$1</h1>"  },
    { pattern : /\*\*(.+?)\*\*/g,
      html : "<strong>$1</strong>"},
    { pattern : /__(.+?)__/g,
      html : "<strong>$1</strong>"  },
    { pattern : /\*(.+?)\*/g,
      html : "<em>$1</em>"},
    { pattern : /_(.+?)_/g,
      html : "<em>$1</em>"  },
    { pattern : /!\[(.+?)\]\((.+?)\)/g,
      html : "<img alt='$1' src='$2' />"  },
    { pattern :  /\[(.+?)\]\((.+?)\)/g,
      html : "<a href='$2'>$1</a>"  },
    { pattern :  /^\> (.+)/gm,
      html : "<blockquote>$1</blockquote>"  },
  ]

  let htmlString = markdown.value;
  for (let i=0; i<htmlMap.length; i++) {
    htmlString = htmlString.replace(htmlMap[i].pattern,htmlMap[i].html);
  }
  return htmlString;
}

markdown.addEventListener("input", () => {
  rawHTML.textContent = convertMarkdown();
  preview.innerHTML = rawHTML.textContent;
})

