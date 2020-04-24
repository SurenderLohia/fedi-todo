import { openDB } from 'idb/with-async-ittr.js';
import { DB_NAME, TODO_LIST, CATEGORIES } from './constants';

async function getTodoList() {
  const db = await openDB(DB_NAME, 1);
  const todoList = await db.getAll(TODO_LIST);
  return todoList;
}

async function getCategories() {
  const db = await openDB(DB_NAME, 1);
  const categories = await db.getAllFromIndex(CATEGORIES, 'order');
  return categories;
}

async function updateTodoDoneState(options) {
  const { key, value } = options;
  const db = await openDB(DB_NAME, 1);
  const tx = db.transaction(TODO_LIST, 'readwrite');
  let index;
  
  if(key === 'id') {
    index = tx.store;
  }

  for await (const cursor of index.iterate(value)) {
    const todoItem = { ...cursor.value };
    todoItem.done = value;
    cursor.update(todoItem);
  }

  await tx.done;
}

export { 
  getTodoList, 
  getCategories,
  updateTodoDoneState
};