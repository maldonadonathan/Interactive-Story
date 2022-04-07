var story = {

    prologue: {
        text: `The battle between man and dragon has long since ended. In the world of Lusefell, only a few dragons remain, yet they are the most ferocious. Killing one used to be just a sport; now, dragonslayers are hailed as gods. No one dared interfere with them until the King of Athena decided to make his move on the only known dragon that still roamed the surface, Nidhogg the Eternal.`, 
        options: [[`Continue`, `intro`]]
    },
    intro: {
        text: `As a powerful mercenary, you reside in the humble Kingdom of Athena. However, the king reveres your talents, asking you to conquer a dragon–a foe to all humankind. You will be greatly rewarded, and it will show a great display of your honor. As you exit the Castle of Athena, you proceed to the local tavern to seek the assistance of only someone as noble as yourself, and you ponder who will accompany you on your quest to kill the dragon.`, 
        options: [[`Continue`, `tarven`]]
    },
    tarven: {
        text: `As you enter the Tarnstead Tavern, three adventurers pique your interest. The first adventurer clocks himself in blue robes and emits a magical aura. The second adventurer yields a divine presence and wears a priest-like attire with a cross necklace. Lastly, the last one arms himself with heavy armor, a mighty greatsword, and a great shield.`, 
        options: [[`Alone`, `alone`], [`Mage`, `mage`], [`Healer`, `healer`], [`Defender`, `defender`]]
    },
    alone: {
        text: `Even though these three adventurers seem strong, you decided the journey would be easier if you traveled alone. You will also get all the reward and glory all to yourself.`,
        options: [[`Continue`, `aloneWarlock`]]
    },
    mage: {
        text: `You have selected the noble Azriel Snow, a powerful mage who will accompany you on your journey to save the kingdom.`,
        options: [[`Continue`, `warlockMage`]]
    },
    healer: {
        text: `You have selected the noble Valentine Ryall, a powerful healer who will accompany you on your journey to save the kingdom.`,
        options: [[`Continue`, `warlock`]]
    },
    defender: {
        text: `You have selected Rodor the Admired, a powerful defender who will accompany you on your journey to save the kingdom.`,
        options: [[`Continue`, `warlock`]]
    },
    warlockMage: {
        text: `You have just established your party and begun your journey into Whispering Woods's forest. The forest is relatively dense, and the only way forward was a narrow path. As you continue down the path ahead, you can see a humanoid figure blocking your path. As you approach closer, Azriel warns that it is a warlock, and he seems hostile.`, 
        options: [[`Fight`, `fightMage`], [`Run`, `runMage`]]
    },
    fightMage: {
        text:`Your party decides to engage in combat with the warlock. You manage to trade some blows; however, his spells are too powerful for your team at your current level. At the last moment, you decided fleeing was the best option. However, as you run, the warlock places a curse on your partner without you knowing.`, 
        options: [[`Run`, `runMage`]]
    },
    runMage: {
        text: `Having just escaped death, you discuss how to proceed through this quest. While you are adamant about continuing down the path you have already started, your partner insists on finding a mentor.`, 
        options: [[`Mentor`, `mentorMage`], [`Different path`, `differentMage`]]
    },
    mentorMage: {
        text: `You agree with your partner, the party proceeds into Hazelfield, a quaint town located west of Athena. While the town is not particularly well-acclaimed, it is a popular area for traders to relax and rest located at the center of town. The town is rarely ever attacked since it is rumored that great rivals reside there–a witch and wizard.`, 
        options: [[`Continue`, `townMage`]]
    },
    townMage: {
        text:`As the party enters the town, the presence of a great tower instantly attracts your attention. You immediately realize that the wizard lives there. As you approach the tower, you see a small hut outside of town in the distance. `, 
        options: [[`Go to the wizard tower`, `towerMage`], [`Go to the hut`, `hutMage`]]
    },
    towerMage: {
        text:`You decide the wizard tower is more trustworthy than the ominous hut. When the party approaches the tower’s door, a voice speaks into your head. Telepathically, the wizard tells the party to enter. As you enter the building, you are greeted with a magical aura. A spiraling staircase leads to the top of the tower, and the wizard is slowly descending from the stairs. Sinclair the Great was his name. Having agreed with Azriel on finding a mentor, you ask to be an apprentice for Sinclair, and he accepts.`, 
        options: [[`Continue`, `trainingMageWizard`]]
    },
    hutMage: {
        text:`The wizard tower seems more trustworthy, but you are more willing to gain greater power by any means possible. You and Azriel proceed to the hut. You are greeted by Vanessa Vonner, the witch that rivals the wizard. Upon hearing your request, she accepts it in an instant.`,
        options: [[`Continue`, `trainingMageWitch`]]
    },
    trainingMageWizard: {
        text: `During the training, you told the mentor on your journey to save the kingdom by killing the dragon. Amused by it, the wizard joins your party to help slay the dragon.`, 
        options: [[`Continue`, `warlockMageWizard`]]
    },
    trainingMageWitch: {
        text: `During the training, you told the mentor on your journey to save the kingdom by killing the dragon. Amused by it, the witch joins your party to help slay the dragon.`, 
        options: [[`Continue`, `warlockMageWitch`]]
    },
    warlockMageWizard: {
        text: `Your party finishes the training and leaves Hazelfield to continue into the Whispering Woods. On the road back, you are ambushed by goblins. Thanks to your training, you can test your new profound strength. Just as you dispose of the last goblin, the warlock makes his return.`, 
        options: [[`Continue`, `fightMageWizard`]]
    },
    warlockMageWitch: {
        text: `Your party finishes the training and leaves Hazelfield to continue into the Whispering Woods. On the road back, you are ambushed by goblins. Thanks to your training, you can test your new profound strength. Just as you dispose of the last goblin, the warlock makes his return.`, 
        options: [[`Continue`, `fightMageWitch`]]
    },
    fightMageWizard: {
        text: `Fireball and dark magic launch from either side. The battle was one-sided since only the spellcaster was able to attack. The fight lasted until the warlock cast Eldritch Blast, heavily injuring the wizard. Fighting until his last breath, he pleads for mercy but is only met with laughter… The warlock, your previous enemy, has killed Sinclair the Great. Filled with rage, you charge at the warlock with all your might, and in a bloody battle, you slay the warlock. The tragic death of Sinclair motivates the party to continue on.`, 
        options: [[`Continue`, `dragontailMageWizard`]]
    },
    fightMageWitch: {
        text: `With the witch's presence, you felt no sense of bloodlust coming from the warlock. If anything, he seems almost friendly. It appears as if she killed the warlock to gain your trust. The witch motions to the warlock, and with the speed of lightning, he is launched into the sky, falling to meet his tragic demise eventually`, 
        options: [[]]
    },
    dragontailMageWizard: {
        text: `After conquering Whispering Wood your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 

    }
};

var partner = "partner"


function who() {
    if (progress.includes("mage")) {
        partner = "Azriel"
    } else if (progress.includes("healer")) {
        partner = "Valentine"
    } else if (progress.includes("defender")) {
        partner = "Rodor"
    }
    console.log(partner)
}
var progress = ["prologue"]

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
        who();
        fade();
        progress.push(buttonText);
    });
}

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



