import React from "react";


export default function List() {
   
    const [list, setList] = React.useState(
        ['run','bike', 'swim']
    ) 

    const [checkedItems, setCheckedItems] = React.useState({})

    function addTodo (formData) {
        const newTodo = formData.get("todo")


        if (!list.includes(newTodo)) {
            setList(prevList => [...prevList, newTodo]);
        } else {
            alert("That item already exists.");
        }
         
    }


    
    function handleDelete (itemToDelete) {
        setList (prevList => prevList.filter(item => item !== itemToDelete))
    }

    function handleToggle (item) {
        setCheckedItems (prev => ({
            ...prev,
            [item]: !prev[item]
        }))
    }



    const listItems = list.map (item => (
      <li key={item} className={checkedItems[item] ? "completed" : ''} >{item}
         <input 
         type="checkbox"
         checked = {checkedItems[item] || false}
         onChange={() => handleToggle(item)} 
         />
         <button className="delete" onClick={() => handleDelete(item)}>❌</button>
         </li>   
    ))

 

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
        <hr />

        {list.length > 0 ? <section>
            <h2>ToDo Items</h2>
            <ul className="todo-list">{listItems}</ul> 
            
            </section>:null}
    </main>
)

}