<script>
    import TaskContainer from './taskContainer.svelte'
    import { taskArr } from '../store.js'
    let tasks

    // Subscribe to store taskArr variable (By subscription we update our tasks array when store taskArr changes)

    taskArr.subscribe(value => {
        tasks = value
    })

    let taskText = ''
    function addTask () {
        if (taskText !== '') {
            tasks = [...tasks, {id: Date.now(), text: taskText, status: 'Pending'}]
            taskText = ''

            // Storing tasks in localStorage for persistence

            localStorage.setItem('tasks', JSON.stringify(tasks))

            // Using svelte store update method. Updating store taskArr with the value of tasks in localStorage

            taskArr.update(val => JSON.parse(localStorage.getItem('tasks')))
        }
    }
    function buttonKeyup (e) {
        if (e.keyCode === 13) {
            addTask()
        }
    }
</script>

<style>
    .list-container {
        background: var(--background-color);
        width: 100%;
        height: auto;
        min-height: 100%;
    }

    .container {
        height: 100%;
        padding: 50px;
    }

    .content {
        border-radius: 8px;
        background: white;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
        padding: 40px 20px;
        margin: auto;
    }
    h1 {
        font-size: 60px;
        font-weight: 600;
    }
    p {
        font-size: 16px;
    }
    .heading h1 {
        text-align: center;
        font-family: 'Dancing Script', cursive;
        color: #228B22;
    }
    .info p {
        text-align: center;
        color: #00CD00;
    }
    .inputBlock {
        margin-bottom: 20px;
        text-align: center;
    }
    .addBtn {
        display: inline-block;
        background: #228B22;
        color: #fff;
        font-family: 'Dancing Script', cursive;
        border: 0;
        border-radius: 2px;
        outline: 0;
        padding: 12px 36px;
        transition: all 200ms ease-in;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    .addBtn:hover {
        background: #00CD00;
        color: white;
    }
    .btn--primary:active {
        background: #00CD00;
        box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
    }
    .btn--inside {
        margin-left: -18px;
    }

    .input_field {
        width: 80%;
        background: #fff;
        color: #a3a3a3;
        font: inherit;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
        border: 0;
        outline: 0;
        padding: 22px 18px;
    }
</style>

<div class="list-container">
    <div class="container">
        <div class="col-sm-0 col-md-2 col-lg-2"></div>
        <div class="col-sm-12 col-md-8 col-lg-8 content">
            <div class="heading">
                <h1>To.Do</h1>
            </div>
            <div class="info">
                <p>This is a very simple Todo application made in <a href="https://svelte.dev/">svelte.js.</a> Easy to understand svelte.js basics.</p>
            </div>
            <div class="inputBlock">
                <input type="text" class="input_field" bind:value={taskText} on:keypress={buttonKeyup} placeholder="Add a task" />
                <button type="button" class="btn addBtn btn--inside" on:click={addTask}>Add</button>
            </div>
            <TaskContainer tasks={tasks}/>
        </div>
        <div class="col-sm-0 col-md-2 col-lg-2"></div>
    </div>
</div>