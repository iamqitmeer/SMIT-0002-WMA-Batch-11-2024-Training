const todos = []

export async function GET() {
  return Response.json({ statusCode: "404", todos });
}

export async function POST(request) {
  let data = await request.json();
  let obj = {
    completed: false,
    ...data,
    id: todos.length + 1,
  };
  todos.push(obj);
  return Response.json({ message: "Todos Added Succesfully!", data: todos });
}
