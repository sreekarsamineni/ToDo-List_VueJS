<template>

    <v-container class="con">
        <v-row>
            <v-col>
    <v-card 
      class="mx-auto my-12"
      max-width="100%"
      height="600px"
      color="#ffffff4d"
    >
      <v-card-title>To do List</v-card-title>

      
  <!-- Inner card 1 -->
    <v-card 
      class="box1 my-12"
      max-width="100%"
      height="80px"
      color="#ffffff4d"
    >
      

      <div class="add-task">
      <input type="text" placeholder="Add New Task" class="task-input">
      <input type="" value="" class="submit-task" title="Add Task">
    </div>


      </v-card>


    <!-- Inner Card 2 -->

    <v-row>
    <v-col 
        md="6">
      <v-card 
      class="box3 my-12"
      width="90%"
      height="300px"
      color="#ffffff4d"
    >

    <v-card-title>In Progress</v-card-title>
    
    </v-card>
</v-col>

        
         <!-- Inner Card 3 -->
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
    </v-row>
    


    </v-card>

    
</v-col>
</v-row>
</v-container>
</template>

<script>
export default {

}
</script>

<style>

.box1 {
    margin-left: 20px;
    margin-right: 20px;
    
}

.box2 {
    margin-left: 0%;
    margin-right: 20px;
}

.box3 {
    margin-left: 20px;
    margin-right: 52%;
    
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


</style>