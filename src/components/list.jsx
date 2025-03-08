import React from "react";


export default function List() {

    const [list, setList] = React.useState(
        ['run','bike', 'swim']
    ) 


    const listItems = list.map (item => (
      <li key={item}>{item} <input type="checkbox" /></li>
        
        
    ))

    function addTodo (formData) {
        const newTodo = formData.get("todo")
        setList (prevList => [...prevList, newTodo])
    }

return (
    <main>
        <form action={addTodo} className="add-todo-form">
            <input
              type="text" 
              placeholder="e.g. go for run" 
              aria-label="Add Todo" 
              name="todo"/>

              <button>Add ToDo</button>
        </form>

        {list.length > 0 ? <section>
            <h2>ToDo Items</h2>
            <ul className="todo-list">{listItems}</ul> 
            
            </section>:null}
    </main>
)

}