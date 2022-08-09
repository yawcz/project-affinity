<template>
  <v-sheet class="mb-md-16 mb-6">
    <v-sheet
      align="center"
      class="bg-pink"
    >
      <div class="inward pt-16">
        <v-row class="mt-16">
          <v-col cols=12 md=6 :class='!$vuetify.breakpoint.mobile ? "pr-16" : "mb-16"'>
            <v-img :width='$vuetify.breakpoint.mobile ? "60%" : "100%"' src="@/assets/vector-3.svg" />
          </v-col>
          <v-col cols=12 md=6 :class='!$vuetify.breakpoint.mobile ? "pl-16" : ""' align="left">
            <div class="t-h2 bold mb-6 txt-red">OUR BENEFICIARIES</div>
            <div class="t-h3 medium txt-white text-justify">
              Children aged 9 to 12 from lower-income families, with gross monthly household income not exceeding $4,000, or gross monthly per capita income not exceeding $1,200.
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
    <svg class="bg-cream" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5a73" fill-opacity="1" d="M0,320L48,293.3C96,267,192,213,288,181.3C384,149,480,139,576,149.3C672,160,768,192,864,197.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <v-sheet class="bg-cream mt-n2">
      <div class="inward">
        <v-img src="@/assets/vibrance.jpg" />
        <div class="pt-6 pt-md-16 t-h3 bold txt-red text-justify">
          The Vibrance @ Yishun Self-Help Groups Centre is a collaboration of
          the four Self-Help Groups: the Chinese Development Assistance Council (CDAC),
          The Eurasian Association, Singapore (EA), Singapore Indian Development
          Association (SINDA) and Yayasan MENDAKI (MENDAKI).
        </div>
        <div class="pt-6 pt-md-16 t-h4 medium text-justify">
          Besides providing a common space for the different races to bond and integrate,
          the SHGs Centre also organises programmes to serve all ethnic groups, such as
          educational programmes for students and talks and workshops for parents. Each
          SHG also conducts programmes specifically to meet the needs of their communities.
          In addition, the SHGs also provides a Programme Fee Subsidy (of up to 90%) to
          eligible students from low-income families to attend educational programmes
          conducted by the centre.
        </div>
      </div>
    </v-sheet>
    <svg style="display:block;" class="bg-cream" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5a73" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,208C384,235,480,245,576,234.7C672,224,768,192,864,176C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <v-sheet class="mt-n2 bg-pink">
      <v-sheet class="inward bg-pink">
        <div class="t-h2 bold txt-red py-md-12 py-6">AREAS OF CONCERN</div>
        <v-row
          align="center"
          v-for="(area, index) in areas"
          :key="index"
        >
          <ImageText :info="area" :index="index" />
        </v-row>
      </v-sheet>
    </v-sheet>
    <svg style="display:block;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5a73" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,122.7C384,96,480,64,576,64C672,64,768,96,864,101.3C960,107,1056,85,1152,85.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <v-sheet>
      <div class="inward">
        <div class="t-h2 bold txt-red py-12">STATISTICS</div>
        <v-row
          align="center"
          v-for="(stat, index) in stats"
          :key="index"
        >
          <ImageText :info="stat" :index="index" />
        </v-row>
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script>
import ImageText from '@/components/ImageText.vue';

export default {
  data: () => ({
    areas: [
      {
        imageID: 4,
        title: "Lack Of Education and Opportunities",
        description: "In Singapore, education is often touted as a key route for social mobility and a key factor to break out of the poverty cycle. It is well-documented that underprivileged families grapple with multiple challenges and disadvantages, with limited financial and social capital being the key issues."
      },
      {
        imageID: 5,
        description: "Studies emanating from successive waves of the Canadian National Longitudinal Survey of Children and Youth (NLSCY) have repeatedly shown that socioeconomic factors have a large, pervasive and persistent influence over school achievement (Ferguson et al., 2007). Phipps et al., 2007 examined income and child outcomes in children 4 to 15 years of age based on data from the NLSCY. In this study, higher incomes were consistently associated with better outcomes for children.",
        links: [{
          label: "The Impact Of Poverty On Educational Outcomes For Children",
          route: "https://academic.oup.com/pch/article/12/8/701/2648025"
        }, {
          label: "Income and the Outcomes of Children",
          route: "https://www.researchgate.net/publication/23546163_Income_and_the_Outcomes_of_Children"
        }]
      },
      {
        imageID: 6,
        title: "Low Self-Esteem",
        description: " When dealing with the complex issue of inequality, sometimes the biggest barrier is that of the mind. As the saying goes: “Whether you think you can or you think you can't, you're right.” When a child has had to deal with chronic stress and adverse circumstances at home, they may begin to believe that nothing they do would be able to change anything.",
        links: [{
          label: "Channel News Asia",
          route: "https://www.channelnewsasia.com/commentary/budget-2021-children-low-income-inequality-volunteers-community-367496"
        }]
      }
    ],
    stats: [
      {
        imageID: 7,
        description: "Inequality and poverty are urgent and global issues, yet acknowledging and grappling with this seems slow to reach Singapore's shores. Although Singapore's Gini coefficient, a measure of income inequality, has slightly ameliorated in recent years, Singapore remains one of the most unequal developed countries in the world.",
        links: [{
          label: "SingStat",
          route: "https://www.singstat.gov.sg/publications/reference/ebook/households/households"
        }]
      },
      {
        imageID: 8,
        description: "An official poverty line is absent in Singapore, but if it were to be defined as the median household income of the population, then roughly a fifth of the resident population could be defined as poor.",
        links: [{
          label: "A handbook on inequality, poverty and unmet social needs in Singapore",
          route: "https://ink.library.smu.edu.sg/lien_reports/10/"
        }]
      }
    ]
  }),
  components: {
    ImageText
  },
};
</script>

<style scoped>.v-card__title {
  word-break: normal;
  text-align: center;
}
</style>
