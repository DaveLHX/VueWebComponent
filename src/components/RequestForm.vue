<template>
<section>
   <h1> {{activity.name}}</h1>
    <v-chip>
          
           
              <v-avatar class="blue"> {{activity.nbMaleCadets}}</v-avatar>
              Male
          </v-chip>
     <v-chip>        
          
               <v-avatar class="pink">{{activity.nbFemaleCadets}}</v-avatar>
                 Female
          </v-chip>
  <v-tabs
      v-model="active"
      color="blue"
      dark
      slider-color="lime"
    >
      <v-tab  ripple :key='1' >
       Activity       
        <v-icon
        medium
        color="white">
        directions_run
      </v-icon>
      </v-tab>
       <v-tab  ripple :key='2'>
       Rations
      <v-icon
        medium
        color="white">
        fastfood
      </v-icon>
      </v-tab>
       <v-tab  ripple :key='3' >
       Transport
         <v-icon
        medium
        color="white"
      >
         directions_bus
      </v-icon>
      </v-tab>
      <v-tab-item :key="1"  >
        <v-card flat>
            <activity :activityItem="activity"></activity>
        </v-card>
        </v-tab-item>
          <v-tab-item :key="2"  >
        <v-card flat>
            <rations></rations>
        </v-card>
        </v-tab-item>
         <v-tab-item :key="3"  >
        <v-card flat>
            <transport></transport>
        </v-card>
      </v-tab-item>
    </v-tabs>
     <v-btn color="success">Success</v-btn>
</section>
</template>
<script>
import Activity from "@/components/Activity";
import Rations from "@/components/Rations";
import Transport from "@/components/Transport";

export default {
  components: { Activity, Rations, Transport },
  data() {
    return {
      activity: {
        id: 1,
        name: "Survie",
        description: "This is the description",
        startDate: "2018-02-04",
        nbMaleCadets: 10,
        nbFemaleCadets: 4,
        location: "239 Activity Drive, Laval, QC"
      },
      rations: { required: null }
    };
  }
};
</script>
