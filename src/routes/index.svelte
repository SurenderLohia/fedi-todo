<script>
	import { onMount } from 'svelte';
	
	import addData from './_helpers/add-data.js';
	import { getTodoList, getCategories } from './_helpers/db-api.js';

	onMount(async () => {
		addData();
		const todoList = await getTodoList();
		const categories = await getCategories();

		console.log(todoList);
		console.log(categories);
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
		</div>
	</header>
	<div class="todo">
		<div class="todo-header">
			<div class="wrap">
				<label class="checkbox-label">
					<input id="3" type="checkbox">
					<span class="checkbox-custom rectangular"></span>
				</label>
				<label for="3" class="todo-title">HTML & CSS</label>
			</div>
		</div>
		<ul class="todo-list">
			<li class="todo-item">
				<label class="checkbox-label">
					<input id="1" type="checkbox">
					<span class="checkbox-custom rectangular"></span>
				</label>
				<label for="1" class="todo-item-text">
					Semantic HTML
				</label>
			</li>
			<li class="todo-item">
				<label class="checkbox-label">
					<input id="2" type="checkbox">
					<span class="checkbox-custom rectangular"></span>
				</label>
				<label for="2" class="todo-item-text">
					CSS Pre-Processors
				</label>
			</li>
		</ul>
	</div>
</div>
