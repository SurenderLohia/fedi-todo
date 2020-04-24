import { openDB } from 'idb/with-async-ittr.js';

import todoList from '../../data/todo-list.js';
import categories from '../../data/categories.js';
import { DB_NAME, TODO_LIST, CATEGORIES } from './constants';

async function addData() {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      const todoListStore = db.createObjectStore(TODO_LIST, {
        keyPath: 'id',
      });

      const categoryStore = db.createObjectStore(CATEGORIES, {
        keyPath: 'id'
      });

      todoListStore.createIndex('done', 'done');
      todoListStore.createIndex('category', 'category');

      categoryStore.createIndex('category', 'category');
      categoryStore.createIndex('order', 'order');
      
      todoListStore.transaction.oncomplete = async function(event) {
        // Add todoList into indexedDb
        const tx = db.transaction(TODO_LIST, 'readwrite');
        todoList.forEach(element => {
          tx.store.add(element);
        });
        await tx.done;

        // Add categories into indexedDb
        const tx2 = db.transaction(CATEGORIES, 'readwrite');
        categories.forEach(element => {
          tx2.store.add(element);
        });
        await tx2.done;
      }
    }
  });

  // console.log(await db.getAll(TODO_LIST));
  // console.log(await db.getAll(CATEGORIES));
}

export default addData;