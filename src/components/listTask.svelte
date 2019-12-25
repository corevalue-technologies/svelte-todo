<script>

    // Defining prop 'text', 'status', 'deleteTask', 'markComplete'

    export let text;
    export let status;
    export let deleteTask;
    export let markComplete;
</script>

<style>
    .card {
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        transition: 0.5s all ease-in-out;
        margin-bottom: 10px;        
    }
    .card-body {
        font-size: 18px;
    }
    .flex {
        display: flex
    }
    p {
        width: 80%;
        margin: 0;
    }
    .justifySpace {
        justify-content: space-between;
    }
    .alignCenter {
        align-items: center;
    }    
    .completed {
        font-size: 12px;
        color: #24D330;
        border: 1px solid #24D330;
        border-radius: 5px;
        padding: 5px 10px;
    }
    .pending {
        font-size: 12px;
        color: tomato;
        border: 1px solid tomato;
        border-radius: 5px;
        padding: 5px 10px;
    }
    .fa-check-circle {
        cursor: pointer;
    }
    .fa-check-circle.completeIcon {
        color: #24D330;
    }
    .fa-check-circle.pendingIcon {
        color: lightgray;
    }
    .fa-trash {
        color: tomato;
        cursor: pointer;
    }
</style>

<div class="card">
    <div class="card-body">
        <div class="flex alignCenter justifySpace">
            <p class="card-text">{text}
                {#if status === 'Pending'}
                    <span class="pending">Pending</span>
                {:else}
                    <span class="completed">Completed</span>
                {/if}
            </p>
            <div class="actions">
                <i class="fa fa-check-circle {status === 'Completed' ? 'completeIcon' : 'pendingIcon'}" on:click={markComplete}></i>
                <i class="fa fa-trash" on:click={deleteTask}></i>
            </div>
        </div>
    </div>
</div>