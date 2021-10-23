<template>
  <div :class="{ [`h-${h}`]: true }" class="w-1/2 overflow-hidden">
    <div ref="carousel" class="w-full relative">
      <div class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <v-button circle type="primary" @click="prev"><</v-button>
      </div>
      <div class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <v-button circle no-animation type="primary" @click="next">></v-button>
      </div>
      <div
        :style="`transform:translateX(${translateX}px);transition:${index === 0 ? 'none' : 'all .3s'};`"
        class="w-full h-full flex flex-nowrap"
      >
        <img :src="photos" class="w-full h-full" />
        <img :src="photos1" class="w-full h-full" />
        <img :src="photos2" class="w-full h-full" />
        <img :src="photos" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCarousel',
  props: {
    h: {
      type: Number,
      default: 96,
    },
    delay: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      translateX: 0,
      index: 0,
      itemWidth: 0,
      timer: null,
      photos: 'https://picsum.photos/id/500/800/300',
      photos1: 'https://picsum.photos/id/501/800/300',
      photos2: 'https://picsum.photos/id/502/800/300',
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    async next() {
      if (this.index < 3) {
        this.index += 1
        this.createInterval()
      } else {
        this.index = 0
        await this.$nextTick()
        this.index = 1
        this.createInterval()
      }
      this.translateX = -this.itemWidth * this.index
    },
    async prev() {
      if (this.index <= 0) {
        this.index = 2
        this.createInterval()
      } else {
        this.index -= 1
        this.createInterval()
      }
      this.translateX = -this.itemWidth * this.index
    },
    createInterval() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
      this.timer = setInterval(this.next, this.delay)
    },
  },
  async mounted() {
    await this.$nextTick()
    /*TODO resize*/
    this.itemWidth = this.$refs.carousel.offsetWidth
    this.createInterval()
  },
}
</script>

