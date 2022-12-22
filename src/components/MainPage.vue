<template>

<v-container class="con">
   <v-row>
        <v-col>
            <v-card 
            class="mx-auto my-12"
            max-width="75%"
            height="600px"
            color="#ffffff4d"
            >

            <v-card-title>To do List</v-card-title>


  <!-- Inner card 1 -->
            <v-card
            class="box1"     
            max-width="100%"
            height="80px"
            color="#ffffff4d"
            >
      
            <div class="add-task">
                <input type="text" placeholder="Add New Task" class="task-input">
                <!-- <input @click="submitTask" type="" value="" class="submit-task" title="Add Task"> -->


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

            </div>

            </v-card>

      <!-- <v-card-text>Hello</v-card-text> -->

      <table class="table table-striped">
                <thead>
                    <v-row>
                    
                    <tr>
                    <th scope="col"><v-col   >Task</v-col></th>
                    <th scope="col"><v-col  pl="10">Status</v-col></th>
                    <th scope="col"><v-col >Due Date</v-col></th>
                    <th scope="col" class="text-center"><v-col >#</v-col></th>
                    <th scope="col" class="text-center"><v-col >#</v-col></th>
                    </tr>
                </v-row>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                    <th>{{ task.name }}</th>
                    <td>{{ task.status }}</td>
                    <td>{{ task.ddate }}</td>
                    <td>
                        <div class="text-center">
                            <span class="fa fa-pen"></span>
                        </div>
                    </td>
                    <td>
                        <div class="text-center">
                            <span class="fa fa-trash"></span>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>


    <!-- Inner Card 2 -->

    <!-- <v-row> <v-col 
        md="6"> -->
        
        
            <v-card
            class="box3 my-12" 
            max-width="96%"
            height="300px"
            color="#ffffff4d"
            >
            

            <v-card-title>Task List</v-card-title>

            <!-- <ul class="task-list">
                <li class="task-list-item">
                  <label class="task-list-item-label">
                    <input type="checkbox">
                    <span>Task</span>
                  </label>
                  <span class="delete-btn" title="Delete Task"></span>
                </li>
             </ul> -->


             
             <table class="table table-striped">
                <thead>
                    
                    <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col">Due Date</th>
                    <th scope="col" class="text-center">#</th>
                    <th scope="col" class="text-center">#</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                    <th>{{ task.name }}</th>
                    <td>{{ task.status }}</td>
                    <td>{{ task.ddate }}</td>
                    <td>
                        <div class="text-center">
                            <span class="fa fa-pen"></span>
                        </div>
                    </td>
                    <td>
                        <div class="text-center" @click="deleteTask(index)">
                            <span class="fa fa-trash"></span>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>

            </v-card>
            
        
<!-- </v-col> -->

        
         <!-- Inner Card 3
    <v-col 
        md="6">
      <v-card 
      class="box2 my-12"
      width="90%"
      height="300px"
      color="#ffffff4d"
    >
    <v-card-title>Done</v-card-title>
        </v-card>
    </v-col>
    </v-row> -->
    
    </v-card>

    
        </v-col>
   </v-row>
</v-container>
</template>

<script>
// import CreatePop from './components/CreatePop.vue'

export default {
//     name: 'MainPage',
//   components: {
//     CreatePop
//   },

    data() {
        return {

            //dialog box
            dialog: false,

            // Form Validations
                task: '',
            nameRules: [
                v => !!v || 'Title is required',
                v => (v && v.length <= 40) || 'Title must be less than 40 characters',
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

            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

            // sum: '',
            // sumRules: [
            //     v => !!v || 'Summary is required',
            //     // v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            // ],

            des: '',
            desRules: [
                v => !!v || 'Description is required',
                // v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

            
            


            //TaskList
            tasks: [
                {
                   name: 'Steal bananas from the store.',
                   status: 'to-do',
                   ddate: '12/12/2022'
                },
                {
                    name: 'Eat 1kg chocolate in 1 hour.',
                    status: 'in-progress',
                    ddate: '12/11/2022'
                }
            ]
        }
    },

    methods: {
        submitTask(){
            console.log(this.task)
            if(this.task.length === 0) return
            if(this.date.length === 0) return;
            
            this.tasks.push({
                name: this.task,
                status: 'to-do',
                ddate: this.date
            });

        },

        deleteTask(index){
            this.tasks.splice(index, 1);
        }
    }


}
</script>

<style>

.btt {
    margin-right: 20px;
    margin-top: 15px;
    
}

.box1 {
    margin-left: 20px;
    margin-right: 20px;
    
}

/* .box2 {
    margin-left: 0%;
    margin-right: 20px;
} */

.box3 {
    margin-left: 20px;
    
}

body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 15px;
    
    
    justify-content: center;
    align-items: center;
    background-image: 
    linear-gradient(62deg, rgba(7, 86, 160, 0.973) 13%, rgba(255, 122, 151, 0.5) 4%),
    linear-gradient(44deg, rgba(0, 43, 99, 0.079) 39%, rgba(242, 140, 143, 0.5) 18%),
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

  .submit-task {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border: none;
    background: var(--add-button);
    color: #272727;
    background-image: url(add.png);
    background-size: 75px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 12px 0 var(--add-button-shadow);
    margin-top: 10px;
    margin-right: 5px;
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

  .task-list-item {
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 35px;
    margin-bottom: 12px;
    margin-right: 20px;
    margin-left: 10px;
  }

  .task-list-item input {
    width: 16px;
    height: 16px;
    border: 1px solid #272727;
    border-radius: 50%;
    background-image: url(circle.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 0;
    transition: 0.2s;
    margin-right: 8px;
    flex-shrink: 0;
    margin-top: 4px;
    appearance: none;
  }

  .task-list-item input:hover {
    border-color: var(--checkbox-color);
    box-shadow: 0 0 0 3px var(--checkbox-shadow);
  }

  .task-list-item input:checked {
    background-size: 10px;
    border: 1px solid var(--checkbox-color);
    background-color: var(--checkbox-color);
  }

  .task-list-item input:checked + span {
    color: #272727;
    text-decoration: line-through #272727;
  }

  .task-list-item-label {
    display: flex;
    align-items: flex-start;
    color: #272727;
    margin-right: 8px;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    transform: 0.2s;
    cursor: pointer;
  }

  .delete-btn {
    margin-left: auto;
    margin-right: 5px;
    display: block;
    width: 16px;
    height: 16px;
    background-image: url(trash.png);
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;
    cursor: pointer;
  }
</style>