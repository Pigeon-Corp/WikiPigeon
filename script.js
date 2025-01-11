const articles = {
  "pigeon-history": {
    title: "A Brief History of Pigeons",
    content: "Pigeons have a long and fascinating history..." 
  },
  "pigeon-flight": {
    title: "The Wonders of Pigeon Flight",
    content: "Pigeons are remarkable flyers..." 
  }
};

function loadArticle(articleId) {
  const article = articles[articleId];
  if (article) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.content}</p>
    `;
  } else {
    contentDiv.innerHTML = "<p>Article not found.</p>";
  }
}

// Load the "pigeon-history" article by default
loadArticle("pigeon-history"); 

// Example: Add basic navigation (replace with your preferred method)
const links = document.createElement('ul');
for (const id in articles) {
  const link = document.createElement('li');
  const linkText = document.createTextNode(articles[id].title);
  const linkElement = document.createElement('a');
  linkElement.href = "#"; 
  linkElement.appendChild(linkText);
  linkElement.addEventListener('click', () => loadArticle(id));
  link.appendChild(linkElement);
  links.appendChild(link);
}

document.body.insertBefore(links, document.getElementById('content'));
