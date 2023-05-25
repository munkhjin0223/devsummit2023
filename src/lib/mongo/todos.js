import clientPromise from '@/lib/mongo/client';

let client;
let db;
let todos;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    todos = await db.collection('next-todos');
  } catch (error) {
    throw new Error('Failed to connect to the database.');
  }
}

(async () => {
  await init();
})();

//////////////
/// TODOS ///
/////////////

export async function getAllTodos() {
  if (!todos) await init();

  const result = await todos
    .find({})
    .map(todo => ({ ...todo, _id: todo._id.toString() }))
    .toArray();

  return { todos: result };
}

export async function getTodoById(id) {
  try {
    if (!todos) await init();

    const todo = await todos.findOne({ _id: id });
    if (!todo) throw new Error();
    return { todo: { ...todo, id: todo._id.toString() } };
  } catch (error) {
    return { error: 'Failed to get todo!' };
  }
}

export async function createTodo(text) {
  try {
    if (!todos) await init();

    return await todos.insertOne({ _id: Math.random().toString(), text, completed: false });
  } catch (error) {
    return { error: 'Failed to create todo!' };
  }
}

export async function deleteTodo(id) {}

export async function completeTodo(id) {}
