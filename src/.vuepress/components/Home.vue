<template>
  <div id="home">
    <component v-if="dynamic1" :is="dynamic1" :autoplay="true" :autoplayHoverPause="false" :loop="true" :paginationEnabled="false" paginationPosition="bottom-overlay" :perPage="1" paginationColor="#000000">
      <component v-if="dynamic2" :is="dynamic2" v-for="img in images">
        <div :style="styleMethod(img)" class="image-fullpage"/>
      </component>
    </component>
  </div>
</template>

<script>
// import { getUrl1 } from '../spider';
export default {
  name: 'Home',
  data() {
    return {
      dynamic1: null,
      dynamic2: null,
      imageStyle: null,
    }
  },
  computed: {
    images() {
      return this.$themeConfig.images;
    },
    homeStyle() {
      return {
        width: window.screen.availWidth + 'px',
        height: window.screen.availHeight + 'px'
      }
    }
  },
  mounted: function() {
    import('vue-carousel').then(module => {
      this.dynamic1 = module.Carousel;
      this.dynamic2 = module.Slide;
    });
    // const home = document.getElementById('home');
    this.imageStyle = {
      width: window.screen.availWidth + 'px',
      height: window.screen.availHeight + 'px'
    };
  },
  methods: {
    styleMethod(img) {
      return {
        ...this.imageStyle,
        backgroundImage: 'url(' + img + ')'
      }
    }
  }
}
</script>

<style scoped>
.image-fullpage {
  z-index:-10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</style>