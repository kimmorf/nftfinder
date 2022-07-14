/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OnReactionHandler } from '../types';

/**
 * Welcome Questions Module
 * ---
 * The bot will keep track of the reactions to a message to assign users certain roles which then adds them to the relevant channels
 */

type LanguageObject = {
  [key: string]: string;
};

const LANGUAGES: LanguageObject = {
  stone: '989323346284003349'
};

// Make sure to update this message ID when bot generates a new one
const LANGUAGES_MESSAGE_ID = '993393447929118741';

export const onReactionAdd: OnReactionHandler = async (
  client,
  reaction,
  user
) => {
  const { message } = reaction;
  // if message isn't the welcome message, exit
  if (message.id !== LANGUAGES_MESSAGE_ID) {
      // console.log('msg is NOT in the bot channel message');
    return;
  } else {
    // console.log('msg is in the bot channel message');
  }

  // If reaction isn't one of the ones provided above, exit

  if (!Object.keys(LANGUAGES).includes(reaction.emoji.name!)) {
    // console.log('emoji is NOT in there');
    return;
  } else {
    // console.log('emoji is in there');
    if(user.id != '993368890979651684'){
      switch (reaction.emoji.name) {
        case 'stone':
          client.users.fetch(user.id).then((user) => {
            user.send(`Pau no cu de quem ta lendo, e o ${user.username} está sofrendo.`);
            reaction.users.remove(user.id);
            client.user?.setUsername('sexo sexo')
           });

          break;
      
        default:
          break;
      }
   
    // message.reactions.removeAll()
  }
    
  }
  

  // Now we've certified a valid emoji and message ID, assign role to user
  // const member = await message
  //   .guild!.members.fetch(user.id)
  //   .catch((err) => console.log(err.message));
  // if (!member) return;

  // const language = LANGUAGES[reaction.emoji.toString().split(':')[1]];
  // member.roles.add(language).catch((err) => console.log(err.message));
  // client.users.fetch('').then((user) => {
  //   user.send('hello world');
  //  });
  // console.log("do search!");
  
};

export const onReactionRemove: OnReactionHandler = async (
  client,
  reaction,
  user
) => {
  const { message } = reaction;
  // if message isn't the welcome message, exit
  if (message.id !== LANGUAGES_MESSAGE_ID) {
    console.log('msg is NOT in the welcome channel');
    return;
  } else {
    console.log('msg is in the welcome channel');
  }

  // If reaction isn't one of the ones provided above, exit
  if (!Object.keys(LANGUAGES).includes(reaction.emoji.name!)) {
    console.log('emoji is NOT in there');
    return;
  } else {
    console.log('emoji is in there');
  }

  // Now we've certified a valid emoji and message ID, assign role to user
  // const member = await message
  //   .guild!.members.fetch(user.id)
  //   .catch((err) => console.log(err.message));
  // if (!member) return;

  // const language = LANGUAGES[reaction.emoji.toString().split(':')[1]];
  // member.roles.remove(language).catch((err) => console.log(err.message));
};
