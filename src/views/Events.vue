<template>
  <v-sheet class="mb-md-16 mb-6">
    <v-sheet
      align="center"
      class="bg-pink"
    >
      <div class="inward pt-16">
        <v-row justify="center">
          <v-col cols=8>
            <v-img src="@/assets/vector-9.svg" />
          </v-col>
        </v-row>
        <div class="pt-12 t-h1 bold mb-auto txt-red" justify="center">EVENTS</div>
      </div>
    </v-sheet>
    <svg style="display:block;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5a73" fill-opacity="1" d="M0,320L48,293.3C96,267,192,213,288,208C384,203,480,245,576,229.3C672,213,768,139,864,101.3C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div class="inward">
      <v-row
        align="center"
        v-for="(event, index) in events"
        :key="index"
      >
        <ImageText :info="event" :index="index" />
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import ImageText from '@/components/ImageText.vue';

export default {
  data: () => ({
    reveal: [false, false, false, false],
    events: [
      {
        imageID: 10,
        title: "Homework Guidance",
        description: `Our flagship event is the Homework Guidance, weekly, one-to-one sessions intended to assist our beneficiaries in school work and revision, as well as forge interactive and meaningful relationships between tutor and beneficiary. With the easing of SMM measures, we have shifted to a physical setting for Homework Guidance, held in classrooms in Vibrance@Yishun, allowing for more interaction and deepening connections between participants and volunteers.`,
        details: "We have held 10 online and 6 physical Homework Guidance sessions. Additionally, we prepare post-consultation educational activities ranging from Kahoot quizzes to documentaries to crossword puzzles, providing an engaging holistic learning experience."
      },
      {
        imageID: 11,
        title: "Collaborations with CCAs",
        description: "A plethora of workshops aimed at allowing beneficiaries to explore and experience new CCAs possibly not accessible to them at the moment, as well as learning new skills for an all-rounded, holistic education. Our collaborations include Hwa Chong Debates, Hwa Chong St. John Ambulance Brigades, Hwa Chong Infocomm and Robotics Society, and Hwa Chong MediaTech.",
        details: "Public speaking tips, practical first-aid skills, computational thinking, and photography techniques are some of the holistic development opportunities provided through our workshops."
      },
      {
        imageID: 12,
        title: "Outreach and Publicity",
        description: "Our Instagram page serves as a platform to introduce and spread awareness of our project, as well as dispel misconceptions about our beneficiaries, through posts about our Areas of Concern, Underlying Problem, and 'Did You Knows'. Outreach events such as the in-school Service Learning Festival and Racial Harmony Day Bazaar have also allowed us to reach out to more in our community, shedding light on this issue and our project.",
        details: ""
      },
      {
        imageID: 13,
        title: "Learning Journey",
        description: "Our learning journey was an educational tour in the S.E.A Aquarium, where the beneficiaries were introduced to marine life and its unique adaptations, with the aim of giving the beneficiaries a fun hands-on experience.",
        details: "On the bus trips, activities such as icebreakers, quizzes, and comedy skits were prepared. Snacks were also provided throughout the journey and also acted as prizes for the bus activities. A reflection booklet and side quests was prepared for them to engage themselves during their free time."
      },
    ],
  }),
  components: {
    ImageText
  },
};
</script>
