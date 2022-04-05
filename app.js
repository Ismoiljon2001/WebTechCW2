const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 4000;



app.set("view engine", "pug");
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
    fs.readFile("./data/database.json", (err, data) => {
        if (err) throw err;
    
        const todos = JSON.parse(data);
        res.render("main", { todos: todos });
      });
});


app.get('/add', (req, res) => {
  res.render('change')
})

app.post('/add', (req, res) => {

  const form = req.body;

  if (form.name.trim() == "" || form.description.trim() == "") {
    fs.readFile("./data/database.json", (err, data) => {
      if (err) throw(err);
      const todos = JSON.parse(data);

      res.render("change", { error: true, todos: todos });
    });
  } else {
    fs.readFile("./data/database.json", (err, data) => {
      if (err) throw err;

      const todos = JSON.parse(data);

      const todo = {
        id: id(),
        name: form.name,
        description: form.description,
        done:false
      };

      todos.push(todo);
      fs.writeFile("./data/database.json", JSON.stringify(todos), (err) => {
        if (err) throw err;

        fs.readFile("./data/database.json", (err, data) => {
         if (err) throw err;

        res.render("main");
        });
        res.redirect('/');
      });
    });
  }
});

app.get("/:id/delete", (req, res) => {
  const id = req.params.id;

  fs.readFile("./data/database.json", (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    const filtertodo = todos.filter((todo) => todo.id != id);

    fs.writeFile("./data/database.json", JSON.stringify(filtertodo), (err) => {
      if (err) throw err;
      res.render('main', { todos: filtertodo, deleted: true });
    });
    res.redirect('/');
  });
});

app.get('/:id/update', (req, res) => {
    fs.readFile("./data/database.json", (err, data) => {
      if(err) throw error
  
      const todos = JSON.parse(data)
      const todo = todos.filter(todo => todo.id == req.params.id)[0]
      res.render('change', {todo: todo})
    })
  })
  
  app.post("/:id/update", (req, res) => {
  
    const form = req.body;
  
    if (form.name.trim() == "" || form.description.trim() == "") {
      fs.readFile("./data/database.json", (err, data) => {
        if (err) throw(err);
        const todos = JSON.parse(data)
        const todo = todos.filter(todo => todo.id == req.params.id)[0]
        res.render('change', {todo: todo, error: true})
      })
    } else {
      const id = req.params.id;
      fs.readFile("./data/database.json", (err, data) => {
        if (err) throw err;
  
        const todos = JSON.parse(data);
        const updated = todos.filter(todo => todo.id != id) || []
  
        let todo = todos.filter(todo => todo.id == id)[0]
  
        todo = {
          id: id,
          name: form.name,
          description: form.description,
          done: form.done
        };
  
        updated.push(todo);
        fs.writeFile("./data/database.json", JSON.stringify(updated), (err) => {
          if (err) throw err;
  
          fs.readFile("./data/database.json", (err, data) => {
           if (err) throw err;
  
          res.render("main");
          });
          res.redirect('/');
        });
      });
    }
  });

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`The port number ofthis app is ${PORT}`);
});

function id() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

