<template>
  <div class="star" :class="`star-${size}`">
    <p class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></p>
    {{ score }}
  </div>
</template>

<script>
export default {
  name: 'Star',
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClasses() {
      const scs = []
      //向scs中添加'on'，'half'，'off'
      //3.2  3 + 0 + 2
      //3.5  3 + 1 + 1
      const scoreInt = Math.floor(this.score)
      for (let i = 0; i < scoreInt; i++) {
        scs.push('on')
      }
      if (this.score * 10 - scoreInt * 10 >= 5) {
        scs.push('half')
      }
      while (scs.length < 5) {
        scs.push('off')
      }
      return scs
    }
  }
}
</script>

<style scoped lang="scss">
.star {
  display: flex;
  color: $orgin;
}
.star-48 {
  .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
    &.on {
      background-image: url('./img/star48_on@2x.png');
    }
    &.half {
      background-image: url('./img/star48_half@2x.png');
    }
    &.off {
      background-image: url('./img/star48_off@2x.png');
    }
  }
}
.star-36 {
  .star-item {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
    &.on {
      background-image: url('./img/star36_on@2x.png');
    }
    &.half {
      background-image: url('./img/star36_half@2x.png');
    }
    &.off {
      background-image: url('./img/star36_off@2x.png');
    }
  }
}
.star-24 {
  .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
    &.on {
      background-image: url('./img/star24_on@2x.png');
    }
    &.half {
      background-image: url('./img/star24_half@2x.png');
    }
    &.off {
      background-image: url('./img/star24_off@2x.png');
    }
  }
}
</style>
