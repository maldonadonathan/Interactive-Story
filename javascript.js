var story = {

    prologue: {
        text: `The battle between man and dragon has long since ended. In the world of Lusefell, only a few dragons remain, yet they are the most ferocious. Killing one used to be just a sport; now, dragonslayers are hailed as gods. No one dared interfere with them until the King of Athena decided to make his move on the only known dragon that still roamed the surface, Nidhogg the Eternal.`, 
        options: [[`Continue`, `intro`]]
    },
    intro: {
        text: `As a powerful mercenary, you reside in the humble Kingdom of Athena. However, the king reveres your talents, asking you to conquer a dragon–a foe to all humankind. You will be greatly rewarded, and it will show a great display of your honor. As you exit the Castle of Athena, you proceed to the local tavern to seek the assistance of only someone as noble as yourself, and you ponder who will accompany you on your quest to kill the dragon.`, 
        options: [[`Continue`, `tarven`]]
    },

    theEnd:{
        text: `The End`,
        options: [[`Restart`, 'prologue']]
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
        options: [[`Continue`, `warlockHealer`]]
    },
    defender: {
        text: `You have selected Rodor the Admired, a powerful defender who will accompany you on your journey to save the kingdom.`,
        options: [[`Continue`, `warlockDefender`]]
    },

    //MAGE Mentor
    warlockMage: {
        text: `You have just established your party and begun your journey into Whispering Woods's forest. The forest is relatively dense, and the only way forward was a narrow path. As you continue down the path ahead, you can see a humanoid figure blocking your path. As you approach closer, Azriel warns that it is a warlock, and he seems hostile.`, 
        options: [[`Fight`, `fightMage`], [`Run`, `runMage`]]
    },
    fightMage: {
        text:`Your party decides to engage in combat with the warlock. You manage to trade some blows; however, his spells are too powerful for your team at your current level. At the last moment, you decided fleeing was the best option. However, as you run, the warlock places a curse on your partner without you knowing.`, 
        options: [[`Run`, `runFightMage`]]
    },
    runFightMage: {
        text:`Having just escaped death, you discuss how to proceed through this quest. While you are adamant about continuing down the path you have already started, your partner insists on finding a mentor.`, 
        options: [[`Mentor`, `mentorMage`], [`Different path`, `rundifferentMage`]]
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
        options: [[`Continue`, `dragontailMageWitch`]]
    },
    dragontailMageWizard: {
        text: `After conquering Whispering Wood your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 
        options: [[`Continue`, `dragonFightMageWizard`]]
    },
    dragonFightMageWizard: {
        text: `The dragon is sleeping, but you struggle to empathize with such a beast. The walls are decorated in the bodies of his past foes, and his moat was drenched in the blood of his enemies. Killing him, you realized, would be a favor to humanity. You begin to hover over him, yet he wakes up before you can slash his throat. He attempts to strike your chest with a single claw, and as you struggle to get back on your feet, Azriel uses a Chaos Bolt and hits the dragon, knocking him down instantaneously. While you have every opportunity to conquer the dragon, Azriel continues in their plague of doom. He casts Lightning Bolt. A giant lightning bolt appeared in his hand, and with a throwing motion, it launched at the dragon, piercing through the tough dragon hide. The walls are now painted red, and you defeated the dragon. Finally, having accomplished your mission, you head back to the castle to meet the King. You possess a dragon's fang, and it is enough for the King to deem you as a dragonslayer. The public now reveres you, and the dragon has been slain—the end.`, 
        options: [[]]
    }, 
    dragontailMageWitch: {
        text: `After conquering Whispering Wood your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 
        options: [[`Continue`, `betrayMage`]]
    }, 
    betrayMage: {
        text:`Yet before you can make your first attack on the dragon, the witch stops you and Azriel. With an evil grim smile on her, she lets out an evil laugh. “You guys have made my journey to the dragon so much easier.” She said, and this is when you realize she has been using us. She quickly places her hand on the dragon and casts Dominate Monster. Nidhogg rose and let out a furious roar, and looked at us. “Join me or be obliterated!”`, 
        options: [[`Join the witch`, `joinMage`], [`Refuse`, `refuseMage`]]
    }, 
    joinMage: {
        text:`With you and Azriel’s life on the line, you decide joining her will be the best option. You became an adventurer for the thrill of adventuring, not to become a hero. Vanessa motions to Nidhogg, and he lowers his body. You got on his neck, and the dragon began to take off. In the sky, you can see the world of Lusefell, and from this view, you realize that one day, this world will become your own.`, 
        options: [[]]
    },
    refuseMage: {
        text: `Yet your only goal is to seek adventure; there will be no more adventures if the world were to be destroyed. You refused her offer. Enraged, both Vanessa and the dragon began their attack. The battle starts with you and Azriel preparing for a counterattack.`, 
        options:[[`Attack the dragon first`, `firstMage`], [`Attack the witch`, `witchMage`]]
    },
    firstMage: {
        text: `You told Azriel to fend off attacks from the witch while you attack Nidhogg. The dragon attacks with a breath of fire. You could avoid it with your fast agility, and you started running up to him. Getting closer to the dragon, you attack with powerful blows on his body and arms. The dragon let out a huge roar, and quickly, you climbed on top of the dragon. Desperately trying to shake you off, you stab your sword into the dragon to use as support. Slowly, you get to the dragon’s head, and your sword pierces through the dragon’s head with one last attack. The witch remains defenseless and tired because of your Azriel’s attack. With one attack, you slay the witch as well. Finally, having accomplished your mission, you head back to the castle to meet the King. You possess a dragon's fang, and it is enough for the King to deem you and Azriel as a dragonslayer. Also, with the head of the witch, you are rewarded extra for the accomplishment. The public now reveres you, and the dragon has been slain—the end.`, 
        options: [[`Continue`, 'theEnd']]
    },
    witchMage: {
        text: `You have decided that killing the witch is more manageable and makes the fight with the dragon easier. With the support of Azriel, the battle became one-sided. Desperate, she launches spells at you. You dodge with success, and with one fell swoop, you slay the witch. Nidhogg, however, is no longer in control, regains consciousness, and unable to react, the dragon takes off. As the dragon's view becomes smaller and smaller, the dragon has escaped, and with no clue where he might be going, the quest has failed.`, 
        options: [[`Continue`, `theEnd`]]
    },



    // HEALER Mentor
    warlockHealer: {
        text: `You have just established your party and begun your journey into Whispering Woods's forest. The forest is relatively dense, and the only way forward was a narrow path. As you continue down the path ahead, you can see a humanoid figure blocking your path. As you approach closer, Valentine warns that it is a warlock, and he seems hostile.`, 
        options: [[`Fight`, `fightHealer`], [`Run`, `runHealer`]]
    },
    fightHealer: {
        text:`Your party decides to engage in combat with the warlock. You manage to trade some blows; however, his spells are too powerful for your team at your current level. At the last moment, you decided fleeing was the best option. However, as you run, the warlock places a curse on your partner without you knowing.`, 
        options: [[`Run`, `runHealer`]]
    },
    runHealer: {
        text: `Having just escaped death, you discuss how to proceed through this quest. While you are adamant about continuing down the path you have already started, your partner insists on finding a mentor.`, 
        options: [[`Mentor`, `mentorHealer`], [`Different path`, `differentHealer`]]
    },
    mentorHealer: {
        text: `You agree with your partner, the party proceeds into Hazelfield, a quaint town located west of Athena. While the town is not particularly well-acclaimed, it is a popular area for traders to relax and rest located at the center of town. The town is rarely ever attacked since it is rumored that great rivals reside there–a witch and wizard.`, 
        options: [[`Continue`, `townHealer`]]
    },
    townHealer: {
        text:`As the party enters the town, the presence of a great tower instantly attracts your attention. You immediately realize that the wizard lives there. As you approach the tower, you see a small hut outside of town in the distance. `, 
        options: [[`Go to the wizard tower`, `towerHealer`], [`Go to the hut`, `hutHealer`]]
    },
    towerHealer: {
        text:`You decide the wizard tower is more trustworthy than the ominous hut. When the party approaches the tower’s door, a voice speaks into your head. Telepathically, the wizard tells the party to enter. As you enter the building, you are greeted with a magical aura. A spiraling staircase leads to the top of the tower, and the wizard is slowly descending from the stairs. Sinclair the Great was his name. Having agreed with Valentine on finding a mentor, you ask to be an apprentice for Sinclair, and he accepts.`, 
        options: [[`Continue`, `trainingHealerWizard`]]
    },
    hutHealer: {
        text:`The wizard tower seems more trustworthy, but you are more willing to gain greater power by any means possible. You and Valentine proceed to the hut. You are greeted by Vanessa Vonner, the witch that rivals the wizard. Upon hearing your request, she accepts it in an instant.`,
        options: [[`Continue`, `trainingHealerWitch`]]
    },
    trainingHealerWizard: {
        text: `During the training, you told the mentor on your journey to save the kingdom by killing the dragon. Amused by it, the wizard joins your party to help slay the dragon.`, 
        options: [[`Continue`, `warlockHealerWizard`]]
    },
    trainingHealerWitch: {
        text: `During the training, you told the mentor on your journey to save the kingdom by killing the dragon. Amused by it, the witch joins your party to help slay the dragon.`, 
        options: [[`Continue`, `warlockHealerWitch`]]
    },
    warlockHealerWizard: {
        text: `Your party finishes the training and leaves Hazelfield to continue into the Whispering Woods. On the road back, you are ambushed by goblins. Thanks to your training, you can test your new profound strength. Just as you dispose of the last goblin, the warlock makes his return.`, 
        options: [[`Continue`, `fightHealerWizard`]]
    },
    warlockHealerWitch: {
        text: `Your party finishes the training and leaves Hazelfield to continue into the Whispering Woods. On the road back, you are ambushed by goblins. Thanks to your training, you can test your new profound strength. Just as you dispose of the last goblin, the warlock makes his return.`, 
        options: [[`Continue`, `fightHealerWitch`]]
    },
    fightHealerWizard: {
        text: `Fireball and dark magic launch from either side. The battle was one-sided since only the spellcaster was able to attack. The fight lasted until the warlock cast Eldritch Blast, heavily injuring the wizard. Fighting until his last breath, he pleads for mercy but is only met with laughter… The warlock, your previous enemy, has killed Sinclair the Great. Filled with rage, you charge at the warlock with all your might, and in a bloody battle, you slay the warlock. The tragic death of Sinclair motivates the party to continue on.`, 
        options: [[`Continue`, `dragontailHealerWizard`]]
    },
    fightHealerWitch: {
        text: `With the witch's presence, you felt no sense of bloodlust coming from the warlock. If anything, he seems almost friendly. It appears as if she killed the warlock to gain your trust. The witch motions to the warlock, and with the speed of lightning, he is launched into the sky, falling to meet his tragic demise eventually`, 
        options: [[`Continue`, `dragontailHealerWitch`]]
    },
    dragontailHealerWizard: {
        text: `After conquering Whispering Wood your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 
        options: [[`Continue`, `dragonFightHealerWizard`]]
    },
    dragonFightHealerWizard: {
        text: `The dragon is sleeping, but you struggle to empathize with such a beast. The walls are decorated in the bodies of his past foes, and his moat was drenched in the blood of his enemies. Killing him, you realized, would be a favor to humanity. You begin to hover over him, yet he wakes up before you can slash his throat. He strikes your chest with a single claw, and as he reaches for you, your sword penetrates through his hand. He falls back, and while on the ground, Valentine cures you with a Healing Word Spell. With your new vitality, you separate his head into two symmetrical halves. Finally, having accomplished your mission, you head back to the castle to meet the King. You possess a dragon's fang, and it is enough for the King to deem you as a dragonslayer. The public now reveres you, and the dragon has been slain—the end.`, 
        options: [[]]
    }, 
    dragontailHealerWitch: {
        text: `After conquering Whispering Wood your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 
        options: [[`Continue`, `betrayHealer`]]
    }, 
    betrayHealer: {
        text:`Yet before you can make your first attack on the dragon, the witch stops you and Valentine. With an evil grim smile on her, she lets out an evil laugh. “You guys have made my journey to the dragon so much easier.” She said, and this is when you realize she has been using us. She quickly places her hand on the dragon and casts Dominate Monster. Nidhogg rose and let out a furious roar, and looked at us. “Join me or be obliterated!”`, 
        options: [[`Join the witch`, `joinHealer`], [`Refuse`, `refuseHealer`]]
    }, 
    joinHealer: {
        text:`With you and Valentine ’s life on the line, you decide joining her will be the best option. You became an adventurer for the thrill of adventuring, not to become a hero. Vanessa motions to Nidhogg, and he lowers his body. You got on his neck, and the dragon began to take off. In the sky, you can see the world of Lusefell, and from this view, you realize that one day, this world will become your own.`, 
        options: [[]]
    },
    refuseHealer: {
        text: `Yet your only goal is to seek adventure; there will be no more adventures if the world were to be destroyed. You refused her offer. Enraged, both Vanessa and the dragon began their attack. The battle starts with you and Valentine preparing for a counterattack.`, 
        options:[[`Attack the dragon first`, `firstHealer`], [`Attack the witch`, `witchHealer`]]
    },
    firstHealer: {
        text: `You told Valentine to fend off attacks from the witch while you attack Nidhogg. The dragon attacks with a breath of fire. You could avoid it with your fast agility, and you started running up to him. Getting closer to the dragon, you attack with powerful blows on his body and arms. The dragon let out a huge roar, and quickly, you climbed on top of the dragon. Desperately trying to shake you off, you stab your sword into the dragon to use as support. Slowly, you get to the dragon’s head, and your sword pierces through the dragon’s head with one last attack. The witch remains defenseless and tired because of your Valentine’s attack. With one attack, you slay the witch as well. Finally, having accomplished your mission, you head back to the castle to meet the King. You possess a dragon's fang, and it is enough for the King to deem you and Valentine as a dragonslayer. Also, with the head of the witch, you are rewarded extra for the accomplishment. The public now reveres you, and the dragon has been slain—the end.`, 
        options: [[`Continue`, `theEnd`]]
    },
    witchHealer: {
        text: `You have decided that killing the witch is more manageable and makes the fight with the dragon easier. With the support of Valentine , the battle became one-sided. Desperate, she launches spells at you. You dodge with success, and with one fell swoop, you slay the witch. Nidhogg, however, is no longer in control, regains consciousness, and unable to react, the dragon takes off. As the dragon's view becomes smaller and smaller, the dragon has escaped, and with no clue where he might be going, the quest has failed.`, 
        options: [[`Continue`, `theEnd`]]
    }, 

    //DEFENDER Mentor
    warlockDefender: {
        text: `You have just established your party and begun your journey into Whispering Woods's forest. The forest is relatively dense, and the only way forward was a narrow path. As you continue down the path ahead, you can see a humanoid figure blocking your path. As you approach closer, Valentine warns that it is a warlock, and he seems hostile.`, 
        options: [[`Fight`, `fightDefender`], [`Run`, `runDefender`]]
    },
    fightDefender: {
        text:`Your party decides to engage in combat with the warlock. You manage to trade some blows; however, his spells are too powerful for your team at your current level. At the last moment, you decided fleeing was the best option. However, as you run, the warlock places a curse on your partner without you knowing.`, 
        options: [[`Run`, `runDefender`]]
    },
    runDefender: {
        text: `Having just escaped death, you discuss how to proceed through this quest. While you are adamant about continuing down the path you have already started, your partner insists on finding a mentor.`, 
        options: [[`Mentor`, `mentorDefender`], [`Different path`, `differentDefender`]]
    },
    mentorDefender: {
        text: `You agree with your partner, the party proceeds into Hazelfield, a quaint town located west of Athena. While the town is not particularly well-acclaimed, it is a popular area for traders to relax and rest located at the center of town. The town is rarely ever attacked since it is rumored that great rivals reside there–a witch and wizard.`, 
        options: [[`Continue`, `townDefender`]]
    },
    townDefender: {
        text:`As the party enters the town, the presence of a great tower instantly attracts your attention. You immediately realize that the wizard lives there. As you approach the tower, you see a small hut outside of town in the distance. `, 
        options: [[`Go to the wizard tower`, `towerDefender`], [`Go to the hut`, `hutDefender`]]
    },
    towerDefender: {
        text:`You decide the wizard tower is more trustworthy than the ominous hut. When the party approaches the tower’s door, a voice speaks into your head. Telepathically, the wizard tells the party to enter. As you enter the building, you are greeted with a magical aura. A spiraling staircase leads to the top of the tower, and the wizard is slowly descending from the stairs. Sinclair the Great was his name. Having agreed with Rodor on finding a mentor, you ask to be an apprentice for Sinclair, and he accepts.`, 
        options: [[`Continue`, `trainingDefenderWizard`]]
    },
    hutDefender: {
        text:`The wizard tower seems more trustworthy, but you are more willing to gain greater power by any means possible. You and Rodor proceed to the hut. You are greeted by Vanessa Vonner, the witch that rivals the wizard. Upon hearing your request, she accepts it in an instant.`,
        options: [[`Continue`, `trainingDefenderWitch`]]
    },
    trainingDefenderWizard: {
        text: `During the training, you told the mentor on your journey to save the kingdom by killing the dragon. Amused by it, the wizard joins your party to help slay the dragon.`, 
        options: [[`Continue`, `warlockDefenderWizard`]]
    },
    trainingDefenderWitch: {
        text: `During the training, you told the mentor on your journey to save the kingdom by killing the dragon. Amused by it, the witch joins your party to help slay the dragon.`, 
        options: [[`Continue`, `warlockDefenderWitch`]]
    },
    warlockDefenderWizard: {
        text: `Your party finishes the training and leaves Hazelfield to continue into the Whispering Woods. On the road back, you are ambushed by goblins. Thanks to your training, you can test your new profound strength. Just as you dispose of the last goblin, the warlock makes his return.`, 
        options: [[`Continue`, `fightDefenderWizard`]]
    },
    warlockDefenderWitch: {
        text: `Your party finishes the training and leaves Hazelfield to continue into the Whispering Woods. On the road back, you are ambushed by goblins. Thanks to your training, you can test your new profound strength. Just as you dispose of the last goblin, the warlock makes his return.`, 
        options: [[`Continue`, `fightDefenderWitch`]]
    },
    fightDefenderWizard: {
        text: `Fireball and dark magic launch from either side. The battle was one-sided since only the spellcaster was able to attack. The fight lasted until the warlock cast Eldritch Blast, heavily injuring the wizard. Fighting until his last breath, he pleads for mercy but is only met with laughter… The warlock, your previous enemy, has killed Sinclair the Great. Filled with rage, you charge at the warlock with all your might, and in a bloody battle, you slay the warlock. The tragic death of Sinclair motivates the party to continue on.`, 
        options: [[`Continue`, `dragontailDefenderWizard`]]
    },
    fightDefenderWitch: {
        text: `With the witch's presence, you felt no sense of bloodlust coming from the warlock. If anything, he seems almost friendly. It appears as if she killed the warlock to gain your trust. The witch motions to the warlock, and with the speed of lightning, he is launched into the sky, falling to meet his tragic demise eventually`, 
        options: [[`Continue`, `dragontailDefenderWitch`]]
    },
    dragontailDefenderWizard: {
        text: `After conquering Whispering Wood your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 
        options: [[`Continue`, `dragonFightDefenderWizard`]]
    },
    dragonFightDefenderWizard: {
        text: `The dragon is sleeping, but you struggle to empathize with such a beast. The walls are decorated in the bodies of his past foes, and his moat was drenched in the blood of his enemies. Killing him, you realized, would be a favor to humanity. You begin to hover over him, yet he wakes up before you can slash his throat. He attempts to strike your chest with a single claw, but Rodor shields you. While the dragon is distracted, your enchanted sword penetrates through his hand. He falls back, and while on the ground, you saw his head in half, separating his existence into two symmetrical halves. Finally, having accomplished your mission, you head back to the castle to meet the King. You possess a dragon's fang, and it is enough for the King to deem you as a dragonslayer. The public now reveres you, and the dragon has been slain—the end.`, 
        options: [[]]
    }, 
    dragontailDefenderWitch: {
        text: `After conquering Whispering Wood your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 
        options: [[`Continue`, `betrayDefender`]]
    }, 
    betrayDefender: {
        text:`Yet before you can make your first attack on the dragon, the witch stops you and Rodor. With an evil grim smile on her, she lets out an evil laugh. “You guys have made my journey to the dragon so much easier.” She said, and this is when you realize she has been using us. She quickly places her hand on the dragon and casts Dominate Monster. Nidhogg rose and let out a furious roar, and looked at us. “Join me or be obliterated!”`, 
        options: [[`Join the witch`, `joinDefender`], [`Refuse`, `refuseDefender`]]
    }, 
    joinDefender: {
        text:`With you and Rodor’s life on the line, you decide joining her will be the best option. You became an adventurer for the thrill of adventuring, not to become a hero. Vanessa motions to Nidhogg, and he lowers his body. You got on his neck, and the dragon began to take off. In the sky, you can see the world of Lusefell, and from this view, you realize that one day, this world will become your own.`, 
        options: [[]]
    },
    refuseDefender: {
        text: `Yet your only goal is to seek adventure; there will be no more adventures if the world were to be destroyed. You refused her offer. Enraged, both Vanessa and the dragon began their attack. The battle starts with you and Rodor preparing for a counterattack.`, 
        options:[[`Attack the dragon first`, `firstDefender`], [`Attack the witch`, `witchDefender`]]
    },
    firstDefender: {
        text: `You told Rodor to fend off attacks from the witch while you attack Nidhogg. The dragon attacks with a breath of fire. You could avoid it with your fast agility, and you started running up to him. Getting closer to the dragon, you attack with powerful blows on his body and arms. The dragon let out a huge roar, and quickly, you climbed on top of the dragon. Desperately trying to shake you off, you stab your sword into the dragon to use as support. Slowly, you get to the dragon’s head, and your sword pierces through the dragon’s head with one last attack. The witch remains defenseless and tired because of your Rodor’s attack. With one attack, you slay the witch as well. Finally, having accomplished your mission, you head back to the castle to meet the King. You possess a dragon's fang, and it is enough for the King to deem you and Rodor as a dragonslayer. Also, with the head of the witch, you are rewarded extra for the accomplishment. The public now reveres you, and the dragon has been slain—the end.`, 
        options: [
            ["Continue", "theEnd"]
        ]
    },
    witchDefender: {
        text: `You have decided that killing the witch is more manageable and makes the fight with the dragon easier. With the support of Rodor, the battle became one-sided. Desperate, she launches spells at you. You dodge with success, and with one fell swoop, you slay the witch. Nidhogg, however, is no longer in control, regains consciousness, and unable to react, the dragon takes off. As the dragon's view becomes smaller and smaller, the dragon has escaped, and with no clue where he might be going, the quest has failed.`, 
        options: [
            ["Continue", "theEnd"]
        ]
    },

    //Healer Path
    differentHealer: {
        text: `As you continue into another path of Whispering Woods, you encounter a golem-infested mountain range called The Hungry Peaks. Yet, you believe that your teams’ expertise could easily manage this threat. You disagree, but your partner ultimately decides that your decision is what is best for the team.`, 
        options: [[`Continue`, `climbHealer`]]
    }, 
    climbHealer: {
        text: `On the path upwards, your party encounters golems that hinder your progress. You and your partner manage to take out a few of them but while brawling them, your partner, unfortunately, ends up injured. The kingdom's fate is in jeopardy, and you struggle to reconcile with your team.`, 
        options: [[`Continue`, `healHealer`]]
    },
    healHealer: {
        text:`Valentine is, fortunately, able to heal herself with a cure wounds spell, drawing from her evocation abilities, and is instantaneously healed. With no more distractions left, you continue through The Hungry Peaks.`, 
        options: [[`Continue`, `peaksHealer`]]
    },
    peaksHealer: {
        text:`After conquering The Hungry Peaks, your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 
        options: [[`Continue`, `dragonFightHealerWizard`]]
    }, 

    //Mage Path
    differentMage: {
        text: `As you continue into another path of Whispering Woods, you encounter a golem-infested mountain range called The Hungry Peaks. Yet, you believe that your teams’ expertise could easily manage this threat. You disagree, but your partner ultimately decides that your decision is what is best for the team.`, 
        options: [[`Continue`, `climbMage`]]
    }, 
    climbMage: {
        text: `On the path upwards, your party encounters golems that hinder your progress. You and your partner manage to take out a few of them but while brawling them, your partner, unfortunately, ends up injured. The kingdom's fate is in jeopardy, and you struggle to reconcile with your team.`, 
        options: [[`Continue`, `peaksMage`]]
    },
    peaksMage: {
        text:`Azriel is badly injured, and without any medical knowledge, you have to decide if you want to continue through the mountain range.`,
        options:[[`Continue`, `injuryMage`]]
    },
    injuryMage: {
        text:`With your partner incredibly injured, you must now decide how to continue with your path to save the kingdom and whether you will carry your partner or rest deep within The Hungry Peaks.`, 
        options:[[`Carry`, `carryMage`], [`Rest`, `restMage`]]
    },
    carryMage: {
        text:`While carrying your partner down the mountain, you come across a giant golem. Your stealth is no match for his wit, and he swiftly approaches you. Because your partner is incapacitated, you have to fight alone. You strategically deal damage without getting hit with your swift movements against a slow target. With the last blow through the shiny blue core of the golem, it disassembles. You did it… you killed the giant golem. As the previous rock drops to the ground, you see a sword stuck to the rock. It seems like the adventurer who tried to kill the golem failed. Pulling out the sword and inspecting it, the sword looks legendary. The craftsmanship is incredible, and you decide the blade can be helpful too. You sheath the sword around your waist.`, 
        options: [[`Continue`, `leaveMage`]]
    }, 
    leaveMage: {
        text:`After conquering The Hungry Peaks, your party finally made it into another town—the Dragontail—named for being near the dragon’s den. The Dragontail is a popular place for adventurers to hang out. Quest board, finding guilds to join, and taverns to celebrate your victories. After you gather supplies that will help you in the battle you have ahead of you, you decide that it is finally time… You head to the dragon’s den. It is a massive cave on the side of the mountain. The mountain is scorched with withered trees and skeletons of humans and animals. As you enter the cave, the snoring of the dragon causes a breeze of wind to hit you. Descending, you see Nidhogg the Eternal in slumber. He has tough, crystal-like, black scales, with multiple holes in his wings from the countless battles he has been in. You know this will be a hard fight.`, 
        options: [[`Continue`, `dragonFightMageWizard`]]
    }, 
    restMage: {
        text:`You lay down your partner to rest. You began scrapping some equipment to make bandages to prevent any more blood from losing.`, 
        options: [[`Continue`, `hermitMage`]]
    },
    hermitMage: {
        text: ` The bandages seem to be doing a fine job keeping your partner alive, and from the corner of your eye, you notice a slight movement behind some piles of rock. A hermit emerges from the rock; he wears typical clothes with a brown cloak and a wooden walking stick. Old Man William was his name and approached the injured person. He waves his wooden stick, and the tip shines. In an instant, the wounds disappear, and Azriel is now in slumber. Thanking the older man, you began conversing with him about your journey.`, 
        options: [[`Continue`, ``]]
    },

    //If fought Warlock
    rundifferentMage: {
        text: `test`,
        options: [[]]
    }
};


var progress = ["prologue"]

var choices = document.getElementById("buttons");
var items = document.getElementById("items");

mybutton = document.getElementById("buttons");

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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
    if (progress.includes("tavern")) {
        document.body.style.backgroundImage = "url('Images/tavern.jpg')";
    }
    if (progress.includes("warlock")) {
        document.body.style.backgroundImage = "url('Images/whisperingWoods.jpg')";
    }
    // if (progress.includes("towerMage") || progress.includes("towerHealer") || progress.includes("towerDefender")) {
    //     document.body.style.backgroundImage = "url('Images/tower.jpg')";
    // }
};


