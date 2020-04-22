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

<h1>Fedi-Todo</h1>
<h5>Front-end Developer Interview Todo List</h5>
