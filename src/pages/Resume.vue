<template>
  <div class ="resume">
    <v-container fill-height class="d-flex flex-column">
      <v-container>
        <!-- EDUCATION -->
        <v-row>
          <v-col cols="12">
            <h2 class="text-color-main">Education</h2>
            <v-row class="align-center">
              <v-col>
                <h3>Daemen College</h3>
                <h5>Masters of Business Administration</h5>
              </v-col>
              <v-col class="text-right">
                <h5>December, 2021</h5>
              </v-col>
            </v-row>
            <v-row class="align-center">
              <v-col>
                <h3>Ithaca College</h3>
                <h5>Computer Science (BA)</h5>
              </v-col>
              <v-col class="text-right">
                <h5>May, 2019</h5>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- WORK EXPERIENCE -->
        <v-row>
          <v-col cols="12">
            <h2 class="text-color-main">Work Experience</h2>
            <div v-for="(experience, experience_index) in this.experiences" :key="'experience' + experience_index" class="my-3">
              <v-row class="align-center">
                <v-col class="">
                  <h3>{{experience.company}}</h3>
                </v-col>
                <v-col class="text-right">
                  <h5>{{experience.location}}</h5>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <v-row v-for="(role, role_index) in experience.roles" :key="'role_'+role_index" class="align-center my-0">
                <v-col>
                  <h4>{{role.name}}</h4>
                  <h5>{{role.duration}}</h5>
                  <p v-if="role.description" class="mt-1 mb-0">{{role.description}}</p>
                  <ul class="mt-1">
                    <li v-for="(duty, duty_index) in role.duties" :key="'duty_' + duty_index">
                      {{duty}}
                    </li>
                  </ul>
                </v-col>
              </v-row >
            </div>
          </v-col>
        </v-row>

        <!-- SKILLS & TOOLS -->
        <v-row>
          <v-col cols="12" sm="6">
            <h2 class="text-color-main">Skills</h2>
            <v-item-group>
              <v-row class="d-flex justify-center">
                <v-col
                  v-for="(skill, skill_index) in this.skills"
                  :key="skill_index"
                  cols="12"
                  md="6"
                >
                  <v-item v-slot="{ toggle }">
                    <v-card
                      color="primary lighten-1"
                      class="d-flex flex-column"
                      dark
                      height="150"
                      @click="toggle"
                    >
                      <v-card-title class="pt-2 pb-0">
                        <span class="white--text raleway small-text"><b>{{skill.type}}</b></span>
                      </v-card-title>
                      <v-card-text>
                        <ul class="skill-list">
                          <li v-for="(entry, entry_index) in skill.entries" :key="entry_index" class="white--text">{{entry}}</li>
                        </ul>
                      </v-card-text>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
          </v-col>
          <v-col cols="12" sm="6">
            <h2 class="text-color-main">Tools</h2>
            <v-item-group>
              <v-row class="d-flex justify-center">
                <v-col
                  v-for="(tool, tool_index) in this.tools"
                  :key="tool_index"
                  cols="12"
                  md="6"
                >
                  <v-item v-slot="{ toggle }">
                    <v-card
                      color="secondary lighten-1"
                      class="d-flex flex-column"
                      dark
                      height="150"
                      @click="toggle"
                    >
                      <v-card-title class="pt-2 pb-0">
                        <span class="white--text raleway small-text"><b>{{tool.type}}</b></span>
                      </v-card-title>
                      <v-card-text class="my-0">
                        <ul class="skill-list">
                          <li v-for="(entry, entry_index) in tool.entries" :key="entry_index" class="white--text">{{entry}}</li>
                        </ul>
                      </v-card-text>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
          </v-col>
        </v-row>

        <!-- AWARDS -->
        <v-row>
          <v-col cols="12">
            <h2 class="text-color-main">Awards</h2>
            <div v-for="(award, award_index) in this.awards" :key="'award' + award_index">
              <v-row class="align-center">
                <v-col class="">
                  <h3>{{award.type}}</h3>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="align-center my-1 ml-2" v-for="(entry, entry_index) in award.entries" :key="entry_index">
                <v-col class="">
                  <h5>{{entry.name}}</h5>
                </v-col>
                <v-col class="text-right">
                  <h5>{{entry.year}}</h5>
                </v-col>
              </v-row>

            </div>
          </v-col>
        </v-row>

      </v-container>
    </v-container>
  </div>
</template>

<script>

import experiences from '~/constants/resume/experiences'
import skills from '~/constants/resume/skills'
import tools from '~/constants/resume/tools'
import awards from '~/constants/resume/awards'

export default {
  metaInfo: {
    title: 'Resume'
  },
  computed: {
    experiences() {
      return experiences
    },
    skills() {
      return skills
    },
    tools() {
      return tools
    },
    awards() {
      return awards
    }
  }
}
</script>

<style lang="scss" scoped>
.resume {
  .small-text {
    font-size: 15px !important;
  }
}
</style>
