<template>
  <section column>
    <v-layout>
      <v-flex xs4>
        <img src="../assets/mascotte.svg" alt="mascotte recycle & partage" id="mascotte" height="500px" class="d-block mx-auto">
      </v-flex>
      <v-flex xs8>
        <h2 class="display-3 nunito ">Recycle & Partage</h2>
        <p class="w-space">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lectus metus, at posuere neque. Sed pharetra nibh eget orci convallis at posuere leo convallis. Sed blandit augue vitae augue scelerisque bibendum. Vivamus sit amet libero turpis, non venenatis urna. In blandit, odio convallis suscipit venenatis, ante ipsum cursus augue.
  Et mollis nunc diam eget sapien. Nulla facilisi. Etiam feugiat imperdiet rhoncus. Sed suscipit bibendum enim, sed volutpat tortor malesuada non. Morbi fringilla dui non purus porttitor mattis. Suspendisse quis vulputate risus. Phasellus erat velit, sagittis sed varius volutpat, placerat nec urna. Nam eu metus vitae dolor fringilla feugiat. Nulla.

  Facilisi. Etiam enim metus, luctus in adipiscing at, consectetur quis sapien. Duis imperdiet egestas ligula, quis hendrerit ipsum ullamcorper et. Phasellus id tristique orci. Proin consequat mi at felis scelerisque ullamcorper. Etiam tempus, felis vel eleifend porta, velit nunc mattis urna, at ullamcorper erat diam dignissim ante. Pellentesque justo risus.

  Rutrum ac semper a, faucibus nec lorem. Nullam eget quam tellus, eget sagittis justo.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ante enim, tincidunt ut interdum in, adipiscing quis tortor. Nulla turpis lacus, rutrum in adipiscing ut, porttitor ac ante. Sed euismod, mauris a.

  Lobortis laoreet, neque nunc suscipit orci, id ultrices nulla enim ac orci. Proin a erat at mi ornare interdum. Donec sagittis, felis at rutrum egestas, orci risus laoreet diam, quis pulvinar sapien neque id mauris. Suspendisse potenti. Pellentesque eget ligula ut lacus porttitor pharetra et a mauris. Cras varius gravida.
        </p>
      </v-flex>
    </v-layout>
    <div class="mt-4">
      <h2 class="display-1 nunito txtCenter">Besoin de nous contacter ?</h2>
      <p class="txtCenter title fw-300 mt-4">Remplissez le formulaire ci-dessous et nous vous contacterons dès que possible !</p>
      <div>
        <v-text-field append-icon="person" color="red darken-1" label="Nom / Prénom"></v-text-field>
        <v-text-field append-icon="mail_outline" color="red darken-1" label="Email" type="email"></v-text-field>
        <v-text-field append-icon="link" color="red darken-1" label="Sujet"></v-text-field>
        <v-text-field color="red darken-1" multi-line label="Votre message"></v-text-field>
      </div>
      <v-btn dark color="red darken-1 mx-auto d-block"><v-icon small>send</v-icon> Envoyer</v-btn>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
