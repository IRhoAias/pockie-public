const { Effect } = require(".");
const { CombatEffect, EffectRemoveType } = require("./util");

module.exports = class Poison extends CombatEffect {
  removeType = EffectRemoveType.DURATION;
  damage = 0.03;
  
  constructor(target, duration, damage) {
    super(target, Effect.POISON);

    this.duration = Math.floor(duration * Math.max(1 - target.stats.resistance.duration.poison / 100, 0.9));
    this.damage = damage;
  }

  add() {}

  activate(action) {
    let dmg = 0;

    if (this.target.decDamage < 100) {
      if (this.target.hasEffect(Effect.FROZEN)) {
        dmg = this.target.maxHp * (this.damage / 100) * (0 - this.target.decDamage / 100);
      } else {
        dmg = this.target.maxHp * (this.damage / 100) * (1 - this.target.decDamage / 100);
      }
    } else {
      dmg = 0;
    }

    dmg = Math.floor(dmg);

    this.fight.damage(this.target.target, this.target, dmg);
    action.selfLastDamage = dmg;
  }

  remove() {}
}