function partner() {
    var who = ""
    if (progress.includes("mage")) {
        who = new "Azriel Snow";
    } else if (progress.includes("healer")) {
        return "Valentine Ryall";
    } else if (progress.includes("defender")) {
        return "Rodor the Admired";
    }
}


var choices = document.getElementById("buttons");
var items = document.getElementById("items");
function removeItems() {
    items.innerHTML = "";
}
function start() {
    window.setTimeout(removeItems, 000);
    fade();
}
function fade() {
    fadeOut();
}  
function fadeOut() {
    document.getElementById('items').style.opacity = '0';
    document.getElementById('buttons').style.opacity = '0';
    window.setTimeout(fadeIn, 000);
}
function fadeIn() {
    document.getElementById('items').style.opacity = '1';
    document.getElementById('buttons').style.opacity = '1';
    changeStory();
}
function addText(text) {
    document.getElementById("items").innerHTML = text;

}

function button(text, buttonText) {
    var button = document.createElement("button"); 
    button.innerHTML = text;
    choices.appendChild(button);
    button.addEventListener("click", function() {
        fade();
        progress.push(buttonText);
    });
}

var progress = ["prologue"]

function changeStory() {
    for (let i of progress) {
        addText(story[i].text);
        choices.innerHTML = "";
        backgroundChange();
        partner(); 
        for (let amountOfOptions = 0; amountOfOptions < story[i].options.length; amountOfOptions++) {
            button(story[i].options[amountOfOptions][0], story[i].options[amountOfOptions][1]);
        }
    }
}
document.body.style.backgroundImage = "url('Images/wooden_wall.jpg')";
function backgroundChange() {
    if (progress.includes("prologue")) {
        document.body.style.backgroundImage = "url('Images/castle.jpg')";
    }  
    if (progress.includes("tarven")) {
        document.body.style.backgroundImage = "url('Images/tarven.jpg')";
    }
};


var story = {

    prologue: {
        text: "The battle between man and dragon has long since ended. In the world of Lusefell, only a few dragons remain, yet they are the most ferocious. Killing one used to be just a sport; now, dragonslayers are hailed as gods. No one dared interfere with them until the King of Athena decided to make his move on the only known dragon that still roamed the surface, Nidhogg the Eternal.", 
        options: [["Continue", "intro"]]
    },
    intro: {
        text: "As a powerful mercenary, you reside in the humble Kingdom of Athena. However, the king reveres your talents, asking you to conquer a dragon–a foe to all humankind. You will be greatly rewarded, and it will show a great display of your honor. As you exit the Castle of Athena, you proceed to the local tavern to seek the assistance of only someone as noble as yourself, and you ponder who will accompany you on your quest to kill the dragon.", 
        options: [["Continue", "tarven"]]
    },
    tarven: {
        text: "As you enter the Tarnstead Tavern, three adventurers pique your interest. The first adventurer clocks himself in blue robes and emits a magical aura. The second adventurer yields a divine presence and wears a priest-like attire with a cross necklace. Lastly, the last one arms himself with heavy armor, a mighty greatsword, and a great shield.", 
        options: [["Alone", "alone"], ["Mage", "mage"], ["Healer", "healer"], ["Defender", "defender"]]
    },
    alone: {
        text: "Alone: Even though these three adventurers seem strong, you decided the journey would be easier if you traveled alone. You will also get all the reward and glory all to yourself.",
        options: [["Continue", "warlock"]]
    },
    mage: {
        text: "You have selected the noble Azriel Snow, a powerful mage who will accompany you on your journey to save the kingdom.",
        options: [["Continue", "warlock"]]
    },
    healer: {
        text: "You have selected the noble Valentine Ryall, a powerful healer who will accompany you on your journey to save the kingdom.",
        options: [["Continue", "warlock"]]
    },
    defender: {
        text: "You have selected Rodor the Admired, a powerful defender who will accompany you on your journey to save the kingdom.",
        options: [["Continue", "warlock"]]
    },
    warlock: {
        text: `You have just established your party and begun your journey into Whispering Woods's forest. The forest is relatively dense, and the only way forward was a narrow path. As you continue down the path ahead, you can see a humanoid figure blocking your path. As you approach closer, ${who} warns that it is a warlock, and he seems hostile.`,
    },

};