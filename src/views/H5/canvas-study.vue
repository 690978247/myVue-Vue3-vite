<template>
  <div>
    <canvas id="canvas" width="600" height="300" @mouseover="handleMousemove" ></canvas>
    <div>tttttttttt{{testVal}}</div>
    <el-input v-model="testVal" />
  </div>
</template>

<script>
import { useLocalStorage } from '@vueuse/core'

export default {
  name: 'CanvasStudy',
  data () {
    return {
      ball: {
        x: 100,
        y: 100,
        vx: 5,
        vy: 2,
        radius: 25,
        color: 'blue'
      },
      raf: '',
      testVal: '',
    }
  },
  mounted () {
    // this.draw()
    this.testVal =  useLocalStorage('testVal', '1');
    console.log('aaaaaaaaaaaa', this.testVal)
  },
  methods: {
    draw () {
      let canvas = document.getElementById("canvas")
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fillStyle = 'blue'
      ctx.fill()
    },
    drawBall () {
      ctx.clearRect(0, 0, 600, 300)
      this.draw()
      this.ball.x += this.ball.vx
      this.ball.y += this.ball.vy
    },
    handleMousemove () {
      this.raf = window.requestAnimationFrame(this.drawBall);
    },
  }
}
</script>

<style lang="scss" scoped>
canvas {
   border: 1px solid black; 
}
</style>