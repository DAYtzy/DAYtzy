const data = [
 {name:"Attack on Titan", img:"https://wallpapercave.com/wp/wp1839578.jpg"},
 {name:"Demon Slayer", img:"https://wallpapercave.com/wp/wp5124550.jpg"},
 {name:"Jujutsu Kaisen", img:"https://wallpapercave.com/wp/wp6000152.jpg"},
 {name:"One Piece", img:"https://wallpapercave.com/wp/wp4056410.jpg"}
]

const app = document.getElementById("app")
app.className="grid"

data.forEach(a=>{
 app.innerHTML += `
  <div class="card">
   <img src="${a.img}">
   <div class="info">${a.name}</div>
  </div>
 `
})
