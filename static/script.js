var container = document.getElementById('container')
var submitBtn = document.createElement('input')
var board = document.getElementById('board').innerHTML
submitBtn.type = 'submit'
var form = document.createElement('form')
form.method = 'post'

container.append(form)

board = {
    [7, 8, 0, 4, 0, 0, 1, 2, 0]
    [6, 0, 0, 0, 7, 5, 0, 0, 9]
    [0, 0, 0, 6, 0, 1, 0, 7, 8]
    [0, 0, 7, 0, 4, 0, 2, 6, 0]
    [0, 0, 1, 0, 5, 0, 9, 3, 0]
    [9, 0, 4, 0, 6, 0, 0, 0, 5]
    [0, 7, 0, 3, 0, 0, 0, 1, 2]
    [1, 2, 0, 0, 0, 7, 4, 0, 0]
    [0, 4, 9, 2, 0, 6, 0, 0, 7]

}

for (let i = 0; i < 80; i++) {
   var inputNum = document.createElement('input')
   inputNum.type = 'number'
   inputNum.value = board[0]
    container.firstChild.appendChild(inputNum)

}
