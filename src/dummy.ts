import { personType } from './types'
import { nanoid } from 'nanoid'
import MinecraftActivityImage from './assets/activity-icons/minecraft.jpg'
import LeagueOfLegendsActivityImage from './assets/activity-icons/lol.jpg'
import { randomColor } from './utils'
import MidjourneyServerImage from './assets/servers-images/midjourney.jpg'
import BelugaServerImage from './assets/servers-images/beluga.jpg'
import AnimeSoulServerImage from './assets/servers-images/anime-soul.jpg'
import LamaDevServerImage from './assets/servers-images/lama-dev.jpg'
import JoshTriedCodingServerImage from './assets/servers-images/josh-tried-coding.jpg'

export const servers = [
  {
    name: 'midjourney',
    image: MidjourneyServerImage,
    id: nanoid()
  },
  {
    name: 'beluga',
    image: BelugaServerImage,
    id: nanoid()
  },
  {
    name: 'anime soul discord',
    image: AnimeSoulServerImage,
    id: nanoid()
  },
  {
    name: 'lama dev',
    image: LamaDevServerImage,
    id: nanoid()
  },
  {
    name: 'joshTriedDiscord',
    image: JoshTriedCodingServerImage,
    id: nanoid()
  }
]

export const friends: personType[] = [
  {
    displayName: 'Mio_Fun',
    username: 'mio_fun',
    status: 'online',
    image:
      'https://cdn.discordapp.com/avatars/466297893289197584/94f2eb87540ce65901e44df4bfe73c2f.webp?size=80',
    color: randomColor(),
    uid: nanoid()
  },
  {
    displayName: 'John',
    username: 'John',
    status: 'online',
    color: randomColor(),
    image: null,
    uid: nanoid()
  },
  {
    displayName: 'Mike',
    username: 'mike',
    status: 'pending',
    image:
      'https://cdn.discordapp.com/avatars/466297893289197584/94f2eb87540ce65901e44df4bfe73c2f.webp?size=80',
    color: randomColor(),
    uid: nanoid()
  },
  {
    displayName: 'Ivan',
    username: 'ivan_22',
    status: 'online',
    image: null,
    color: randomColor(),
    uid: nanoid(),
    currentActivity: {
      name: 'Minecraft',
      duration: 2000,
      icon: MinecraftActivityImage
    }
  },
  {
    displayName: 'Joe',
    username: 'joe_223',
    status: 'online',
    image:
      'https://cdn.discordapp.com/avatars/466297893289197584/94f2eb87540ce65901e44df4bfe73c2f.webp?size=80',
    color: randomColor(),
    uid: nanoid(),
    currentActivity: {
      name: 'Rust',
      duration: 36000,
      icon: null
    }
  },
  {
    displayName: 'Someone',
    username: 'someone_432fds',
    status: 'online',
    image:
      'https://cdn.discordapp.com/avatars/466297893289197584/94f2eb87540ce65901e44df4bfe73c2f.webp?size=80',
    color: randomColor(),
    uid: nanoid(),
    currentActivity: {
      name: 'League of Legends',
      duration: 25000,
      icon: LeagueOfLegendsActivityImage
    }
  },
  {
    displayName: '^_^',
    username: 'fdjsklf_fdsfds',
    status: 'pending',
    image:
      'https://cdn.discordapp.com/avatars/466297893289197584/94f2eb87540ce65901e44df4bfe73c2f.webp?size=80',
    color: randomColor(),
    uid: nanoid()
  },
  {
    displayName: '(:(',
    username: 'sad_smile',
    status: 'blocked',
    image: null,
    color: randomColor(),
    uid: nanoid()
  },
  {
    displayName: 'AAAHHHHhh',
    username: 'ahahah',
    status: 'blocked',
    image:
      'https://cdn.discordapp.com/avatars/466297893289197584/94f2eb87540ce65901e44df4bfe73c2f.webp?size=80',
    color: randomColor(),
    uid: nanoid()
  }
]
