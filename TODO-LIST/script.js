function handleInput(){
            const list=document.getElementById("list")
            let inp_val=prompt("enter a task:")
            inp_val=inp_val.trim()
            if (inp_val!==""){
                const todo_container = document.createElement("div")
                todo_container.className = "todo-container"
                
                const todo_item=document.createElement("li")
                todo_item.innerText=inp_val
                const complete_btn=document.createElement("button")
                complete_btn.innerText="Complete"
                complete_btn.className = "action-btn"
                complete_btn.addEventListener("click",()=>{
                    handleCompleted(todo_item)
                    complete_btn.innerText="Completed"
                })
                const edit_btn=document.createElement("button")
                edit_btn.className="edit-btn action-btn"
                edit_btn.innerText="Edit"
                edit_btn.onclick=()=>{
                    const edited=prompt("Edit Your Todo:",todo_item.innerText)
                    if (edited!==null){
                        todo_item.innerText=edited.trim()
                        edit_btn.innerText="Edited"
                    }
                }
                const del_btn=document.createElement("button")
                del_btn.innerText="Delete"
                del_btn.className="del-btn action-btn"
                del_btn.onclick=()=>{
                    list.removeChild(todo_container)
                }

                todo_container.append(todo_item, complete_btn, edit_btn, del_btn)
                list.appendChild(todo_container)
            }
        }
        function handleCompleted(param){
            param.style.textDecoration="line-through"
            param.style.color="green"
 }