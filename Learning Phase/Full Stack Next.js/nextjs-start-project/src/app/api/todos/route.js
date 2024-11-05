const todos = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Practice React", completed: true },
  { id: 3, title: "Build a To-Do App", completed: false },
  { id: 4, title: "Read about Node.js", completed: false },
  { id: 5, title: "Explore MongoDB", completed: true },
];

export async function GET() {
  return Response.json({ statusCode: "404", todos });
}

export async function POST(request) {
  let data = await request.json();
  let obj = {
    ...data,
    completed: false,
    id: todos.length + 1,
  };
  todos.push(obj);
  return Response.json({ message: "Todos Added Succesfully!", data: todos });
}
