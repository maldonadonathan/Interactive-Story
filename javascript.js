var choices = document.getElementById("buttons");
var items = document.getElementById("items");
function removeItems() {
    items.innerHTML = "";
}
function fade() {
    window.setTimeout(fadeOut, 1000); //8 seconds
}  
function fadeOut() {
    document.getElementById('items').style.opacity = '0';
    document.getElementById('buttons').style.opacity = '0';
    window.setTimeout(removeItems, 2000);
    window.setTimeout(fadeIn, 2000);
}
function fadeIn() {
    document.getElementById('items').style.opacity = '1';
    document.getElementById('buttons').style.opacity = '1';
    addText()
}
var story = {

    prologue: {
        text: "The battle between man and dragon has long since ended. In the world of Lusefell, only a few dragons remain, yet they are the most ferocious. Killing one used to be just a sport; now, dragonslayers are hailed as gods. No one dared interfere with them until the King of Athena decided to make his move on the only known dragon that still roamed the surface, Nidhogg the Eternal.", 
        options: [["Continue"]]
    },
    intro: {
        text: "As a powerful mercenary, you reside in the humble Kingdom of Athena. However, the king reveres your talents, asking you to conquer a dragon–a foe to all humankind. You will be greatly rewarded, and it will show a great display of your honor. As you exit the Castle of Athena, you proceed to the local tavern to seek the assistance of only someone as noble as yourself, and you ponder who will accompany you on your quest to kill the dragon.", 
        options: [["Alone"], ["Mage"], ["Healer"], ["Defender"]]
    }
};
function addText() {
    document.getElementById("items").innerHTML = story.prologue.text
    button()
}
function button() {
    var button = document.createElement("button"); 
    button.innerHTML = story.prologue.options
    choices.appendChild(button);
}
