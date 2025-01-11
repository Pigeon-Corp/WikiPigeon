const articles = {
  "pigeon-history": {
    title: "A Brief History of Pigeons",
    content: "Pigeons have a long and fascinating history intertwined with human civilization. Their domestication dates back thousands of years, making them one of the oldest domesticated birds.   

Early Domestication and Uses:

Ancient Origins: Evidence suggests that pigeons were first domesticated in the Middle East, likely around 10,000 years ago.   
Food Source: Initially, pigeons were primarily kept as a source of food.   
Religious Significance: In ancient Egypt, pigeons were revered as sacred animals and often depicted in hieroglyphics.   
Pigeons as Messengers:

Ancient Use: The earliest recorded use of pigeons as messengers dates back to ancient Mesopotamia.
Military and Civil Use: Throughout history, pigeons played a crucial role in communication, particularly during times of war. They were used to transmit messages quickly and reliably over long distances.   
World Wars: Pigeons were extensively used during both World Wars to deliver vital messages across enemy lines.   
Other Roles:

Racing: Pigeon racing became a popular sport in the 19th century, with breeders selecting birds for their speed and endurance.   
Research: Pigeons have been used extensively in scientific research, particularly in studies of homing behavior, navigation, and genetics.   
Modern Times:

Urban Adaptations: Pigeons have successfully adapted to urban environments, thriving in cities around the world.   
Conservation Concerns: While adaptable, urban pigeons face challenges such as habitat loss, pollution, and disease.   
Conclusion:

From ancient times to the modern era, pigeons have played a significant role in human history. Their remarkable homing abilities, adaptability, and cultural significance continue to fascinate us today." 
  },
  "pigeon-flight": {
    title: "The Wonders of Pigeon Flight",
    content: "Pigeon flight is a marvel of avian engineering, a testament to the power of evolution. These seemingly ordinary birds are capable of feats of aerial navigation that continue to fascinate scientists and inspire awe in observers.   

Aerodynamic Mastery:

Lightweight and Powerful: Pigeons possess a unique skeletal structure, with many bones being hollow, making them remarkably lightweight for their size. This, combined with powerful flight muscles, allows them to achieve impressive speeds and maneuverability.   
Wing Design: Pigeon wings are aerodynamically sophisticated, featuring a complex system of feathers that generate lift and thrust. They can adjust the shape of their wings to optimize flight for different conditions, from soaring high in the sky to navigating through tight spaces.   
Navigational Prowess:

Homing Instinct: Perhaps the most remarkable aspect of pigeon flight is their extraordinary homing ability. Pigeons can navigate vast distances, returning to their lofts with uncanny accuracy.   
Sensory Cues: Scientists believe pigeons utilize a combination of sensory cues for navigation, including:
Visual landmarks: Recognizing familiar landmarks along their flight path.   
Magnetoreception: Detecting the Earth's magnetic field to orient themselves.   
Sun compass: Using the position of the sun to determine direction.
Olfactory cues: Detecting familiar scents associated with their home.   
Avian Acrobatics:

Agile Maneuvers: Pigeons are incredibly agile flyers, capable of performing intricate aerial maneuvers such as rapid turns, dives, and loops.
Soaring and Gliding: Pigeons are also skilled at soaring and gliding, utilizing thermal updrafts to gain altitude and conserve energy.
Observing Pigeon Flight:

Watching pigeons fly is a truly rewarding experience. Observe their graceful movements, their effortless turns, and their uncanny ability to navigate the urban landscape. It's a reminder of the incredible feats of which the natural world is capable" 
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
