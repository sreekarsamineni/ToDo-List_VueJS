<template>
 
 <LoginNavbar></LoginNavbar>

<v-container class="con">
   <v-row>
        <v-col>
            <v-card 
            class="mx-auto my-12"
            max-width="75%"
            height="600px"
            color="#ffffff4d"
            >

            <v-card-title>Todo List</v-card-title>


  <!-- Inner card 1 -->
            <v-card
            class="box1"     
            max-width="100%"
            height="80px"
            color="#ffffff4d"
            >
      
            <div class="add-task">
                <!-- <input type="text" placeholder="Add New Task" class="task-input"> -->
                


     <!-- Create Dialog Box             -->
                <v-row justify="center">
                  
                  <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                  >
                
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                      class="btt"
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        @click="dialog = true"
                      >
                        Add Task
                      </v-btn>
                    </template>
                    <v-card>
                      <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                          >
                      
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
                                v-model="task.name"
                                :rules="nameRules"
                                label="Title*"
                                required
                              ></v-text-field>
                            </v-col>
                            
                            <v-col cols="12">
                              <v-text-field
                              v-model="task.des"
                                :rules="desRules"
                                label="Description*"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="12"
                              md="12"
                            >
                              <v-text-field
                              v-model="task.aname"
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
                              v-model="task.date"
                                :rules="dateRules"
                                label="Due date*"
                                hint="Format: dd/mm/yyyy"
                                required
                              ></v-text-field>
                            
                            </v-col>


                            <v-col
                              cols="12"
                              sm="6"
                            >
                              <v-select
                              v-model="task.status"
                              :items="items"
                              :rules="selectRules"
                              label="Status*"
                              required
                              ></v-select>
                            </v-col>

                            <v-col cols="12">
                              <v-text-field
                              v-model="task.email"
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
                        <div @click=" closeBtn">
                          Close
                          </div>
                        </v-btn>
                        <!-- <div @click="dialog = false"> -->
                          
                          <!-- <div color="primary" @click="snackbarSubmit = true"> -->
                        <v-btn
                        :disabled="!valid"
                          text
                          color="blue darken-1"
                          @click="submitTask"
                          :loading="loading"
                        >
                          Save
                          
                        </v-btn>
                      <!-- </div> -->
                      
                      <!-- </div> -->
                      </v-card-actions>
                    </v-form>
                    </v-card>
                  </v-dialog>
          
                 </v-row>

            </div>

            </v-card>


    <!-- Inner Card 2 -->
        
            <v-card
            class="box3 my-12" 
            max-width="96%"
            height="400px"
            color="#ffffff4d"
            >
            

            <v-card-title>Task List</v-card-title>

     <!-- Task Table -->
             <v-table
             class="table"
    
            height="300px"
        >
            <thead>
            <tr>
                <th>Name</th>
                <th >Status</th>
                <th scope="col">Due Date</th>
                            <th scope="col" class="text-center">Edit</th>
                            <th scope="col" class="text-center">Delete</th>
            </tr>
            </thead>
            <tbody>
                             <tr v-for="(task, index) in getdataObj" :key="index">
                            <th>
                              <div @click="dialog2 = true">
                                <div @click="editData(task)">
                                <span :class="{'finished': task.status === 'finished'}">
                                  {{ task.data().name }}
                                </span>
                              </div>
                              </div>
                            </th>
                            <td>
                                <span>
                                  {{ firstCharUpper(task.data().status) }}
                                </span>
                            </td>
                            <td>{{ task.data().date }}</td>
                            <td>
                                <div class="text-center" @click="editData(task)">
                                    <div @click="dialog1 = true">
                                    <span class="fa fa-pen"></span>
                                </div>
                                </div>
                            </td>
                            <td>
                              <!-- <div color="primary" @click="snackbarDelete = true"> -->
                                <div class="text-center" @click="deleteTask(task.id)">
                                    <span class="fa fa-trash" ></span>
                                </div>
                              <!-- </div> -->
                            </td>
                            </tr>
                            <!-- <div>{{ task.des }}</div> -->
                            <!-- <td>{{ task.asn }}</td> -->
                            <!-- <td>{{ task.mail }}</td> -->
                        </tbody>
               </v-table>
            </v-card>
        </v-card>
        </v-col>
        </v-row>
      </v-container>
      <!-- Edit dialog box -->
      <v-row justify="center">
          <v-dialog
            v-model="dialog1"
            persistent
            max-width="600px"
          >
            
            <v-card>
              <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
              <v-card-title>
                <span class="text-h5">Edit Task</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="task.name"
                        :rules="nameRules"
                        label="Title*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                      v-model="task.des"
                        :rules="desRules"
                        label="Description*"
                        required>
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                      v-model="task.aname"
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
                      v-model="task.date"
                        :rules="dateRules"
                        label="Due date*"
                        hint="Format: dd/mm/yyyy"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-select
                      v-model="task.status"
                      :items="items"
                      :rules="selectRules"
                      label="Status*"
                      required
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                      v-model="task.email"
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
                  @click="dialog1 = false"
                >
                <div @click="closeBtn">
                  Close
                  </div>
                </v-btn>

                <!-- <div @click="dialog1 = false"> -->
                <v-btn
                :disabled="!valid"
                  color="blue darken-1"
                  text
                  @click="submitTask1"
                  :loading="loading"
                >
                <!-- <div color="primary" @click="snackbar = true"> -->
                  Save
                <!-- </div> -->
                </v-btn>
                <!-- </div> -->
              </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-row>

  <!-- On-click dialogBox with info -->
        <v-row justify="center">
          <v-dialog
            v-model="dialog2"
            persistent
            max-width="600px"
          >
            
            <v-card>
              <v-card-title>
                <span class="text-h5">Task Details</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="task.name"
                        :rules="nameRules"
                        label="Title*"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                      v-model="task.des"
                        :rules="desRules"
                        label="Description*"
                        readonly>
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                      v-model="task.aname"
                        :rules="anameRules"
                        label="Assignee name*"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                      v-model="task.date"
                        :rules="dateRules"
                        label="Due date*"
                        hint="Format: dd/mm/yyyy"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-select
                      v-model="task.status"
                      :items="items"
                      :rules="selectRules"
                      label="Status*"
                      readonly
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                      v-model="task.email"
                        :rules="emailRules"
                        label="Email*"
                        readonly
                      ></v-text-field>
                    </v-col>
                    
                  </v-row>
                </v-container>
                
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="dialog2 = false"
                >
                <div @click="closeBtn">
                  Close
                  </div>
                </v-btn>
                  
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

          <v-snackbar
          class="snk"
              v-model="snackbar"
              :timeout="timeout"
              absolute
              bottom
              color="primary"
              left
              text
            >
              Successfully Updated
            </v-snackbar>

            <v-snackbar
          class="snk"
              v-model="snackbarDelete"
              :timeout="timeout"
              absolute
              bottom
              color="primary"
              left
              text
            >
              Successfully Deleted
            </v-snackbar>

            <v-snackbar
          class="snk"
              v-model="snackbarSubmit"
              :timeout="timeout"
              absolute
              top
              color="primary"
              left
              text
            >
              Successfully Added
            </v-snackbar>

    

