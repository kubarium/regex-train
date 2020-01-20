<template>
  <v-dialog v-model="dialog" width="40%">
    <template v-slot:activator="{ on }">
      <v-icon v-on="on">fas fa-info-circle</v-icon>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Instructions
      </v-card-title>
      <v-card-text class="py-3">
        <p>
          For all your regular expression needs, please peruse
          <a href="https://regexr.com/" target="_blank" rel="noopener noreferrer">RegExr</a>, an indispensable tool that
          I refer to almost every day multiple times.
        </p>
        <p>
          That being said, I sometimes need to chain my regular expressions so in each operation of replace, the output
          gets pasted back into input at RegExr. Of course, further down the chain, I realize I had forgotten something
          in one of the early replace operations. This creates a lot of frustration since I now have to open multiple
          tabs for each operation I want to run so I could have access to the history of the rules I applied.
        </p>
        <p>
          Let's look at an example. I want to get rid of the numbers at the end of each word and swap
          <strong>lazy</strong> and <strong>quick</strong> in the sentence. The suggested solution when you load this
          website is one way of doing it.
        </p>
        <p>
          To achieve the result you want, you may have to alter the order of the nodes. In some cases the order of the
          nodes won't make any difference but, sometimes, you've got to be careful since the order will prematurely
          modify your input.
        </p>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          CLOSE
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "instructions",
  data: () => ({
    dialog: false
  })
};
</script>

<style></style>
