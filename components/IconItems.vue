<template>
   <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" :width="width" :height="height"><title>text</title><g :fill="color"><path :fill="color" d="M30,1H2C1.448,1,1,1.448,1,2v7h1.586c0.265,0,0.52-0.105,0.707-0.293L6,6h7v20l-2.707,2.293 C10.105,28.481,10,28.735,10,29v2h12v-2c0-0.265-0.105-0.519-0.293-0.707L19,26V6h7l1.703,2.555C27.889,8.833,28.201,9,28.535,9H31 V2C31,1.448,30.552,1,30,1z"></path></g></svg></template>
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

