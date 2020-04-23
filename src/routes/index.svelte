<script>
	import { onMount } from 'svelte';
	
	import addData from './_helpers/add-data.js';
	import { getTodoList, getCategories } from './_helpers/db-api.js';

	let todoList = [];
	let categories = [];
	let completedItems = [];

	function getItemsByCategory(list, category) {
		return list.filter(item => item.category === category.id)
	}

	function toggleTodoItem(event, id) {
		const target = event.target;
		const isChecked = event.target.checked;
		
		// call indexeddb update api
	}

	onMount(async () => {
		addData();
		todoList = await getTodoList();
		categories = await getCategories();
	});
</script>

<svelte:head>
	<title>Fedi-Todo</title>
</svelte:head>

<div>
	<header class="header">
		<div class="wrap">
			<h1 class="h1">Fedi-Todo</h1>
			<h3 class="h3 secondary-text-color">Front-end Developer Interview Todo List</h3>
			<h5>Completed items {todoList.filter(item => item.done).length}</h5>
		</div>
	</header>
	{#each categories as category }
		<div class="todo" key={category.id}>
			<!-- Todo Header -->
			<div class="todo-header">
				<div class="wrap">
					<label class="checkbox-label">
						<input id={category.id} type="checkbox">
						<span class="checkbox-custom rectangular"></span>
					</label>
					<label for={category.id} class="todo-title">{category.name}</label>
				</div>
			</div>
			<!-- Todo List -->
			<ul class="todo-list">
			{#each getItemsByCategory(todoList, category) as todoItem}
				<li class="todo-item">
					<label class="checkbox-label">
						<input id={todoItem.id} type="checkbox" on:change={(e) => toggleTodoItem(e, todoItem.id)} bind:checked={todoItem.done}>
						<span class="checkbox-custom rectangular"></span>
					</label>
					<label for={todoItem.id} class="todo-item-text">
						{todoItem.text}
					</label>
				</li>
			{/each}
			</ul>
		</div>
	{/each}
</div>