</template>

<script>
import { db } from './FirebaseDB'
import LoginNavbar from './navbars/LoginNavbar'

export default {
    name: 'MainPage',
  components: {
    LoginNavbar
  },

    data() {
        return {

          snackbar: false,
          snackbarDelete: false,
          snackbarSubmit: false,
          timeout: 2000,

          loading: false,
 
            //dialog boxes
            dialog: false,
            dialog1: false,
            dialog2: false,

            //validation button
            valid: true,
            valid: true,

            // Form Validations
                name: '',
            nameRules: [
                v => !!v || 'Title is required',
                v => (v && v.length <= 30) || 'Title must be less than 30 characters',
            ],

            aname: '',
            anameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],

            date: '',
            dateRules: [
                v => !!v || 'Due date is required',
                v => /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(v) || 'Date must be in the Format dd/mm/yyyy',
            ],

            selectRules: [v => !!v || 'Item is required'],
            status: '',
            items: [
                'To-do',
                'In-progress',
                'Completed',
            ],

            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

            des: '',
            desRules: [
                v => !!v || 'Description is required',
                // v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],


            name: '',
            date: '',
            aname: '',
            email: '',
            des: '',
            editedTask: null,
            // statuses: ["to-do", "in-progress", "finished"],

            
            //TaskList
            tasks: [
                // {
                //    name: 'Steal bananas from the store.',
                //    status: 'to-do',
                //    ddate: '12/12/2022',
                //    ddes: 'Hello',
                //    asn: 'Sreekar',
                //    mail: 'sr619@gmail.com'
                // },
                // {
                //     name: 'Eat 1kg chocolate in 1 hour.',
                //     status: 'in-progress',
                //     ddate: '12/11/2022',
                //     ddes: 'Yooooo',
                //     asn: 'Teja',
                //     mail: 'teja@gmail.com'
                // }
            ],

            getdataObj: [

            ],

            task: {

            name: '',
            status: '',
            date: '',
            aname: '',
            email: '',
            des: '',
            },

            editID: null
        }
    },

   mounted() {
      this.addDAta()
      },

     
    methods: {

      addDAta() {

        // db.collection('formdata').get().then((res)=>{
        //         console.log(res)
        //         res.forEach(element => {
        //            console.log(element.data()) 
        //            this.getdataObj.push(element.data())
        //         });
        //         console.log(this.getdataObj)
        //     })

            db.collection("formdata").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        
        this.getdataObj.push(doc);
    });
});

      },
      
       submitTask(){

          this.loading = true;

          db.collection('formdata').add(this.task).then((docRef) =>{
            this.closeBtn();
            this.loading = false
            this.dialog = false
            this.snackbarSubmit = true
            console.log('added to DataBase')
            console.log("Doc ID:", docRef.id);
          })
          .catch(function(error){
            console.error("Error adding ", error);
          })


          this.$refs.form.validate()

        },


        submitTask1(){

          this.loading = true;

          db.collection("formdata").doc(this.editID).update(this.task)
          .then(() => {
            this.closeBtn();
            this.loading = false
            this.snackbar = true
            this.dialog1 = false
              console.log("Document successfully updated!");
          })
          .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });

          this.$refs.form.validate()
        },        

        closeBtn(){

           this.task.name = ''
           this.task.status = ''
            this.task.date = ''
            this.task.email = ''
            this.task.aname = ''
            this.task.des = ''
        },

        editData(task){

          this.task = task.data();
          this.editID = task.id;
        },

        deleteTask(doc){
            // this.tasks.splice(index, 1)
            db.collection('formdata').doc(doc).delete().then(() => {
              this.snackbarDelete = true
            })

            // console.log(doc)
        },

        firstCharUpper(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

    },
    
}

