import Todo from "./Todo";

let data:Array<string> = [];

const t = new Todo(data);
t.showAll();
t.addNew("adding new");
t.addNew("adding new2");
t.addNew("adding new3");

