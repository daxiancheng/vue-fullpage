<template>
    <div id="page">
        <pre id="page1"></pre>
    </div>
</template>

<script>
export default {
    props:['state'],
    data(){
        return {
            textcontent:[`BetaAppHost{
return "fir.im"
}`]
        }
    },
    methods:{
        getcontent(){
            let n=0
           let text = setInterval(() => {
               n++;
               page1.textContent = this.textcontent[0].substring(0,n)
               if(n>this.textcontent[0].length){
                   clearInterval(text)
               }
           }, 100);
        }
    },
    mounted(){
        
    },
    watch:{
        state(newvalue){
        if(newvalue ==='enter'){
            this.getcontent()
        }else if(newvalue ==='leave'){
           
            setTimeout(()=>{
                 page1.textContent = ''
            },1000)
        }
    }
    }
}
</script>

<style scoped>
  #page{
      padding: 10px;
      position: fixed;
      left: 30px;
      bottom: 30px;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.5em;
    
  }
  #page1{
        margin: 0;
  }
</style>