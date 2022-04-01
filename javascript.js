var choices = document.getElementById("buttons");
var items = document.getElementById("items");
function removeItems() {
    items.innerHTML = "";
}
function start() {
    window.setTimeout(removeItems, 2000);
    fade();
}
function fade() {
    fadeOut();
}  
function fadeOut() {
    document.getElementById('items').style.opacity = '0';
    document.getElementById('buttons').style.opacity = '0';
    window.setTimeout(fadeIn, 2000);
}
function fadeIn() {
    document.getElementById('items').style.opacity = '1';
    document.getElementById('buttons').style.opacity = '1';
    changeStory();
}
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
    }

};

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
