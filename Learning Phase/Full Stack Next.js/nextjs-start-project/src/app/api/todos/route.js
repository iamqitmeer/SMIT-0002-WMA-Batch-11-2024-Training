const todos = []

export async function GET() {
  return Response.json({
    statusCode: "404",
    todos
  });
}

export async function POST(request) {
  let data = await request.json();
  let obj = {
    completed: false,
    ...data,
    id: todos.length + 1,
  };
  todos.push(obj);
  return Response.json({
    message: "Todos Added Succesfully!",
    data: todos
  });
}

export async function PUT(request) {
  let data = await request.json();
  let findIndex = todos.findIndex((todo) => todo.id == data.id)
  todos[findIndex] = data
  return Response.json({
    message: "Todos Updated Succesfully!",
    data: todos
  });

}

export async function DELETE(request) {
  let data = await request.json();
  todos.splice(data.id - 1, 1)
  return Response.json({
    message: "Todos Deleted Succesfully!",
    data: todos
  });

}