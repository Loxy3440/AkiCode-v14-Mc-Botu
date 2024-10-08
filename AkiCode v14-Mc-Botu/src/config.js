module.exports = {
  token: 'MTI4Nzc5MzQ0OTg3MzA1MTcxMA.GTLVJ6.LRT8FeLeMTNiu8DtYcmhdxp5q-9a8BgMHTIsZY',
    ownerId: '943140235179622500',
    guildId: '1287794711817490534',
    prefix: '.',
    cooldowns: {
      mine: 20000,
      sell: 60000,
      upgrade: 300000,
      enchant: 3600000,
      openBox: 86400000
    },
    items: {
      stone: { name: 'Taş', value: 1 },
      iron: { name: 'Demir', value: 5 },
      gold: { name: 'Altın', value: 10 },
      diamond: { name: 'Elmas', value: 50 },
      dragonEgg: { name: 'Ejderha Yumurtası', value: 1000 }
    },
    enchants: {
      speed: { name: 'Hız', effect: 0.5, cost: 1000 },
      fortune: { name: 'Şans', effect: 1.5, cost: 5000 }
    },
    upgrades: {
      pickaxe: {
        levels: [
          { name: 'Taş Kazma', cost: 0, multiplier: 1 },
          { name: 'Demir Kazma', cost: 1000, multiplier: 1.5 },
          { name: 'Altın Kazma', cost: 5000, multiplier: 2 },
          { name: 'Elmas Kazma', cost: 20000, multiplier: 3 }
        ]
      }
    },
    boxCost: 10000,
    boxRewards: ['stone', 'iron', 'gold', 'diamond', 'dragonEgg']
  };
