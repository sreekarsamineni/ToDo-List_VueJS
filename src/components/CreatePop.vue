<template>

    <v-row justify="center">
        <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
        >
          
          <v-card>
            <v-card-title>
              <span class="text-h5">Create Task</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="task"
                      :rules="nameRules"
                      label="Title*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                    v-model="des"
                      :rules="desRules"
                      label="Description*"
                      required
                    ></v-text-field>
                  </v-col>
                  
                  
                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                    v-model="aname"
                      :rules="anameRules"
                      label="Assignee name*"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                    v-model="date"
                      :rules="dateRules"
                      label="Due date*"
                      hint="Format: dd/mm/yyyy"
                      required
                    ></v-text-field>
                  </v-col>
    
                  <v-col cols="12">
                    <v-text-field
                    v-model="email"
                      :rules="emailRules"
                      label="Email*"
                      required
                    ></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
              
                color="blue darken-1"
                text
                @click="submitTask"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  
  <script>
  export default {
      data () {
        return {
          dialog: true,
        }
      },
  
    }
  </script>
  
  <style>
  
  .btt{
    margin-top: 25%;
  }
  
  </style>