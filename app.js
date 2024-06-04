var ul = document.getElementById('show')
var input = document.getElementById('text')
var button = document.getElementById('btn')

button.addEventListener('click', function(){
    var li = document.createElement('li')
    var userText = document.createTextNode(input.value)
    li.appendChild(userText)

    var editBtn = document.createElement('button')
    editBtn.textContent = 'Edit a Note'
    editBtn.onclick = function() {
        var editText = prompt('Edit todo:', userText.textContent)
        if (editText) {
            userText.textContent = editText
        }
    }

    var deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete a Note'
    deleteBtn.onclick = function() {
        ul.removeChild(li)
    }

    li.appendChild(editBtn)
    li.appendChild(deleteBtn)

    ul.appendChild(li)

    if (input.value.trim() !== "") {
        li.insertBefore(document.createTextNode(input.value + ' '), input);
    } else {
        alert("Please Enter a Text Otherwise Your Note is Blank!");
    }
})