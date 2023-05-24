/* PRETTY PRINT FUNCTION
 COPIED FROM ELSEWHERE */


 

const shellIntro = 'HTML Terminal created by sajid so call it salminal !<br><br>Type  --help<br><br>'
const botIntro = "Welcome to BOT mode !!!<br>This is just a prototype with only few responses<br>You can type 'exit' to leave chat<br>You can start by hey,hi,intro etc<br><br>"
const botExit = 'Bot mode exit!<br><br>'
console.log("🚀 ~ file: terminal.js:10 ~ botExit:", botExit)

const data = [
    {
        t: '--help',
        r: `Welcome<br>This is a simple terminal using some html css and Js !<br>
    I'm just a beginner dev !!<br>
    Use the following commands to explore this website !!!<br><br>about >> To know about me<br>exit >> To exit the terminal<br>bot >> To talk to my ChatBot <br>clear >> To clear the terminal window<br>status >> To know my current status`
    },
    {
        t: 'about',
        r: `I've nothing much to say about myself<br>I'm just a normal boy upgrading myself & looks like it's gonna take me years for that hehe....`
    },
    {
        t: 'status',
        r: `I'm Fine. I'm currently studying MBBS 1st year in MCOMS, Pokhara.`
    },
    {
        t: 'image',
        r: 'oh yeah! Here comes the ugly one'
    },
    {
        t: '',
        r: 'No Command Found'
    }
]

const botdata = [
    {
        t: 'hi',
        r: 'Hi how are you doing?'
    },
    {
        t: 'hey',
        r: 'hello, im sajid'
    },
    {
        t: 'bot',
        r: 'Im still a prototype'
    },
    {
        t: 'who',
        r: 'im terminal'
    },
    {
        t: 'intro',
        r: 'Im terminal created by sajid'
    },
    {
        t: 'nice',
        r: 'pleasure'
    },
    {
        t: '',
        r: 'Nothing found'
    },
    {
        t: 'study',
        r: 'Mbbs first year in MCOMS, Pokhara'
    },
    {
        t: 'doing',
        r: 'Mbbs first year in MCOMS, Pokhara'
    },
    {
        t: 'where',
        r: 'Pokhara'
    },
    {
        t: 'exit',
        r: 'Bot mode exit!'
    }
]


function printSentence(id, sentence, speed) {
    let index = 0;
    let element = document.getElementById(id);
    let timer = setInterval(function () {
        const char = sentence[index];
        if (char === '<') {
            index = sentence.indexOf('>', index);
        }
        let terminal = document.querySelector('.terminal-shell')

        //FOR SMOOTH SCROLL
        terminal.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        element.innerHTML = ` ${sentence.slice(0, index)}<br><br>`
        if (++index === sentence.length + 1) {
            clearInterval(timer);
        }
        element.id = ''
    }, speed);
}

//INITIAL INTROS
function clearShell() {
    $('.terminal-shell').html('')
}

function addTextToShell(text) {
    $('.terminal-shell').append(`<div>${text}</div>`)
}

function createNode() {
    $('.terminal-shell').append('<p id="dollar">$ </p><input class="input" type="text"/>')

    $('input').attr({
        'autocomplete': 'none',
        'autocapitalize': 'off'
    })
}

addTextToShell(shellIntro)
createNode()

//EXIT BUTTON EVENT
$('.btn').on('click', (e) => {
    e.preventDefault();
    window.history.back();
})

//CHECKING ACTIONS
botMode = false

function checkActions(txt) {
    if (txt == 'clear') {
        clearShell()
        return true

    } else if (txt == 'exit') {

        if (botMode) {
            botMode = false
            clearShell()
            addTextToShell(botExit)
            return true

        } else {
            $('.btn').click()
        }

    } else if (txt == 'bot') {
        botMode = true
        clearShell()
        addTextToShell(botIntro)
        return true
    }
}

//GETTING RESPONSES
function getResp(t, bot = false) {
    if (bot) {
        for (i = 0; i < botdata.length; i++) {
            if (t.includes(botdata[i].t)) {
                return botdata[i].r
            }
        }
    } else {
        for (i = 0; i < data.length; i++) {
            if (data[i].t == t) {
                return data[i].r
            }
        }
    }
    return 'No Command Found'
}

//DELAY FUNCTION FOR NEW NODE
function waitUntil(text, speed) {
    length = text.length + 5
    time = length * speed
    return time
}

//GET INPUT COMMANDS
let speed = 50

function keyEvent(e) {
    if (e.keyCode == 13) {
        userCommand = $('input').val()
        $('.input').remove()
        $('#dollar').remove()

        if (!checkActions(userCommand)) {
            userResponse = getResp(userCommand, botMode)
            addTextToShell(`<p id="command">$ ${userCommand}</p><p id="response"></p>`)

            printSentence('response', userResponse, speed)
        }

        time = waitUntil(userResponse, speed)

        setTimeout(() => {
            createNode()

            clicked = false
            toggleKeyboard()
        }, time)

        console.log($('.terminal-shell').html())
    }
}

//TOGGLE KEYBOARD ON SHELL
function toggleKeyboard() {
    if (clicked) {
        $('input').blur()
        clicked = false
    } else {
        $('input').focus()
        $('input')[0].click()
        clicked = true
    }

    $('input').unbind('keyup')
    $('input').bind('keyup', keyEvent)
}

let clicked = false
$('.terminal-shell').on('click', toggleKeyboard)
