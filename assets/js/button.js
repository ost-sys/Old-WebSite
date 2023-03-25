const btns = document.querySelectorAll('button')

btns.forEach(el => {
    el.addEventListener('click', function(e) {
        const
            size = Math.max(this.offsetWidth, this.offsetHeight),
            x = e.offsetX - size / 2,
            y = e.offsetY - size / 2,
            wave = document.createElement('span')

        // Create a new wave
        wave.className = 'wave'
        wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
        this.appendChild(wave)

        // Remove element after animation ends
        setTimeout(() => wave.remove(), 500)
    })
})
