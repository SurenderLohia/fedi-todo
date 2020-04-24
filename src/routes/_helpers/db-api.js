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
  const { key, value, isChecked } = options;
  const db = await openDB(DB_NAME, 1);
  const tx = db.transaction(TODO_LIST, 'readwrite');
  let index;
  
  if(key === 'id') {
    index = tx.store;
  } else {
    index = tx.store.index(key);
  }

  for await (const cursor of index.iterate(value)) {
    const todoItem = { ...cursor.value };
    todoItem.done = isChecked;
    cursor.update(todoItem);
  }

  await tx.done;
}

export { 
  getTodoList, 
  getCategories,
  updateTodoDoneState
};