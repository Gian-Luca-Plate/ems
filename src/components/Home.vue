<template>
  <div>
    <div style="display: flex; justify-content: center; margin-top: 10rem;">
      <img src="../assets/google.png" alt="" style="width: 300px;">
    </div>
    <br>
    <div style="display: flex; justify-content: center;">
      <input type="text" v-model="x" @keydown.enter="suchen()" style="width: 300px; height: 30px; border-radius: 50px; text-align: center;">
    </div>
    <br>
    <div style="display: flex; justify-content: center;">
    <button style="width: 150px; height: 40px; text-align: center; font-weight: bolder; color: black;" @click="suchen()">mit Google Suchen</button>
  </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    x: ''
  }
},
methods: {
  suchen(){
    if(this.x === 'Wer ist die beste Freundin der Welt'){
      this.$router.push('/er')
    }
    if(this.x === 'hallo'){
      alert('ich will sex ')
    }
  }
},
}
</script>