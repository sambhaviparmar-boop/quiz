const pianokeys = document.querySelectorAll(".piano-keys .key")




pianokeys.forEach(key ,i => {
    key.onclick = () => {
        alert("hi")
    }
     
})