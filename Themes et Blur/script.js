const themes = [    
  {name:"light", message:"Light Theme activated"},
  {name:"dark", message:"Dark Theme activated"},
  {name:"ocean", message:"Ocean Theme activated"},
  {name:"nature", message:"Nature Theme activated"}
];

const themeDropdown = document.getElementById("theme-dropdown");

const themeSwitcherButton = document.getElementById("theme-switcher-button");

themeSwitcherButton.addEventListener("click", () => {
  if (themeDropdown.hidden) {
    themeDropdown.hidden = false;
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  }
  else {
    themeDropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});

/* Attention Blur est activé avant même que le choix du menu ne soit enregistré */
/*
themeSwitcherButton.addEventListener("blur", () => {
  themeDropdown.hidden = true;
  themeSwitcherButton.setAttribute("aria-expanded", "false");
});
*/
/* Meilleure approche */
document.addEventListener("click", (e) => {
  if (!themeSwitcherButton.contains(e.target) && !themeDropdown.contains(e.target)) {
    themeDropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});

const statusP = document.getElementById("status");

const menuItem = document.querySelectorAll("[role='menuitem']");

menuItem.forEach( (item) => item.addEventListener("click", () => {
  const themeName = item.textContent.trim();
  document.body.setAttribute("class", item.id);
  const selectedTheme = themes.find(t => t.name === themeName);
  if (selectedTheme) {
    statusP.textContent = selectedTheme.message;
  }
}));


