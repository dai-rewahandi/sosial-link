const github = "https://github.com/dai-rewahandi";
const facebook = "https://www.facebook.com/dai.rewahandi";
const twitter = "https://x.com/dai_rewahandi";
const instagram = "https://instagram.com/dai.rewahandi";
const pinterest = "https://pinterest.com/dai_rewahandi";
const sosial_link = [
  { 0: github },
  { 1: facebook },
  { 2: twitter },
  { 3: instagram },
  { 4: pinterest },
];
const icon = document.querySelectorAll(".icon");
icon.forEach((icon) => {
  icon.addEventListener("click", () => {
    link = `${icon.id}`;
    window.location.href = sosial_link[icon.id][icon.id];
  });
});
