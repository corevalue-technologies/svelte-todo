<script>
    import ItemContainer from './itemContainer.svelte'
    import { itemArr } from '../store.js'
    import { onMount } from 'svelte'
    let items

    // Subscribe to store itemArr variable

    itemArr.subscribe(value => {
        items = value
    })
    let itemText = ''
    function addItem () {
        if (itemText !== '') {
            items = [...items, {id: Date.now(), text: itemText, status: 'Pending'}]
            itemText = ''
            localStorage.setItem('items', JSON.stringify(items))

            // Using svelte store update method

            itemArr.update(val => JSON.parse(localStorage.getItem('items')))
        }
    }
    function buttonPress (e) {
        if (e.keyCode === 13) {
            addItem()
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
                    <input type="text" class="input_field" bind:value={itemText} on:keypress={buttonPress} placeholder="Add a task" />
                    <button type="button" class="btn addBtn btn--inside" on:click={addItem}>Add</button>
                </div>
                <ItemContainer items={items}/>
            </div>
            <div class="col-sm-0 col-md-2 col-lg-2"></div>
    </div>
</div>