<template>
  <div id="home" :style="{ backgroundImage: currentImageUrl}">
    <h1>Ctum 的 Blog</h1>
    <div class="link">
      <a href="/blog">博客</a>
      <a href="/archive">归档</a>
      <a href="/about">关于</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      index: 0,
      currentImageUrl: '',
      timer: 0,
    }
  },
  computed: {
    images() {
      return this.$themeConfig.images;
    },
  },
  mounted: function() {
    this.currentImageUrl = 'url(' + this.images[this.index] + ')';
    this.timer = setInterval(() => {
      const imgLength = this.images.length;
      this.index = (this.index + 1) % imgLength;
      this.currentImageUrl = 'url(' + this.images[this.index] + ')';
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
#home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#home > h1 {
  color: white;
  font-size: 56px;
}
#home a {
  margin: 0 24px;
  font-size: 28px;
}
</style>