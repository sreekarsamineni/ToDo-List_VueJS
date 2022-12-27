<template>
  <div class="app-container">
    <h1 class="app-header">To do List</h1>

    <div class="add-task">
      <input type="text" placeholder="Add New Task" class="task-input">
      <input type="submit" class="submit-task" title="Add Task">
    </div>

    <ul class="task-list">
      <li class="task-list-item">
        <label class="task-list-item-label">
          <input type="checkbox">
          <span>Task</span>
        </label>
      </li>
    </ul>


  </div>
</template>

<script>


export default {
  
}
</script>

<style>

*{
  box-sizing: border-box;
}

.add-task {
    margin-top: 20px;
    height: 40px;
    font-size: 14px;
    display: flex;
  }

  .submit-task {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border: none;
    background: var(--add-button);
    color: #272727;
    background-image: url(AddIcon.png);
    background-size: 75px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 12px 0 var(--add-button-shadow);
    margin-top: 10px;
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
    color: #c4c8d1;
  }
</style>