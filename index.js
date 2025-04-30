window.addEventListener('DOMContentLoaded', () => {
    const typing = document.querySelector('.typing');
    setTimeout(() => {
      typing.classList.add('finished');
    }, 2500); // Slightly longer than the typing animation
});

const socials = [
    { name: "GitHub", url: "https://github.com/gunter-ansinn" },
    { name: "X", url: "https://x.com/gunteransinn" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gunter-ansinn/" },
    { name: "Mail", url: "mailto:gunter@ansinn.net" },
]

const projects = [
    {name: "Portfolio", description: "The source code for this site.", tags: ["Completed"]},
    {name: "Grounds", description: "My own attempt at making a static site generator within java to enable automatic generation of blogs and wiki's for my project pages.", tags: ["WIP", "Experimental"]},
    {name: "Pixelatte", description: "A pure Java PNG decoder designed for performance and zero dependencies. Part of a larger graphics and game tooling suite.", tags: ["Current Project", "WIP"]},
]

const socialsContainer = document.getElementById("socials");
const projectsContainer = document.getElementById("projects");

socials.forEach(({ name, url }) => {
    const element = document.createElement("a");
    element.href = url;
    element.target = "_blank";
    element.innerHTML = `<img src="icons/${name.toLocaleLowerCase()}.png" alt="${name} logo">`;
    
    socialsContainer.appendChild(element);
})

projects.forEach(({name, description, tags}) => {
    const projectElement = document.createElement("div");

    projectElement.className = "project";
    projectElement.innerHTML = `
        <div class="project-info">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="project-status">
            ${processTags(tags)}
          </div>
        </div>
        <div class="project-embed">
          <a href="https://github.com/gunter-ansinn/${name}" target="_blank">
            <img src="https://opengraph.githubassets.com/1/gunter-ansinn/${name}" alt="${name} GitHub card">
          </a>
        </div>
    `;

    // Prepend because i already have some starter elements
    projectsContainer.prepend(projectElement);
})

// Just to be on the safe side
function processTags(tags) {
    return tags.map(tag => `<span class="status-tag ${tag}">${tag}</span>`).join('');
}

console.log("Hey, you read this! This is where a company would embed \"Please join us!\"");