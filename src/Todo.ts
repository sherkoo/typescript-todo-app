class Todo {
  private listElement: HTMLElement;

  constructor(public data: Array<string>) {
    this.data = data;
    this.listElement = document.createElement('ul');
  }

  // add new
  addNew(todo: string) {
    console.log('adding new');
    this.data.push(todo);
    this.renderList();
  }

  // delete
  delete(id: number) {
    console.log('deleting');
    this.data.splice(id, 1);
    this.renderList();
  }

  // render todo list items
  private renderList() {
    this.listElement.innerHTML = '';
    this.data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      this.listElement.appendChild(listItem);
    });

    const addButton = document.createElement('button');
    addButton.textContent = 'Add New Item';
    addButton.onclick = () => {
      const newItem = prompt('Enter new todo item');
      if (newItem) {
        this.addNew(newItem);
      }
    };

    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = '';
      root.appendChild(this.listElement);
      root.appendChild(addButton);
    } else {
      console.error('Element with id "root" not found');
    }
  }

  // show all
  showAll() {
    console.log(this.data);
    this.renderList();
  }
}

export default Todo;
