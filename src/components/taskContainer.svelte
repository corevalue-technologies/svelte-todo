<script>

    // Defining prop 'tasks'

    export let tasks;

    import ListTask from './listTask.svelte'
    import { taskArr } from '../store.js'
    
    function deleteAllTasks () {
        localStorage.clear()

        // Using svelte store update method. Updating store taskArr with the empty array

        taskArr.update(val => [])
    }

    function markCompleted (id) {
        let index = tasks.findIndex(el => {
            return el.id === id
        })
        if (tasks[index].status === 'Pending') {
            tasks[index].status = 'Completed'
        } else {
            tasks[index].status = 'Pending'
        }
        tasks = tasks

        // Storing tasks in localStorage for persistence

        localStorage.setItem('tasks', JSON.stringify(tasks))

        // Using svelte store update method. Updating store taskArr with the value of tasks in localStorage

        taskArr.update(val => JSON.parse(localStorage.getItem('tasks')))
    }

    function deleteTask (id) {
        let filtered = tasks.filter(el => {
            return el.id !== id
        })
        tasks = filtered    

        // Storing tasks in localStorage for persistence

        localStorage.setItem('tasks', JSON.stringify(tasks))

        // Using svelte store update method. Updating store taskArr with the value of tasks in localStorage

        taskArr.update(val => JSON.parse(localStorage.getItem('tasks')))
    }

</script>

<style>
    .task-container {
        padding: 0 10px;
        margin-top: 30px;
    }

    .tasksHeading {
        color: #228B22;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .tasksHeading h5 {
        font-family: 'Dancing Script', cursive;
    }
    .tasks {
        max-height: calc(100vh - 480px);
        overflow: auto;
        width: 100%;
    }

    .clear-btn {
        background: #228B22;
        color: white;
        padding: 8px;
        font-size: 14px;
        font-family: inherit;
    }

    .clear-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .no-task {
        color: grey;
        text-align: center;
    }
</style>

<div class="task-container">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 tasksHeading">
            <h5>Tasks</h5>
            <button class="clear-btn" disabled={tasks.length === 0} on:click={deleteAllTasks}>Clear All</button>
        </div>
        <div class="tasks">
            <hr>
            {#if tasks.length > 0}
                {#each tasks as task}
                    <div class="col-sm-12 col-md-12 col-lg-12 task">
                        <ListTask text={task.text} status={task.status} markComplete={() => markCompleted(task.id)} deleteTask={() => deleteTask(task.id)}/>
                    </div>
                {/each}
            {:else}
                <p class="no-task">No tasks added.</p>
            {/if}
        </div>
    </div>
</div>