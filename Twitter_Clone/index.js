const talkBtn = document.getElementById('talk-btn')
const chatInput = document.getElementById('cha-input')



talkBtn.addEventListener('click', function(){
    console.log(chatInput.value)
    chatInput.value = ' '
})

