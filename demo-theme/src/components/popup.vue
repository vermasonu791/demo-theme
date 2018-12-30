<template>
  <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition">
    <v-btn flat slot="activator" class="warning caption"  @click="dialog = !dialog2">Add new project</v-btn>
    <v-card>
      <v-card-title primary-title>
        <h5 block>Add a new Project</h5>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field name="title" label="Title" id="id" v-model="title" prepend-icon="folder" :rules="inputrules"></v-text-field>
          <v-textarea
            name="information"
            v-model="information"
            label="About the project"
            prepend-icon="edit"
            :rules="inputtext"
          ></v-textarea>
          <v-btn flat class="primary mt-3 sm6 xs6 md6" small @click="submit">Add project</v-btn>
          <v-btn class="primary mt-3 sm6 xs6 md6" small @click="dialog = false">
              <v-icon small left>close</v-icon> close
            </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      information: "",
      dialog:false,
      inputrules:[
          v => v.length > 3 || 'minimum length is 3 character reuired'
      ],
      inputtext:[
          v => v.length > 100 || 'minimum length is 100 character reuired'
      ]
    };
  },
  methods:{
      submit(){
          console.log(this.title+' '+ this.information);
      }
  }
};
</script>
