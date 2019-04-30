<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" :width="width" :height="height"><title>treasure map 40</title><g :fill="color"><path :fill="color" d="M27,2H5C2.243,2,0,4.243,0,7v17.5v1C0,27.981,2.019,30,4.5,30H8v-7h16v7h3.5c2.481,0,4.5-2.019,4.5-4.5v-1V7 C32,4.243,29.757,2,27,2z M6,28H4.5C3.121,28,2,26.878,2,25.5S3.121,23,4.5,23H6V28z M10,14H6v-2h4V14z M16,14h-4v-2h4V14z M22,14.414l-3,3L17.586,16l3-3l-3-3L19,8.586l3,3l3-3L26.414,10l-3,3l3,3L25,17.414L22,14.414z M27.5,28H26v-5h1.5 c1.379,0,2.5,1.122,2.5,2.5S28.879,28,27.5,28z"></path></g></svg>
</template>
<script>
export default {
  props: {
    height: {
      type: Number
    },
    width: {
      type: Number
    },
    color: {
      type: String,
      default: "#fff"
    }
  }
};
</script>

