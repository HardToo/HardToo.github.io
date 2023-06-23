var audio = new Audio()

var randomMusic = [
  {
    "judul":"Paradise (Waduh) 😁",
    "music":"https://music.hardtoo.repl.co/waduh.mp3"
  },
  {
    "judul":"Ballin' (Mustard) 🤨",
    "music":"https://music.hardtoo.repl.co/ballin.mp3"
  },
  {
    "judul":"Ballin' (Pak Jokowi) 😱",
    "music":"https://music.hardtoo.repl.co/pakde.mp3"
  }
]

var Music = randomMusic[Math.floor(Math.random()*randomMusic.length)];
audio.setAttribute("src", Music.music);
audio.load()

function Play(){
  audio.play()
//console.log(audio.load())

const Toast = Swal.mixin({
  toast: true,
  position: 'top-bottom',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Memutar Music \n' + Music.judul
})
}

Play()