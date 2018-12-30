<template>
  <div class="Project">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-3">
      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-capitalize">By Project name</span>
          </v-btn>
          <span>Sort By Project Name</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-capitalize">By Person name</span>
          </v-btn>
          <span>Sort By Name</span>
        </v-tooltip>
      </v-layout>
      <v-card flat id="hello" v-for="(project,index) in projects" :key="index">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex md6 xs6 sm3>
            <div class="caption grey--text">Project</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 md2 sm3>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex md2 xs6 sm3>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex md2 xs6 sm3>
            <div class="right">
              <v-chip :class="`caption flat ${project.status}`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "sonu",
          due: "01/01/2019",
          status: "ongoing"
        },
        {
          title: "Portfolio",
          person: "Anas",
          due: "01/01/2019",
          status: "complete"
        },
        {
          title: "Contact management",
          person: "Shubham",
          due: "01/01/2019",
          status: "overdue"
        },
        {
          title: "Create community form",
          person: "Rahman",
          due: "01/01/2019",
          status: "complete"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => {
        console.log(a[prop] + " " + b[prop]);
        console.log(a[prop] < b[prop]);
        return a[prop] < b[prop] ? -1 : 1;
      });
    }
  }
};
</script>
<style scoped>
#hello {
  background-color: #ffffff;
}
.project.complete {
  border-left: 4px solid lightgreen;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.project.ongoing {
  border-left: 4px solid yellow;
}
.v-chip.complete {
  background-color: #3cd1c2;
  color: #ffffff;
}
.v-chip.ongoing {
  background-color: #ffaa2c;
  color: #ffffff;
}
.v-chip.overdue {
  background-color: #f83e70;
  color: #ffffff;
}
</style>