</script>

<style>

.snk {
  /* margin-top: -700px; */
  margin-top: -620px;
  margin-left: 80%;
}


.albox {
  margin-bottom: 20px;
  margin-top: -700px;
  width: 20%;
  margin-left: 80%;
  

}

.finished {
    text-decoration: line-through;
    /* text-decoration-thickness: 2px; */
    color: green;
}

.pointer {
    cursor: pointer;
}


.table {
    background: transparent;
}

.btt {
    margin-right: auto;
    margin-left: auto;
    margin-top: 15px;
    
}

.box1 {
    margin-left: 20px;
    margin-right: 20px;
    
}


.box3 {
    margin-left: 20px;
    margin-right: 20px;
    
}

body {
    width: 100%;
    height: 100vh;
    margin: 0;
    
    
    
    justify-content: center;
    align-items: center;
    background-image: 
    linear-gradient(62deg, rgba(7, 86, 160, 0.973) 13%, rgba(22, 49, 113, 0.5) 4%),
    linear-gradient(44deg, rgba(0, 43, 99, 0.079) 39%, rgba(142, 28, 32, 0.5) 18%),
    linear-gradient(118deg, rgba(84, 202, 242, 0.031) 40%, rgba(247, 155, 187, 0.5) 54%),
    linear-gradient(58deg, rgba(90, 90, 237, 0.161) 83%, rgba(249, 156, 142, 0.5) 23%);
    background-blend-mode: normal, lighten, multiply, hard-light;
    font-family: 'Times New Roman', Times, serif;
    overflow: hidden;

}

.add-task {
    margin-top: 20px;
    height: 40px;
    font-size: 14px;
    display: flex;
    margin-left: 5px;
    
  }

  .task-input {
    width: 100%;
    padding: 0 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid #272727;
    background-color: transparent;
    margin-right: 15px;
    color: #272727;
    box-shadow: none;
    border-radius: 0;
  }

  .task-input::placeholder {
    color: #2e3136;
  }
 
</style>