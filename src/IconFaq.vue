<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" :width="width" :height="height">
        <title>c question</title>
        <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" :fill="color" :stroke="color">
            <circle cx="16" cy="16" r="15" fill="none" :stroke="color" stroke-miterlimit="10"></circle> 
            <circle cx="16" cy="24.5" r="1.5" stroke="none"></circle> 
            <path d="M12.908,7.79C15.7,6.555,19.32,6.7,20.555,8.7s.382,4.324-1.735,6.118S16,17.588,16,19" fill="none" stroke-miterlimit="10"></path>
        </g>
    </svg>
</template>

<script>
export default {
    name:"IconFaq",
    props:{
        height:{
            type: Number,
            default:40
        },
        width:{
            type: Number,
            default:40
        },
        color: {
            type: String,
            default: "#000"
        }
    }
}
</script>

