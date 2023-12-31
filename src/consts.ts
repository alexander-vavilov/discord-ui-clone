import WumpusSad from './assets/wumpus/sad.svg'
import WumpusPending from './assets/wumpus/pending.svg'
import WumpusMiner from './assets/wumpus/miner.svg'
import WumpusWaiting from './assets/wumpus/waiting.svg'

export const wumpus = {
  all: {
    image: WumpusSad,
    message: "No one's around to play with Wumpus."
  },
  online: {
    image: WumpusSad,
    message: "No one's around to play with Wumpus."
  },
  pending: {
    image: WumpusPending,
    message: "There are no pending friend requests. Here's Wumpus for now."
  },
  blocked: {
    image: WumpusMiner,
    message: "You can't unblock the Wumpus."
  },
  add: {
    image: WumpusWaiting,
    message: 'Wumpus is waiting on friends. You don’t have to though!'
  }
}

export const colors = [
  '#2271B3',
  '#F3A505',
  '#317F43',
  '#6C7156',
  '#705335',
  '#FF7514',
  '#84C3BE',
  '#57A639',
  '#C1876B',
  '#DE4C8A'
]
