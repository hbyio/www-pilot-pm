<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" :width="width" :height="height"><title>background</title><g :fill="color"><polygon :fill="color" points="12.54688,18 19.09375,18 15.8493,8.15485 "></polygon> <path fill="color" d="M31,0H1C0.44727,0,0,0.44775,0,1v30c0,0.55225,0.44727,1,1,1h30c0.55273,0,1-0.44775,1-1V1 C32,0.44775,31.55273,0,31,0z M25.6272,26h-6.73907v-1.49133l2.26514-0.24854l-1.45502-4.25983h-7.7796l-1.4295,4.25983 l2.2381,0.24854V26H6.3728v-1.46436l1.18768-0.30365c0.44312-0.11023,0.58032-0.19342,0.69055-0.52521L14.32874,6h3.20532 l6.18793,17.73492c0.11023,0.33173,0.33063,0.38684,0.66357,0.46893l1.24164,0.30481V26z"></path></g></svg>
</template>
<script>
export default {
    props:{
        height:{
            type: Number
        },
        width:{
            type: Number
        },
        color: {
            type: String,
            default: "#fff"
        }
    }
}
</script>

