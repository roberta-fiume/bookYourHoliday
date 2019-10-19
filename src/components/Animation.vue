<template>
    <div>
        <div class="animations-wrapper">
            <img ref="animationSun" :src="images.sun" class="sun"/>
            <img ref="animationIsland" :src="images.island" class="island" />
        </div>
    </div>
</template>

<script>

import { TimelineLite } from 'gsap'

export default {
    data() {
        return {
           images: {
            sun: require('@/assets/img/sun.gif'),
            island: require('@/assets/img/island3.gif')
          }
        }
    },

    mounted() {
        const {animationSun} = this.$refs
        const timeline = new TimelineLite()
        timeline.to(animationSun, 2, { x: 200, rotation: 360 }) 

        const {animationIsland} = this.$refs
        const timeline2 = new TimelineLite()
        timeline2.to(animationIsland, 4, {x: 200, transition: 0 }) 
    }
}

</script>
<style>

    .animations-wrapper {
        display: flex;
        flex-direction: column;
    }

    .sun {
        width: 150px;
    }

    .island {
       width: 25%;
    }
  
</style>