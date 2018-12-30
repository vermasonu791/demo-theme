<template>
 <div class="home">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panel >
        <v-expansion-panel-content v-for="(project ,index) in projects" :key="index">
          <div slot="header">{{project.title}}
            
          </div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{project.due}}</div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>

  export default {
   name:'project',

 data:function() {
   return{
    firstName: 'Foo',
    lastName: 'Bar',
     projects: [
        {
          title: "Design a new website",
          person: "sonu",
          due: "01/01/2019",
          status: "ongoing",
          content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, obcaecati quis! Commodi, laborum. Dolor distinctio mollitia exercitationem animi reiciendis asperiores nulla, tempore aliquam cum veritatis est. Quo cupiditate fugit voluptatibus.'
        },
        {
          title: "Portfolio",
          person: "Anas",
          due: "01/01/2019",
          status: "complete",
          content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, obcaecati quis! Commodi, laborum. Dolor distinctio mollitia exercitationem animi reiciendis asperiores nulla, tempore aliquam cum veritatis est. Quo cupiditate fugit voluptatibus.'

        },
        {
          title: "Contact management",
          person: "Shubham",
          due: "01/01/2019",
          status: "overdue",
          content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, obcaecati quis! Commodi, laborum. Dolor distinctio mollitia exercitationem animi reiciendis asperiores nulla, tempore aliquam cum veritatis est. Quo cupiditate fugit voluptatibus.'

        },
        {
          title: "Create community form",
          person: "Rahman",
          due: "01/01/2019",
          status: "complete",
          content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, obcaecati quis! Commodi, laborum. Dolor distinctio mollitia exercitationem animi reiciendis asperiores nulla, tempore aliquam cum veritatis est. Quo cupiditate fugit voluptatibus.'

        }
      ]
   }
  },
  computed: {
    fullName: function () {
      console.log(this.firstName + ' ' + this.lastName);
      return this.firstName + ' ' + this.lastName
    }
  },
  created(){
    console.log(this.firstName="sonu");
  },
  mounted(){
    console.log(this.firstName="verma");
    console.log(this.lastName="sonu");
  }
  }
</script>
