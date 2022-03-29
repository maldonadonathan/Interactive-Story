var items = document.getElementById("items");
function removeItems() {
    items.innerHTML = "";
    addText();
}

var story = {
    prologue: {
        text: "The battle between man and dragon has long since ended. In the world of Lusefell, only a few dragons remain, yet they are the most ferocious. Killing one used to be just a sport; now, dragonslayers are hailed as gods. No one dared interfere with them until the King of Athena decided to make his move on the only known dragon that still roamed the surface, Nidhogg the Eternal.", 
        options: [["Continue"]]
    }

};


function addText() {
    text.innerHTML = story.prologue.text
}