const Stat = require('../../../lines').Stat;

module.exports = {
	Config: {
		itemsPerDay: 25,
		itemsPerTurnIn: 4,
		amityGainedPerTurnIn: 30,
		soulLevelLimits: [25, 25, 25, 36, 36, 51, 71, 71]
	},
	Limits: {
		1: { //Body Enlargement Technique
			level: 20, // Choji Akimichi
			item: 148023,
			amity: 30,
			avatar: 16,
			stats: [23, 11, 23], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 2], [Stat.Toughness, 43], [Stat.Strength, 30]]
		},
		2: { //House of Fliying Blades
			level: 20, // Tenten
			item: 148023,
			amity: 30,
			avatar: 63,
			stats: [18, 13, 24], // str, agi, sta
			bonus: [[Stat.SkillAdd6, 2], [Stat.Defense, 53], [Stat.Defense_Break, 47]]
		},
		3: { //BeastMan Clone
			level: 25, // Kiba Inuzuka
			item: 148024,
			amity: 210,
			avatar: 17,
			stats: [18, 25, 12], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 2], [Stat.Pierce, 47], [Stat.Dodge, 30]]
		},
		4: { //Insect Control
			level: 28, // Shino Aburame
			item: 148024,
			amity: 210,
			avatar: 18,
			stats: [12, 23, 23], // str, agi, sta
			bonus: [[Stat.SkillAdd6, 2], [Stat.Defense, 53], [Stat.Speed_Multiplier, 37]]
		},
		5: { //Byakugan
			level: 26, // Hinata Hyuga
			item: 148025,
			amity: 210,
			avatar: 37,
			stats: [23, 20, 13], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 2], [Stat.Agility, 30], [Stat.Critical_Multiplier, 30]]
		},
		6: { //Byakugan
			level: 31, // Neji Hyuga
			item: 148025,
			amity: 210,
			avatar: 22,
			stats: [20, 20, 20], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 2], [Stat.Hit, 47], [Stat.Stamina, 30]]
		},
		7: { //Inmunity to Poison
			level: 26, // Shizune
			item: 148026,
			amity: 210,
			avatar: 39,
			stats: [12, 14, 30], // str, agi, sta
			bonus: [[Stat.SkillAdd9, 2], [Stat.Stamina, 30], [Stat.Max_Hp_Multiplier, 37]]
		},
		8: { //Snakes: Hidden in the Shadows
			level: 31, // Anko Mitarashi
			item: 148026,
			amity: 210,
			avatar: 61,
			stats: [13, 25, 22], // str, agi, sta
			bonus: [[Stat.SkillAdd7, 2], [Stat.Max_Hp_Multiplier, 47], [Stat.Hit, 47]]
		},
		9: { //Shadow Imitation
			level: 36, // Shikamaru Nara
			item: 148027,
			amity: 720,
			avatar: 19,
			stats: [18, 24, 50], // str, agi, sta
			bonus: [[Stat.SkillAdd8, 3], [Stat.Parry_Multiplier, 44], [Stat.Defense, 77]]
		},
		10: { //Mountain Storm
			level: 43, // Asuma Sarutobi
			item: 148027,
			amity: 720,
			avatar: 20,
			stats: [38, 35, 25], // str, agi, sta
			bonus: [[Stat.SkillAdd0, 3], [Stat.Speed_Multiplier, 55], [Stat.Defense_Break, 69]]
		},
		11: { //Wooden Tomb
			level: 39, // Yamato
			item: 148027,
			amity: 720,
			avatar: 24,
			stats: [33, 29, 33], // str, agi, sta
			bonus: [[Stat.SkillAdd2, 3], [Stat.Hit, 69], [Stat.Dodge, 44]]
		},
		12: { //Concuciusness Transfer
			level: 37, // Ino Yamanaka
			item: 148028,
			amity: 720,
			avatar: 60,
			stats: [31, 24, 38], // str, agi, sta
			bonus: [[Stat.SkillAdd8, 3], [Stat.Stamina, 44], [Stat.Pierce, 69]]
		},
		13: { //Eye of Mind
			level: 41, // Karin
			item: 148028,
			amity: 720,
			avatar: 114,
			stats: [15, 45, 35], // str, agi, sta
			bonus: [[Stat.SkillAdd9, 3], [Stat.Dodge, 44], [Stat.Strength, 63]]
		},
		14: { //Cherry Storm
			level: 46, // Sakura Haruno
			item: 148028,
			amity: 720,
			avatar: 58,
			stats: [24, 20, 55], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 3], [Stat.Stamina, 63], [Stat.Pierce, 55]]
		},
		15: { //FlameThrower
			level: 46, // Sasori
			item: 148028,
			amity: 720,
			avatar: 23,
			stats: [32, 23, 45], // str, agi, sta
			bonus: [[Stat.SkillAdd6, 3], [Stat.Stamina, 44], [Stat.Critical_Multiplier, 44]]
		},
		16: { //Blade Dance
			level: 37, // temari
			item: 148029,
			amity: 720,
			avatar: 62,
			stats: [32, 32, 30], // str, agi, sta
			bonus: [[Stat.SkillAdd4, 3], [Stat.Hit, 69], [Stat.Attack_Multiplier, 55]]
		},
		17: { //Cursed Land
			level: 42, // Kazuzu
			item: 148029,
			amity: 720,
			avatar: 103,
			stats: [42, 20, 35], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 3], [Stat.Strength, 44], [Stat.Parry_Multiplier, 44]]
		},
		18: { //Demonic Crystal Ice Mirrors
			level: 37, // Haku
			item: 148030,
			amity: 720,
			avatar: 64,
			stats: [22, 38, 33], // str, agi, sta
			bonus: [[Stat.SkillAdd1, 3], [Stat.Hit, 69], [Stat.Agility, 44]]
		},
		19: { //Demonic Illusion: Deadly Tree Bind
			level: 41, // Kurenai Yuhi
			item: 148030,
			amity: 720,
			avatar: 36,
			stats: [16, 35, 45], // str, agi, sta
			bonus: [[Stat.SkillAdd8, 3], [Stat.Defense, 43], [Stat.Defense, 44]] //In RU is "Defense 77" only 1 stat
		},
		20: { //Shadow Clone Technique
			level: 46, // Naruto Uzumaki
			item: 148030,
			amity: 720,
			avatar: 45,
			stats: [45, 32, 23], // str, agi, sta
			bonus: [[Stat.SkillAdd4, 3], [Stat.Defense_Break, 69], [Stat.Hit, 69]]
		},
		21: { //Cosmic Resurrection
			level: 54, // 2nd Hokage
			item: 148030,
			amity: 2100,
			avatar: 50,
			stats: [40, 63, 55], // str, agi, sta
			bonus: [[Stat.SkillAdd1, 4], [Stat.Speed_Multiplier, 75], [Stat.Parry_Multiplier, 60]]
		},
		22: { //Prophet
			level: 74, // 3rd Hokage
			item: 148030,
			amity: 4500,
			avatar: 53,
			stats: [60, 88, 86], // str, agi, sta
			bonus: [[Stat.SkillAdd9, 5], [Stat.Stamina, 80], [Stat.Speed_Multiplier, 100]]
		},
		23: { //Huge Rasengan
			level: 37, // 4th Hokage
			item: 148030,
			amity: 4500,
			avatar: 56,
			stats: [92, 84, 52], // str, agi, sta
			bonus: [[Stat.SkillAdd4, 5], [Stat.Hit, 127], [Stat.Critical_Multiplier, 80]]
		},
		24: { //Beast Clay
			level: 56, //Deidara
			item: 148030,
			amity: 2100,
			avatar: 105,
			stats: [50, 70, 40], // str, agi, sta
			bonus: [[Stat.SkillAdd2, 4], [Stat.Hit, 96], [Stat.Attack_Multiplier, 75]]
		},
		25: { //Blood Obsession
			level: 52, // Hidan
			item: 148030,
			amity: 2100,
			avatar: 104,
			stats: [68, 32, 56], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 4], [Stat.Max_Hp_Multiplier, 75], [Stat.Dodge, 60]]
		},
		26: { //Shark Prison
			level: 60, // Kisame Hoshigaki
			item: 148030,
			amity: 2100,
			avatar: 107,
			stats: [65, 35, 65], // str, agi, sta
			bonus: [[Stat.SkillAdd1, 4], [Stat.Max_Hp_Multiplier, 75], [Stat.Defense_Break, 96]]
		},
		27: { //Hidden Mist
			level: 58, // 5th Misukage
			item: 148030,
			amity: 2100,
			avatar: 44,
			stats: [54, 54, 54], // str, agi, sta
			bonus: [[Stat.SkillAdd1, 4], [Stat.Hit, 96], [Stat.Hit, 96]] //in RU is Double "Hit 96" 
		},
		28: { //Hidden Ink
			level: 41, // Sai
			item: 148030,
			amity: 2100,
			avatar: 112,
			stats: [58, 32, 65], // str, agi, sta
			bonus: [[Stat.SkillAdd8, 4], [Stat.Defense_Break, 96], [Stat.Defense, 107]]
		},
		29: { //Paper Messenger of God
			level: 54, // Konan
			item: 148030,
			amity: 2100,
			avatar: 108,
			stats: [58, 60, 40], // str, agi, sta
			bonus: [[Stat.SkillAdd0, 4], [Stat.Dodge, 60], [Stat.Pierce, 96]]
		},
		30: { //Konoha Vortex
			level: 51, // Rock Lee
			item: 148030,
			amity: 2100,
			avatar: 21,
			stats: [52, 51, 52], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 4], [Stat.Hit, 96], [Stat.Agility, 60]]
		},
		31: { //Water Meat Grinder
			level: 56, // Suigetsu
			item: 148030,
			amity: 4500,
			avatar: 113,
			stats: [68, 52, 40], // str, agi, sta
			bonus: [[Stat.SkillAdd1, 4], [Stat.Critical_Multiplier, 60], [Stat.Dodge, 60]]
		},
		32: { //Berserk Mode
			level: 60, // Jugo
			item: 148030,
			amity: 4500,
			avatar: 115,
			stats: [38, 65, 65], // str, agi, sta
			bonus: [[Stat.SkillAdd5, 4], [Stat.Agility, 60], [Stat.Strength, 87]]
		},
		33: { //Kyuby Eye
			level: 58, // Kyuby Naruto
			item: 148030,
			amity: 4500,
			avatar: 98,
			stats: [38, 59, 65], // str, agi, sta
			bonus: [[Stat.SkillAdd0, 4], [Stat.Dodge, 60], [Stat.Stamina, 60]]	
		},
		34: { //2nd Stage Sharingan
			level: 60, // Uchiha Sasuke
			item: 148030,
			amity: 4500,
			avatar: 48,
			stats: [65, 65, 35], // str, agi, sta
			bonus: [[Stat.SkillAdd3, 4], [Stat.Defense_Break, 96], [Stat.Speed_Multiplier, 75]]
		},
		35: { //3rd Stage Sharingan
			level: 73, // Kakashi
			item: 148030,
			amity: 4500,
			avatar: 47,
			stats: [78, 77, 77], // str, agi, sta
			bonus: [[Stat.SkillAdd3, 5], [Stat.Parry_Multiplier, 80], [Stat.Dodge, 80]]
		},
		36: { //Hell Swamp
			level: 75, // Jirayja
			item: 148030,
			amity: 4500,
			avatar: 57,
			stats: [88, 98, 50], // str, agi, sta
			bonus: [[Stat.SkillAdd0, 5], [Stat.Agility, 80], [Stat.Attack_Multiplier, 100]]
		},
		37: { //Divine Healing
			level: 75, // Tsunade
			item: 148030,
			amity: 4500,
			avatar: 72,
			stats: [51, 90, 95], // str, agi, sta
			bonus: [[Stat.SkillAdd9, 5], [Stat.Critical_Multiplier, 80], [Stat.Max_Hp_Multiplier, 100]]
		},
		38: { //Devastation
			level: 72, // Gaara
			item: 148030,
			amity: 4500,
			avatar: 46,
			stats: [84, 48, 98], // str, agi, sta
			bonus: [[Stat.SkillAdd2, 5], [Stat.Strength, 80], [Stat.Defense, 142]]
		},
		39: { //Rinnegan
			level: 82, // Pain
			item: 148030,
			amity: 4500,
			avatar: 106,
			stats: [70, 120, 90], // str, agi, sta
			bonus: [[Stat.SkillAdd8, 6], [Stat.Dodge, 100], [Stat.Stamina, 100]]
		},
		40: { //Mangekyo Sharingan
			level: 81, // Uchiha Itachi
			item: 148030,
			amity: 4500,
			avatar: 49,
			stats: [90, 120, 70], // str, agi, sta
			bonus: [[Stat.SkillAdd8, 6], [Stat.Defense_Break, 158], [Stat.Dodge, 100]]
		},
		41: { //Mangekyo Sharingan
			level: 84, // Hebi Sasuke
			item: 148030,
			amity: 4500,
			avatar: 111,
			stats: [120, 90, 70], // str, agi, sta
			bonus: [[Stat.SkillAdd3, 6], [Stat.Hit, 158], [Stat.Defense_Break, 158]]
		},
		42: { //Inmortality
			level: 81, // Orochimaru
			item: 148030,
			amity: 4500,
			avatar: 51,
			stats: [70, 80, 120], // str, agi, sta
			bonus: [[Stat.SkillAdd7, 6], [Stat.Defense, 177], [Stat.Max_Hp_Multiplier, 125]]
		},
		43: { //Six Path Seal
			level: 84, // Sage Naruto
			item: 148030,
			amity: 4500,
			avatar: 109,
			stats: [120, 70, 90], // str, agi, sta
			bonus: [[Stat.SkillAdd4, 6], [Stat.Strength, 100], [Stat.Parry_Multiplier, 100]]
		},
		44: { //Toad Mouth Trap
			level: 82, // Sage Jirayja
			item: 148030,
			amity: 4500,
			avatar: 110,
			stats: [90, 70, 120], // str, agi, sta
			bonus: [[Stat.SkillAdd0, 6], [Stat.Defense, 177], [Stat.Critical_Multiplier, 100]]
		},
	},
	Souls: {
		1: {
			stat: Stat.Defense,
			levels: [12, 20, 34, 53, 77, 107, 142, 178]
		},
		2: {
			stat: Stat.Defense_Break,
			levels: [11, 18, 30, 47, 69, 96, 127, 159]
		},
		3: {
			stat: Stat.Dodge,
			levels: [7, 12, 19, 30, 44, 60, 80, 101]
		},
		4: {
			stat: Stat.Hit,
			levels: [11, 18, 30, 47, 69, 96, 127, 159]
		},
		5: {
			stat: Stat.Critical,
			levels: [7, 12, 19, 30, 44, 60, 80, 101]
		},
		6: {
			stat: Stat.Toughness,
			levels: [10, 17, 28, 43, 63, 87, 115, 144]
		},
		7: {
			stat: Stat.Max_Hp,
			levels: [12, 20, 34, 53, 77, 107, 142, 178]
		},
		8: {
			stat: Stat.Max_Mp,
			levels: [12, 20, 34, 53, 77, 107, 142, 178]
		},
		9: {
			stat: Stat.Pierce,
			levels: [11, 18, 30, 47, 69, 96, 127, 159]
		},
		10: {
			stat: Stat.Parry_Multiplier,
			levels: [7, 12, 19, 30, 44, 60, 80, 101]
		},
		11: {
			stat: Stat.Min_Attack,
			levels: [4, 6, 10, 16, 23, 32, 42, 53]
		},
		12: {
			stat: Stat.Max_Attack,
			levels: [4, 6, 10, 16, 23, 32, 42, 53]
		},
		13: {
			stat: Stat.Speed_Multiplier,
			levels: [9, 15, 24, 37, 55, 75, 100, 125]
		},
	}
}