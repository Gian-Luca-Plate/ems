<template>
  <div>
    <div style="display: flex; justify-content: center">
      <input
        type="text"
        v-model="x"
        @keydown.enter="suchen()"
        style="
          width: 300px;
          height: 30px;
          border-radius: 50px;
          text-align: center;
        "
      />
    </div>
    <br />
    <table>
      <tbody>
        <tr>
          <td>
            <img
              src="../assets/r.png"
              alt=""
              style="width: 200px; border-radius: 8px"
            />
            <div >Wikepedia.de</div>
          </td>
          <td>
            <br>
            <img
              src="../assets/t.png"
              alt=""
              style="width: 150px; border-radius: 8px"
            />
            <div>Pinterest.com</div>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="../assets/u.png"
              alt=""
              style="width: 200px; border-radius: 8px; height: 200px;"
            />
            <div >Fbi.gor</div>
          </td>
          <td>
            
            <img
              src="../assets/w.png"
              alt=""
              style="width: 150px; border-radius: 8px"
            />
            <div >rsplus.org.com</div>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="../assets/e.png"
              alt=""
              style="width: 200px; border-radius: 8px;"
            />
            <div style=" margin-bottom: 50px;">EpicGames.com</div>
          </td>
          <td>
            
            <img
              src="../assets/i.png"
              alt=""
              style="width: 150px; border-radius: 8px"
            />
            <div style="margin-bottom: 150px;">Pinterest.com</div>
          </td>
        </tr>
       
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: "Wer ist die beste Freundin der Welt ",
    };
  },
};
</script>

<style>
</style>  
    