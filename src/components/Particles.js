import React, { useEffect, useRef } from 'react'

const ParticleAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []

    // Asegúrate de que el tamaño del canvas coincide con el tamaño de su contenedor
    let ww = canvas.offsetWidth
    let wh = canvas.offsetHeight
    canvas.width = ww
    canvas.height = wh

    function Particle(x, y, c) {
      this.x = Math.random() * ww
      this.y = Math.random() * wh
      this.dest = { x: x, y: y }
      this.c = c
      this.r = Math.random() * 2 + 3
      this.vx = (Math.random() - 0.5) * 3
      this.vy = (Math.random() - 0.5) * 3
      this.accX = 0
      this.accY = 0
      this.friction = Math.random() * 0.05 + 0.94
    }

    Particle.prototype.render = function () {
      this.accX = (this.dest.x - this.x) / 1000
      this.accY = (this.dest.y - this.y) / 1000
      this.vx += this.accX
      this.vy += this.accY
      this.vx *= this.friction
      this.vy *= this.friction

      this.x += this.vx
      this.y += this.vy

      ctx.fillStyle = this.c
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false)
      ctx.fill()
    }

    const img = new Image()
    img.src = '/logo-particulas.png'
  
    img.onload = function () {
      ww = canvas.width = window.innerWidth
      wh = canvas.height = window.innerHeight

      ctx.clearRect(0, 0, ww, wh)

      let newWidth = Math.min(this.naturalWidth, ww) * 1
      let newHeight = Math.min(this.naturalHeight, wh) * 1

      let xOffset = (ww - newWidth) / 2
      let yOffset = (wh - newHeight) / 2

      ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight)
      const data = ctx.getImageData(0, 0, ww, wh).data

      particles = []

      for (let i = 0; i < ww; i += Math.round(ww / 150)) {
        for (let j = 0; j < wh; j += Math.round(wh / 150)) {
          if (data[(i + j * ww) * 4 + 3] > 150) {
            const c =
              'rgba(' +
              data[(i + j * ww) * 4] +
              ',' +
              data[(i + j * ww) * 4 + 1] +
              ',' +
              data[(i + j * ww) * 4 + 2] +
              ',' +
              data[(i + j * ww) * 4 + 3] +
              ')'
            particles.push(new Particle(i, j, c))
          }
        }
      }

      function render() {
        ctx.clearRect(0, 0, ww, wh)

        for (let i = 0; i < particles.length; i++) {
          particles[i].render()
        }

        requestAnimationFrame(render)
      }

      render()
    }
  }, [])

  return <div className="particle-container">
    <canvas ref={canvasRef} className="particle-canvas" />
  </div>
}

export default ParticleAnimation
