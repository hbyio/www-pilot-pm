<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" :width="width" :height="height">
        <title>folder 15</title>
        <g :fill="color">
            <path :fill="color" d="M31,5H15.5l-2.7-3.6C12.6,1.1,12.3,1,12,1H1C0.4,1,0,1.4,0,2v28c0,0.6,0.4,1,1,1h30c0.6,0,1-0.4,1-1V6 C32,5.4,31.6,5,31,5z"></path>
        </g>
    </svg>
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

