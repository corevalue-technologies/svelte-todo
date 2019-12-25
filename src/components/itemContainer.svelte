<script>
    export let items;
    import ListItem from './listItem.svelte'
    import { itemArr } from '../store.js'
    
    function deleteAllTasks () {
        localStorage.clear()

        // Using svelte store update method

        itemArr.update(val => [])
    }

    function markCompleted (id) {
        let index = items.findIndex(el => {
            return el.id === id
        })
        if (items[index].status === 'Pending') {
            items[index].status = 'Completed'
        } else {
            items[index].status = 'Pending'
        }
        items = items
        localStorage.setItem('items', JSON.stringify(items))

        // Using svelte store update method

        itemArr.update(val => JSON.parse(localStorage.getItem('items')))
    }

    function deleteItem (id) {
        let filtered = items.filter(el => {
            return el.id !== id
        })
        items = filtered
        console.log(filtered)
        localStorage.setItem('items', JSON.stringify(items))

        // Using svelte store update method

        itemArr.update(val => JSON.parse(localStorage.getItem('items')))
    }

</script>

<style>
    .item-container {
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
    .items {
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

<div class="item-container">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 tasksHeading">
            <h5>Tasks</h5>
            <button class="clear-btn" disabled={items.length === 0} on:click={deleteAllTasks}>Clear All</button>
        </div>
        <div class="items">
            <hr>
            {#if items.length > 0}
                {#each items as item}
                    <div class="col-sm-12 col-md-12 col-lg-12 item">
                        <ListItem text={item.text} status={item.status} markComplete={markCompleted.bind(this, item.id)} deleteItem={deleteItem.bind(this, item.id)}/>
                    </div>
                {/each}
            {:else}
                <p class="no-task">No tasks added.</p>
            {/if}
        </div>
    </div>
</div>