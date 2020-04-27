<style lang="scss" global>
	@import './_style/main.scss';
</style>
<script>
	import { onMount } from 'svelte';
	import Spinner from 'svelte-spinner';
	import { fade } from 'svelte/transition';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import GithubCorner from '../components/GithubCorner.svelte';
	
	import addData from './_helpers/add-data.js';
	import { getTodoList,
		getCategories, 
		updateTodoDoneState 
	} from './_helpers/db-api.js';

	let todoList = [];
	let categories = [];
	let completedItems = [];

	function getItemsByCategory(list, categoryId) {
		return list.filter(item => item.category === categoryId)
	}

	function toggleTodoItem(event, id) {
		const target = event.target;
		const isChecked = event.target.checked;
		
		// call indexeddb update api
		const options = {
			key: 'id',
			value: id,
			isChecked
		}

		updateTodoDoneState(options);
	}

	function toggleAllTodoItems(event, categoryId) {
		const target = event.target;
		const isChecked = event.target.checked;

		todoList.forEach((todoItem, index) => {
			if(todoItem.category === categoryId) {
				todoList[index].done = isChecked;
			}
		});

		// update indexeddb
		const options = {
			key: 'category',
			value: categoryId,
			isChecked
		}

		updateTodoDoneState(options);
	}

	function getTodoStatus(categoryId) {
		const filteredTodoItems = getItemsByCategory(todoList, categoryId);
		const remainigTodoItemsCount = filteredTodoItems.filter(todoItem => !todoItem.done).length;

		let statusText;
		if(remainigTodoItemsCount === 1) {
			statusText = 'item left'
		} else {
			statusText = 'items left'
		}
		

		return `${remainigTodoItemsCount} ${statusText}`;
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
	<GithubCorner />
	<Header />
	<div class="main-content">
	{#if todoList.length === 0 && categories.length === 0}
		<div class="loader-container">
			<Spinner
				size="50"
				speed="750"
				color="#fff"
				thickness="2"
				gap="40"
			/>
		</div>
	{:else}
		{#each categories as category }
			<div class="todo" key={category.id}>
				<!-- Todo Header -->
				<div class="todo-header">
					<div class="wrap">
						<label class="checkbox-label">
							<input id={category.id} type="checkbox" on:change={(e) => toggleAllTodoItems(e, category.id)} checked={getItemsByCategory(todoList, category.id).every(todoItem => todoItem.done)}>
							<span class="checkbox-custom rectangular"></span>
						</label>
						<label for={category.id} class="todo-title">{category.name}</label>
						<span class="todo-status">{getItemsByCategory(todoList, category.id).filter(todoItem => !todoItem.done).length} Items left</span>
					</div>
				</div>
				<!-- Todo List -->
				<ul class="todo-list">
				{#each getItemsByCategory(todoList, category.id) as todoItem}
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
	{/if}
	</div>
	<Footer />
</div>
