const github = "https://github.com/nikto-de"
const facebook = "https://www.facebook.com/profile.php?id=61567765706313"
const twitter = "https://x.com/nikto_de"
const instagram = "https://instagram.com/nikto__de"
const pinterest = "https://pinterest.com/nikto_de"
const sosial_link = [{ 0: github }, { 1: facebook }, { 2: twitter }, { 3: instagram }, { 4: pinterest }]
const icon = document.querySelectorAll(".icon")
icon.forEach(icon => {
  icon.addEventListener("click", () => {
    link = `${icon.id}`
    window.location.href = sosial_link[icon.id][icon.id]
  })
})
