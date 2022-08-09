<template>
  <v-sheet>
    <v-sheet
      align="center"
      class="bg-pink"
    >
      <div class="inward pt-16">
        <v-row class="mt-16">
          <v-col cols=12 md=6 :class='!$vuetify.breakpoint.mobile ? "pr-16" : "mb-16"'>
            <v-img :width='$vuetify.breakpoint.mobile ? "60%" : "100%"' src="@/assets/vector-2.svg" />
          </v-col>
          <v-col cols=12 md=6 :class='!$vuetify.breakpoint.mobile ? "pl-16" : ""' align="left">
            <div class="t-h2 bold mb-6 txt-red">ABOUT US</div>
            <div class="t-h3 medium txt-white text-justify">
              Project Affinity has a core team of 5 Secondary 4 students from Hwa Chong Institution, as well as an Organising Team, consisting 38 individuals from various secondary schools.
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5a73" fill-opacity="1" d="M0,320L48,293.3C96,267,192,213,288,181.3C384,149,480,139,576,149.3C672,160,768,192,864,197.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <v-sheet class="inward py-16">
      <v-row class="my-md-16 my-6">
        <v-col cols=12 sm=6 class="pr-sm-8 my-auto">
          <div class="t-h2 bold mb-md-16 mb-6 txt-red">OBJECTIVES</div>
          <div class="t-h3 medium text-justify">
            To present equal opportunities through academic and holistic activities, to enrich and improve the lives of disadvantaged children.
          </div>
        </v-col>
        <v-col cols=12 sm=6 class="pl-sm-8 my-auto">
          <v-img src="@/assets/photo-2.png" />
        </v-col>
      </v-row>
      <v-row class="my-md-16 my-6">
        <v-col cols=12 sm=6 class="pr-sm-8 my-auto" v-if="$vuetify.breakpoint.name !== 'xs'">
          <v-img src="@/assets/photo-3.jpg" />
        </v-col>
        <v-col cols=12 sm=6 class="pl-sm-8 my-auto">
          <div class="t-h2 bold mb-md-16 mb-6 txt-red">OUTCOMES</div>
          <div class="t-h3 medium text-justify">
            At the end of the project, we hope to enrich the beneficiaries' lives and give them the chance to be on a level playing as their peers. Through our programmes, we hope that these children receive the needed assistance, realise their fullest potential to perform to the best of their abilities.
          </div>
        </v-col>
      </v-row>
    </v-sheet>
    <svg style="position:absolute;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L60,133.3C120,171,240,245,360,256C480,267,600,213,720,197.3C840,181,960,203,1080,197.3C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <v-sheet class="bg-pink py-md-16 pb-6">
      <v-sheet class="inward bg-white mb-16 pa-md-16 pa-6" style="z-index:1;position:relative;" elevation=12>
        <div class="t-h2 bold txt-red">UNDERLYING PROBLEM</div>
        <div class="t-h3 medium mt-md-12 mt-6 text-justify">
          Given that children from lower-income families lack equal access to opportunities, suffer from low self esteem and adverse circumstances, how might we assist them in realising their potential by providing equal access to meaningful, academic and holistic experiences that will reorient their trajectory in life, while correcting the public's misconceptions about this issue?
        </div>
      </v-sheet>
      <v-sheet class="inward bg-pink">
        <div class="t-h2 bold txt-red pb-12">BRANDING</div>
        <v-img src="@/assets/photo-4.png" width="100%" />
        <div class="t-h2 txt-white medium pt-6 text-center">
          A similarity of characteristics suggesting a relationship; a natural liking for and understanding of someone or something.
        </div>
        <v-row class="pt-16" align="center">
          <v-col cols=12 md=6>
            <v-img src="@/assets/logo-white.png" />
          </v-col>
          <v-col cols=12 md=6>
            <div class="t-h2 bold txt-red text-center">Shows two bears, embracing one another</div>
            <div class="t-h3 medium txt-white pt-12 text-center">This symbolises affection, connectedness and support. Teddy bears are often seen as a sign of comfort for children.</div>
          </v-col>
        </v-row>
        <div class="t-h2 bold txt-red mt-16">CORE TEAM</div>
      </v-sheet>
    </v-sheet>
    <svg style="position:absolute;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5a73" fill-opacity="1" d="M0,288L60,277.3C120,267,240,245,360,240C480,235,600,245,720,213.3C840,181,960,107,1080,96C1200,85,1320,139,1380,165.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <v-sheet class="bg-red">
      <div class="inward">
        <v-img src="@/assets/photo-5.jpg" />
        <div class="py-16 bold">
          <div
            class="d-flex flex-row py-2"
            v-for="core in coreTeam"
            :key="core.name"
          >
            <div class="t-h3 mr-auto txt-white">{{ core.name }}</div>
            <div class="t-h3 txt-grey">{{ core.role }}</div>
          </div>
        </div>
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    coreTeam: [{
      name: 'DAVID NG TZE KIAT',
      role: 'LEADER',
    }, {
      name: 'AXEL LIM',
      role: 'PROGRAMMES I/C',
    }, {
      name: 'ETHAN POH',
      role: 'PROGRAMMES I/C',
    }, {
      name: 'YAW CHUR ZHE',
      role: 'LOGISTICS I/C',
    }, {
      name: 'AARON NG',
      role: 'PUBLICITY I/C',
    }],
  }),
};
</script>
