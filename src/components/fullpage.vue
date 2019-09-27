<template>
  <div id="fullpage" @wheel="WheelEvent">
    <transition-group :name="downup" tag="div" mode="out-in"
    @enter="enter"
    @leave="leave"
    >
      <div v-for="(page,index) in pages" :style="{backgroundColor:page}" class="wh" :key="index+'page'"  v-show="showpage===index" @transitionend="end">
           <slot v-if="index===1" :state="state" name="ss"></slot>
           <slot v-if="index===2" :state="state" name="s2"></slot>
      </div>
    </transition-group>
   
  </div>
</template>

<script>
export default {
  name: "fullpage",
  data() {
    return {
      pages: ["#333", "#f00", "#0f0", "#00f"],
      decolor: "#666",
      showpage:0,
      downup:'down',
      isswiper:true,
      isnum:0,
      state:null
    };
  },
  methods:{
    WheelEvent(e){
      if(!this.isswiper) return
      this.isswiper = false
      if(e.deltaY>0){
         this.state = 'enter'
        if(this.showpage === this.pages.length-1){
          this.isswiper = true
          return
        }else{
          this.downup = 'down'
          this.showpage++;
        }
      }else if(e.deltaY<0){
         this.state = 'leave'
        if(this.showpage === 0){
           this.isswiper = true
          return
        }else{
          this.downup = 'up'
          this.showpage--;
        }
      }
    },
    end(){
      console.log('end')
      this.isnum++;
      if(this.isnum ===2){
        console.log(1)
        this.isswiper = true
        this.isnum= 0
      }
    },
    enter(el,done){
     
    },
    leave(el,done){
     
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fullpage {
  width: 100%;
  height: 100%;
}
.wh {
  position: absolute;
  width: 100%;
  height: 100%;
  
}
.down-enter-active{
  transform: translateY(0);
  transition: all 1s ease;
}
.down-leave-active{
  transform: translateY(-100%);
  transition: all 1s ease;
}
.down-enter{
  transform: translateY(100%);
}
.down-leave{
  transform: translateY(0);
}
.up-enter-active{
  transform: translateY(0);
  transition: all 1s ease;
}
.up-leave-active{
  transform: translateY(100%);
   transition: all 1s ease;
}
.up-enter{
  transform: translateY(-100%);
}
.up-leave{
  transform: translateY(0);
}
</style>
