const { hasDailyLimit, isPetFood } = require('./util');

const ItemType = require('../../../items/types').Item;

function createBaseItem(imageId, value, price, base='etc') {
	return { type: ItemType.Task, size: 1, src: `${base}/${imageId}`, value, price };
}

module.exports = {
	141001: createBaseItem(82, 0, 0),
	141002: createBaseItem(87, 0, 0),
	141003: createBaseItem(87, 0, 0),
	141004: createBaseItem(87, 0, 0),
	141005: createBaseItem(87, 0, 0),
	141006: createBaseItem(87, 0, 0),
  141007: { type: ItemType.Task, src: 'tasks/4', size: 1, value: 0 },
  141008: { type: ItemType.Task, src: 'tasks/3', size: 1, value: 0 },
  141009: { type: ItemType.Task, src: 'etc/bombs/20', size: 1, value: 0 },
  141010: createBaseItem(109, 0, 0, 'gems'),
	141011: createBaseItem(36, 0, 0, 'tasks/master'),
  141012: createBaseItem(43, 0, 0, 'tasks/master'),
  141013: createBaseItem(42, 0, 0, 'tasks/master'),

	148023: createBaseItem(64, 0, 0, 'tasks'), // Kebab Flavored Chips
	148024: createBaseItem(65, 0, 0, 'tasks'), // ANBU Mask
	148025: createBaseItem(66, 0, 0, 'tasks'), // Family Badge
	148026: createBaseItem(67, 0, 0, 'tasks'), // Secret Letter
	148027: createBaseItem(68, 0, 0, 'tasks'), // Shogi
	148028: createBaseItem(69, 0, 0, 'tasks'), // First Aid Kit
	148029: createBaseItem(70, 0, 0, 'tasks'), // Puppet
	148030: createBaseItem(71, 0, 0, 'tasks'), // Kunai
	148031: createBaseItem(72, 0, 0, 'tasks'), // Scroll Of Seal
	148032: createBaseItem(73, 0, 0, 'tasks'), // Organization Money
	148033: createBaseItem(74, 0, 0, 'tasks'), // Landscape Painting
	148034: createBaseItem(75, 0, 0, 'tasks'), // Nutrition Pills
	148035: createBaseItem(76, 0, 0, 'tasks'), // Explosive Seal
	148036: createBaseItem(77, 0, 0, 'tasks'), // Mysterious Weapon Bags
	148037: createBaseItem(78, 0, 0, 'tasks'), // Scroll of Spiritual Weapons
	148038: createBaseItem(79, 0, 0, 'tasks'), // Jinchuriki´s Note
	148039: createBaseItem(80, 0, 0, 'tasks'), // Contract for Summoning
	148040: createBaseItem(81, 0, 0, 'tasks'), // Forbiden Scroll
}