interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

class TodoApp {
  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  public addTodo = (text: string): void => {
    const todo: Todo = {
      id: this.nextId,
      text: text,
      completed: false,
    };

    this.todos.push(todo);
    this.nextId += 1;

    this.render();
  };

  public render = (): void => {
    console.log(this.todos);
    const root = document.getElementById("root") as HTMLElement;
    root.innerHTML = "";

    this.todos.forEach((todo) => {
      const template = `
          <div>
            <h2>
              <span><input type="checkbox"></span>
              <span>${todo.text} - ${todo.id}</span>
            </h2>
          </div>
      `;
      root.innerHTML += template;
    });
  };
}

const t = new TodoApp();

t.render(); // Call the `render` method directly without exporting it

export default t;
