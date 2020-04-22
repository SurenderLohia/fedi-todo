import { openDB } from 'idb/with-async-ittr.js';
import { DB_NAME, TODO_LIST, CATEGORIES } from './constants';

async function getTodoList() {
  const db = await openDB(DB_NAME, 1);
  const todoList = await db.getAll(TODO_LIST);
  return todoList;
}

async function getCategories() {
  const db = await openDB(DB_NAME, 1);
  const categories = await db.getAll(CATEGORIES);
  return categories;
}

export { getTodoList, getCategories };