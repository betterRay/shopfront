<template>
  <div class="spec-preview" @mousemove="enlarge($event)" ref="outer">
    <img :src="imageListItem.imgUrl" />
    <div class="event"></div>
    <div class="big">
      <img :src="imageListItem.imgUrl" ref="image"/>
    </div>
    <div class="mask" ref="scope"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    data() {
      return {
        imgIndex:0
      }
    },
    mounted() {
      this.$bus.$on('receiveIndex',this.showImage)
    },
    props:['skuImageList'],
    methods: {
      showImage(index){
        this.imgIndex=index
      },
      enlarge(event){
        this.$refs.scope.style.left=event.offsetX-this.$refs.scope.offsetWidth/2+'px'
        this.$refs.scope.style.top=event.offsetY-this.$refs.scope.offsetHeight/2+'px'
        this.$refs.image.style.left=2*(this.$refs.scope.offsetWidth/2-event.offsetX)+'px'
        this.$refs.image.style.top=2*(this.$refs.scope.offsetHeight/2-event.offsetY)+'px'
        if(event.offsetX-this.$refs.scope.offsetWidth/2<0){
          this.$refs.scope.style.left=0+'px'
        }else if(event.offsetX-this.$refs.scope.offsetWidth/2>this.$refs.outer.offsetWidth-this.$refs.scope.offsetWidth){
          this.$refs.scope.style.left=this.$refs.outer.offsetWidth-this.$refs.scope.offsetWidth+'px'
        }
        if(event.offsetY-this.$refs.scope.offsetHeight/2<0){
          this.$refs.scope.style.top=0+'px'
        }else if(event.offsetY-this.$refs.scope.offsetHeight/2>this.$refs.outer.offsetHeight-this.$refs.scope.offsetHeight){
          this.$refs.scope.style.top=this.$refs.outer.offsetHeight-this.$refs.scope.offsetHeight+'px'
        }
      }
    },
    computed: {
      imageListItem(){
        return this.skuImageList[this.imgIndex] || {}
        }
    },
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>