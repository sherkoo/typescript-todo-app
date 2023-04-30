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

  private markComplete = function(): void {
    alert("marked complete");
  }

  public render = (): void => {
    console.log(this.todos);
    const root = document.getElementById("root") as HTMLElement;
    root.innerHTML = "";

    this.todos.forEach((todo) => {
      const template = `
        <div>
          <h2>
            <span><input type="checkbox" onclick="todoApp.markComplete('${todo.id}')"></span>
            <span>${todo.text} - ${todo.id}</span>
          </h2>
        </div>
      `;
      root.innerHTML += template;
    });
  };
}

const todoApp = new TodoApp();
todoApp.render();

export default todoApp;