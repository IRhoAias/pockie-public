const { Item } = require("./items")

const Shop = {
	Normal_Max_Level_10: 1001,
	Normal_Max_Level_20: 1002,
	Normal_Max_Level_30: 1003,
	Normal_Max_Level_40: 1004,
	Normal_Max_Level_50: 1005,
	Normal_Max_Level_60: 1006,
	Normal_Max_Level_70: 1007,
	Normal_Max_Level_80: 1008,
	Normal_Max_Level_90: 1009,
	Mystic_Level_10: 2000,
	Black_Market_Level_10: 3000,
	Grocery: 4000,
	Pets: 5000,
	Food: 6000,
}

const Shops = {
	[Shop.Normal_Max_Level_10]: {
		refreshCost: 50,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: 400100, price: 100},
			{item: Item.WOODEN_CLUB, price: 111},
			{item: Item.WOLF_FANG_BAT, price: 141},
			{item: Item.KITCHEN_BLADE, price: 111},
			{item: Item.POWERFUL_PIERCE, price: 141},
			{item: Item.SWIPING_FISTS, price: 111},
			{item: Item.SHARP_BLADECLAWS, price: 141},
			{item: Item.CHILDS_ARMOR, price: 107},
			{item: Item.VILLAGE_ARMOR, price: 130},
			{item: Item.CHILDS_HAT, price: 100},
			{item: Item.CHILDS_SHOES, price: 109},
			{item: Item.BAMBOO_GLOVES, price: 119},
			{item: Item.BAMBOO_BELT, price: 122},
			{item: Item.WOODEN_CLUB, price: 111},
			{item: Item.WOLF_FANG_BAT, price: 141},
			{item: Item.KITCHEN_BLADE, price: 111},
			{item: Item.POWERFUL_PIERCE, price: 141},
			{item: Item.SWIPING_FISTS, price: 111},
			{item: Item.SHARP_BLADECLAWS, price: 141},
			{item: Item.CHILDS_ARMOR, price: 107},
			{item: Item.VILLAGE_ARMOR, price: 130},
			{item: Item.CHILDS_HAT, price: 100},
			{item: Item.CHILDS_SHOES, price: 109},
			{item: Item.BAMBOO_GLOVES, price: 119},
			{item: Item.BAMBOO_BELT, price: 122},
			{item: Item.WOODEN_CLUB, price: 111},
			{item: Item.WOLF_FANG_BAT, price: 141},
			{item: Item.KITCHEN_BLADE, price: 111},
			{item: Item.POWERFUL_PIERCE, price: 141},
			{item: Item.SWIPING_FISTS, price: 111},
			{item: Item.SHARP_BLADECLAWS, price: 141},
			{item: Item.CHILDS_ARMOR, price: 107},
			{item: Item.VILLAGE_ARMOR, price: 130},
			{item: Item.CHILDS_HAT, price: 100},
			{item: Item.CHILDS_SHOES, price: 109},
			{item: Item.BAMBOO_GLOVES, price: 119},
			{item: Item.BAMBOO_BELT, price: 122},
		
			{ item: 150337, price: 0 },
			{ item: 150338, price: 0 },
			{ item: 150339, price: 0 },
			{ item: 150429, price: 10 },
		]
	}, 
	[Shop.Normal_Max_Level_20]: {
		refreshCost: 64,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: Item.HAMMER_OF_BLESSING, price: 160},
			{item: Item.MYTHBEAST_BAT, price: 176},
			{item: Item.BONE_PIERCER, price: 160},
			{item: Item.TRENDY_TRIDENT, price: 176},
			{item: Item.RAVENOUS_WOLFCLAWS, price: 160},
			{item: Item.BANANA_FISTS, price: 176},
			{item: Item.VILLAGE_ARMOR, price: 130},
			{item: Item.IRONPLATE_ARMOR, price: 147},
			{item: Item.VIBRANT_GARMENT, price: 161},
			{item: Item.CHILDS_HAT, price: 100},
			{item: Item.IRON_WOK, price: 133},
			{item: Item.CHILDS_SHOES, price: 100},
			{item: Item.IRON_WARBOOTS, price: 133},
			{item: Item.BAMBOO_GLOVES, price: 119},
			{item: Item.PITCHERS_GLOVES, price: 145},
			{item: Item.BAMBOO_BELT, price: 122},
			{item: Item.PITCHERS_BELT, price: 148},

			{item: Item.HAMMER_OF_BLESSING, price: 160},
			{item: Item.MYTHBEAST_BAT, price: 176},
			{item: Item.BONE_PIERCER, price: 160},
			{item: Item.TRENDY_TRIDENT, price: 176},
			{item: Item.RAVENOUS_WOLFCLAWS, price: 160},
			{item: Item.BANANA_FISTS, price: 176},
			{item: Item.VILLAGE_ARMOR, price: 130},
			{item: Item.IRONPLATE_ARMOR, price: 147},
			{item: Item.VIBRANT_GARMENT, price: 161},
			{item: Item.CHILDS_HAT, price: 100},
			{item: Item.IRON_WOK, price: 133},
			{item: Item.CHILDS_SHOES, price: 100},
			{item: Item.IRON_WARBOOTS, price: 133},
			{item: Item.BAMBOO_GLOVES, price: 119},
			{item: Item.PITCHERS_GLOVES, price: 145},
			{item: Item.BAMBOO_BELT, price: 122},
			{item: Item.PITCHERS_BELT, price: 148},
			
			{item: Item.HAMMER_OF_BLESSING, price: 160},
			{item: Item.MYTHBEAST_BAT, price: 176},
			{item: Item.BONE_PIERCER, price: 160},
			{item: Item.TRENDY_TRIDENT, price: 176},
			{item: Item.RAVENOUS_WOLFCLAWS, price: 160},
			{item: Item.BANANA_FISTS, price: 176},
			{item: Item.VILLAGE_ARMOR, price: 130},
			{item: Item.IRONPLATE_ARMOR, price: 147},
			{item: Item.VIBRANT_GARMENT, price: 161},
			{item: Item.CHILDS_HAT, price: 100},
			{item: Item.IRON_WOK, price: 133},
			{item: Item.CHILDS_SHOES, price: 100},
			{item: Item.IRON_WARBOOTS, price: 133},
			{item: Item.BAMBOO_GLOVES, price: 119},
			{item: Item.PITCHERS_GLOVES, price: 145},
			{item: Item.BAMBOO_BELT, price: 122},
			{item: Item.PITCHERS_BELT, price: 148},
			
			{ item: 150337, price: 0 },
			{ item: 150338, price: 0 },
			{ item: 150339, price: 0 },
			{ item: 150429, price: 10 },
		]
	}, 
	[Shop.Normal_Max_Level_30]: {
		refreshCost: 74,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: Item.EARTHSHAKER_HAMMER, price: 190},
			{item: Item.PUNCHING_BAT, price: 203},
			{item: Item.WINDSTRIKE_SABER, price: 190},
			{item: Item.SEVERING_SLASH, price: 203},
			{item: Item.AZURE_FISTBLADE, price: 190},
			{item: Item.SHADOW_CLAW, price: 203},
			{item: Item.VIBRANT_GARMENT, price: 161},
			{item: Item.LIGHT_LEATHER_CHEST, price: 173},
			{item: Item.TURTLE_FAIRY_BEAST_ARMOR, price: 185},
			{item: Item.IRON_WOK, price: 133},
			{item: Item.LEATHER_CAP, price: 156},
			{item: Item.IRON_WARBOOTS, price: 138},
			{item: Item.LEATHER_BOOTS, price: 160},
			{item: Item.PITCHERS_GLOVES, price: 145},
			{item: Item.TURTLE_FAIRY_GLOVES, price: 166},
			{item: Item.PITCHERS_BELT, price: 148},
			{item: Item.TURTLE_FAIRY_BELT, price: 168},

			{item: Item.EARTHSHAKER_HAMMER, price: 190},
			{item: Item.PUNCHING_BAT, price: 203},
			{item: Item.WINDSTRIKE_SABER, price: 190},
			{item: Item.SEVERING_SLASH, price: 203},
			{item: Item.AZURE_FISTBLADE, price: 190},
			{item: Item.SHADOW_CLAW, price: 203},
			{item: Item.VIBRANT_GARMENT, price: 161},
			{item: Item.LIGHT_LEATHER_CHEST, price: 173},
			{item: Item.TURTLE_FAIRY_BEAST_ARMOR, price: 185},
			{item: Item.IRON_WOK, price: 133},
			{item: Item.LEATHER_CAP, price: 156},
			{item: Item.IRON_WARBOOTS, price: 138},
			{item: Item.LEATHER_BOOTS, price: 160},
			{item: Item.PITCHERS_GLOVES, price: 145},
			{item: Item.TURTLE_FAIRY_GLOVES, price: 166},
			{item: Item.PITCHERS_BELT, price: 148},
			{item: Item.TURTLE_FAIRY_BELT, price: 168},
			
			{item: Item.EARTHSHAKER_HAMMER, price: 190},
			{item: Item.PUNCHING_BAT, price: 203},
			{item: Item.WINDSTRIKE_SABER, price: 190},
			{item: Item.SEVERING_SLASH, price: 203},
			{item: Item.AZURE_FISTBLADE, price: 190},
			{item: Item.SHADOW_CLAW, price: 203},
			{item: Item.VIBRANT_GARMENT, price: 161},
			{item: Item.LIGHT_LEATHER_CHEST, price: 173},
			{item: Item.TURTLE_FAIRY_BEAST_ARMOR, price: 185},
			{item: Item.IRON_WOK, price: 133},
			{item: Item.LEATHER_CAP, price: 156},
			{item: Item.IRON_WARBOOTS, price: 138},
			{item: Item.LEATHER_BOOTS, price: 160},
			{item: Item.PITCHERS_GLOVES, price: 145},
			{item: Item.TURTLE_FAIRY_GLOVES, price: 166},
			{item: Item.PITCHERS_BELT, price: 148},
			{item: Item.TURTLE_FAIRY_BELT, price: 168},
			
			{item: 150337, price: 0},
			{item: 150338, price: 0},
			{item: 150339, price: 0},
			{ item: 150429, price: 10 },
		]
	},
	[Shop.Normal_Max_Level_40]: {
		refreshCost: 82,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: Item.STARLIGHT_STAFF, price: 215},
			{item: Item.OCTAGON_HAMMER, price: 226},
			{item: Item.SWIFT_SLICER, price: 215},
			{item: Item.CLOUDFLOW_SWORD, price: 226},
			{item: Item.GRIZZLY_CLAW, price: 215},
			{item: Item.RED_LOTUS_CLAW, price: 226},
			{item: Item.TURTLE_FAIRY_BEAST_ARMOR, price: 185},
			{item: Item.HIDDEN, price: 195},
			{item: Item.CAT_JERSEY, price: 205},
			{item: Item.LEATHER_CAP, price: 156},
			{item: Item.HIDDEN_TOWEL, price: 175},
			{item: Item.LEATHER_BOOTS, price: 160},
			{item: Item.HIDDEN_BOOTS, price: 179},
			{item: Item.TURTLE_FAIRY_GLOVES, price: 166},
			{item: Item.CAT, price: 184},
			{item: Item.TURTLE_FAIRY_BELT, price: 168},
			{item: Item.CAT_BELT, price: 186},

			{item: Item.STARLIGHT_STAFF, price: 215},
			{item: Item.OCTAGON_HAMMER, price: 226},
			{item: Item.SWIFT_SLICER, price: 215},
			{item: Item.CLOUDFLOW_SWORD, price: 226},
			{item: Item.GRIZZLY_CLAW, price: 215},
			{item: Item.RED_LOTUS_CLAW, price: 226},
			{item: Item.TURTLE_FAIRY_BEAST_ARMOR, price: 185},
			{item: Item.HIDDEN, price: 195},
			{item: Item.CAT_JERSEY, price: 205},
			{item: Item.LEATHER_CAP, price: 156},
			{item: Item.HIDDEN_TOWEL, price: 175},
			{item: Item.LEATHER_BOOTS, price: 160},
			{item: Item.HIDDEN_BOOTS, price: 179},
			{item: Item.TURTLE_FAIRY_GLOVES, price: 166},
			{item: Item.CAT, price: 184},
			{item: Item.TURTLE_FAIRY_BELT, price: 168},
			{item: Item.CAT_BELT, price: 186},
			
			{item: Item.STARLIGHT_STAFF, price: 215},
			{item: Item.OCTAGON_HAMMER, price: 226},
			{item: Item.SWIFT_SLICER, price: 215},
			{item: Item.CLOUDFLOW_SWORD, price: 226},
			{item: Item.GRIZZLY_CLAW, price: 215},
			{item: Item.RED_LOTUS_CLAW, price: 226},
			{item: Item.TURTLE_FAIRY_BEAST_ARMOR, price: 185},
			{item: Item.HIDDEN, price: 195},
			{item: Item.CAT_JERSEY, price: 205},
			{item: Item.LEATHER_CAP, price: 156},
			{item: Item.HIDDEN_TOWEL, price: 175},
			{item: Item.LEATHER_BOOTS, price: 160},
			{item: Item.HIDDEN_BOOTS, price: 179},
			{item: Item.TURTLE_FAIRY_GLOVES, price: 166},
			{item: Item.CAT, price: 184},
			{item: Item.TURTLE_FAIRY_BELT, price: 168},
			{item: Item.CAT_BELT, price: 186},
			
			{item: 150337, price: 0},
			{item: 150338, price: 0},
			{item: 150339, price: 0},
			{ item: 150429, price: 10 },

			{item: 333601, price: 0},
			{item: 333602, price: 0},
			{item: 333603, price: 0},
			{item: 333604, price: 0},
			{item: 333605, price: 0},
			{item: 333606, price: 0},
			{item: 333607, price: 0},

			{item: 333611, price: 0},
			{item: 333612, price: 0},
			{item: 333613, price: 0},
			{item: 333614, price: 0},
			{item: 333615, price: 0},
			{item: 333616, price: 0},
			{item: 333617, price: 0},

			{item: 333621, price: 0},
			{item: 333622, price: 0},
			{item: 333623, price: 0},
			{item: 333624, price: 0},
			{item: 333625, price: 0},
			{item: 333626, price: 0},
			{item: 333627, price: 0},
		]
	},
	[Shop.Normal_Max_Level_50]: {
		refreshCost: 90,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: Item.PUMPKIN_HAMMER, price: 236},
			{item: Item.BRAMBLE_BAT, price: 246},
			{item: Item.SUNSET_PIERCE, price: 236},
			{item: Item.KIKUMON_SWORD, price: 246},
			{item: Item.SILVERSHARK_CLAW, price: 236},
			{item: Item.WINDLING_CLAW, price: 246},
			{item: Item.CAT_JERSEY, price: 205},
			{item: Item.FIRE_CLOUD_ARMOR, price: 215},
			{item: Item.WIND_LAI, price: 223},
			{item: Item.HIDDEN_TOWEL, price: 175},
			{item: Item.FIRE_CLOUD_CAP, price: 192},
			{item: Item.HIDDEN_BOOTS, price: 179},
			{item: Item.FIRE_CLOUD_BOOTS, price: 195},
			{item: Item.CAT, price: 184},
			{item: Item.WIND_LINED_HAND, price: 200},
			{item: Item.CAT_BELT, price: 186},
			{item: Item.WIND_BID_BELT, price: 202},

			{item: Item.PUMPKIN_HAMMER, price: 236},
			{item: Item.BRAMBLE_BAT, price: 246},
			{item: Item.SUNSET_PIERCE, price: 236},
			{item: Item.KIKUMON_SWORD, price: 246},
			{item: Item.SILVERSHARK_CLAW, price: 236},
			{item: Item.WINDLING_CLAW, price: 246},
			{item: Item.CAT_JERSEY, price: 205},
			{item: Item.FIRE_CLOUD_ARMOR, price: 215},
			{item: Item.WIND_LAI, price: 223},
			{item: Item.HIDDEN_TOWEL, price: 175},
			{item: Item.FIRE_CLOUD_CAP, price: 192},
			{item: Item.HIDDEN_BOOTS, price: 179},
			{item: Item.FIRE_CLOUD_BOOTS, price: 195},
			{item: Item.CAT, price: 184},
			{item: Item.WIND_LINED_HAND, price: 200},
			{item: Item.CAT_BELT, price: 186},
			{item: Item.WIND_BID_BELT, price: 202},
			
			{item: Item.PUMPKIN_HAMMER, price: 236},
			{item: Item.BRAMBLE_BAT, price: 246},
			{item: Item.SUNSET_PIERCE, price: 236},
			{item: Item.KIKUMON_SWORD, price: 246},
			{item: Item.SILVERSHARK_CLAW, price: 236},
			{item: Item.WINDLING_CLAW, price: 246},
			{item: Item.CAT_JERSEY, price: 205},
			{item: Item.FIRE_CLOUD_ARMOR, price: 215},
			{item: Item.WIND_LAI, price: 223},
			{item: Item.HIDDEN_TOWEL, price: 175},
			{item: Item.FIRE_CLOUD_CAP, price: 192},
			{item: Item.HIDDEN_BOOTS, price: 179},
			{item: Item.FIRE_CLOUD_BOOTS, price: 195},
			{item: Item.CAT, price: 184},
			{item: Item.WIND_LINED_HAND, price: 200},
			{item: Item.CAT_BELT, price: 186},
			{item: Item.WIND_BID_BELT, price: 202},
			
			{item: 150337, price: 0},
			{item: 150338, price: 0},
			{item: 150339, price: 0},
		]
	},
	[Shop.Normal_Max_Level_60]: {
		refreshCost: 97,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: Item.RHAPSODY_HAMMER, price: 256},
			{item: Item.DRAGONFANG_HAMMER, price: 265},
			{item: Item.JADESHADE_SWORD, price: 256},
			{item: Item.NETHER_SLASH, price: 265},
			{item: Item.FLYWING_CLAW, price: 256},
			{item: Item.ANCHOR_FISTS, price: 265},
			{item: Item.WIND_LAI, price: 223},
			{item: Item.BEN_LEOPARD_LIGHT_ARMOR, price: 232},
			{item: Item.KING_KONG_ARMOR, price: 240},
			{item: Item.FIRE_CLOUD_CAP, price: 192},
			{item: Item.BEN_LEOPARD_HELMET, price: 208},
			{item: Item.FIRE_CLOUD_BOOTS, price: 195},
			{item: Item.LEOPARD_BOOTS, price: 211},
			{item: Item.WIND_LINED_HAND, price: 200},
			{item: Item.KING_KONG_GLOVES, price: 215},
			{item: Item.WIND_BID_BELT, price: 202},
			{item: Item.DIAMOND_BELT, price: 216},

			{item: Item.RHAPSODY_HAMMER, price: 256},
			{item: Item.DRAGONFANG_HAMMER, price: 265},
			{item: Item.JADESHADE_SWORD, price: 256},
			{item: Item.NETHER_SLASH, price: 265},
			{item: Item.FLYWING_CLAW, price: 256},
			{item: Item.ANCHOR_FISTS, price: 265},
			{item: Item.WIND_LAI, price: 223},
			{item: Item.BEN_LEOPARD_LIGHT_ARMOR, price: 232},
			{item: Item.KING_KONG_ARMOR, price: 240},
			{item: Item.FIRE_CLOUD_CAP, price: 192},
			{item: Item.BEN_LEOPARD_HELMET, price: 208},
			{item: Item.FIRE_CLOUD_BOOTS, price: 195},
			{item: Item.LEOPARD_BOOTS, price: 211},
			{item: Item.WIND_LINED_HAND, price: 200},
			{item: Item.KING_KONG_GLOVES, price: 215},
			{item: Item.WIND_BID_BELT, price: 202},
			{item: Item.DIAMOND_BELT, price: 216},
			
			{item: Item.RHAPSODY_HAMMER, price: 256},
			{item: Item.DRAGONFANG_HAMMER, price: 265},
			{item: Item.JADESHADE_SWORD, price: 256},
			{item: Item.NETHER_SLASH, price: 265},
			{item: Item.FLYWING_CLAW, price: 256},
			{item: Item.ANCHOR_FISTS, price: 265},
			{item: Item.WIND_LAI, price: 223},
			{item: Item.BEN_LEOPARD_LIGHT_ARMOR, price: 232},
			{item: Item.KING_KONG_ARMOR, price: 240},
			{item: Item.FIRE_CLOUD_CAP, price: 192},
			{item: Item.BEN_LEOPARD_HELMET, price: 208},
			{item: Item.FIRE_CLOUD_BOOTS, price: 195},
			{item: Item.LEOPARD_BOOTS, price: 211},
			{item: Item.WIND_LINED_HAND, price: 200},
			{item: Item.KING_KONG_GLOVES, price: 215},
			{item: Item.WIND_BID_BELT, price: 202},
			{item: Item.DIAMOND_BELT, price: 216},
			
			{item: 150337, price: 0},
			{item: 150338, price: 0},
			{item: 150339, price: 0},
		]
	},
	[Shop.Normal_Max_Level_70]: {
		refreshCost: 103,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: Item.SKY_SHOCK_PIERCER, price: 274},
			{item: Item.CRABHAMMER, price: 283},
			{item: Item.CLOUDBREAK_BLADE, price: 274},
			{item: Item.BLOODFIEND_SABER, price: 283},
			{item: Item.DEMON_RUNE_CLAW, price: 274},
			{item: Item.RESPECTED_CLAW, price: 283},
			{item: Item.KING_KONG_ARMOR, price: 240},
			{item: Item.HANYOU_WAR_ARMOR, price: 248},
			{item: Item.CANG_LING_WARFRAME, price: 256},
			{item: Item.BEN_LEOPARD_HELMET, price: 208},
			{item: Item.HANYOU_HELMET, price: 222},
			{item: Item.LEOPARD_BOOTS, price: 211},
			{item: Item.COLD_BARTER, price: 225},
			{item: Item.KING_KONG_GLOVES, price: 215},
			{item: Item.HANYOU_HANDLE, price: 229},
			{item: Item.DIAMOND_BELT, price: 216},
			{item: Item.COLD_BELT, price: 230},

			{item: Item.SKY_SHOCK_PIERCER, price: 274},
			{item: Item.CRABHAMMER, price: 283},
			{item: Item.CLOUDBREAK_BLADE, price: 274},
			{item: Item.BLOODFIEND_SABER, price: 283},
			{item: Item.DEMON_RUNE_CLAW, price: 274},
			{item: Item.RESPECTED_CLAW, price: 283},
			{item: Item.KING_KONG_ARMOR, price: 240},
			{item: Item.HANYOU_WAR_ARMOR, price: 248},
			{item: Item.CANG_LING_WARFRAME, price: 256},
			{item: Item.BEN_LEOPARD_HELMET, price: 208},
			{item: Item.HANYOU_HELMET, price: 222},
			{item: Item.LEOPARD_BOOTS, price: 211},
			{item: Item.COLD_BARTER, price: 225},
			{item: Item.KING_KONG_GLOVES, price: 215},
			{item: Item.HANYOU_HANDLE, price: 229},
			{item: Item.DIAMOND_BELT, price: 216},
			{item: Item.COLD_BELT, price: 230},
			
			{item: Item.SKY_SHOCK_PIERCER, price: 274},
			{item: Item.CRABHAMMER, price: 283},
			{item: Item.CLOUDBREAK_BLADE, price: 274},
			{item: Item.BLOODFIEND_SABER, price: 283},
			{item: Item.DEMON_RUNE_CLAW, price: 274},
			{item: Item.RESPECTED_CLAW, price: 283},
			{item: Item.KING_KONG_ARMOR, price: 240},
			{item: Item.HANYOU_WAR_ARMOR, price: 248},
			{item: Item.CANG_LING_WARFRAME, price: 256},
			{item: Item.BEN_LEOPARD_HELMET, price: 208},
			{item: Item.HANYOU_HELMET, price: 222},
			{item: Item.LEOPARD_BOOTS, price: 211},
			{item: Item.COLD_BARTER, price: 225},
			{item: Item.KING_KONG_GLOVES, price: 215},
			{item: Item.HANYOU_HANDLE, price: 229},
			{item: Item.DIAMOND_BELT, price: 216},
			{item: Item.COLD_BELT, price: 230},
			
			{item: 150337, price: 0},
			{item: 150338, price: 0},
			{item: 150339, price: 0},
		]
	},
	[Shop.Normal_Max_Level_80]: {
		refreshCost: 109,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: Item.AMYTHEST_AXE, price: 291},
			{item: Item.TIGER_HAMMER, price: 299},
			{item: Item.FISHBONE_SWORD, price: 291},
			{item: Item.GOLDBACK_SABER, price: 299},
			{item: Item.PINCER_FISTS, price: 291},
			{item: Item.STREAMRAW_CLAW, price: 299},
			{item: Item.CANG_LING_WARFRAME, price: 256},
			{item: Item.PURPLE_METEORITE_ARMOR, price: 263},
			{item: Item.BROKEN_LIGHT_ARMOR, price: 271},
			{item: Item.HANYOU_HELMET, price: 222},
			{item: Item.PURPLE_METEOR_HELMET, price: 235},
			{item: Item.COLD_BARTER, price: 225},
			{item: Item.PURPLE_BOOTS, price: 238},
			{item: Item.HANYOU_HANDLE, price: 229},
			{item: Item.PURPLE_METEOR_GLOVES, price: 242},
			{item: Item.COLD_BELT, price: 230},
			{item: Item.PURPLE_METEOR_BELT, price: 243},

			{item: Item.AMYTHEST_AXE, price: 291},
			{item: Item.TIGER_HAMMER, price: 299},
			{item: Item.FISHBONE_SWORD, price: 291},
			{item: Item.GOLDBACK_SABER, price: 299},
			{item: Item.PINCER_FISTS, price: 291},
			{item: Item.STREAMRAW_CLAW, price: 299},
			{item: Item.CANG_LING_WARFRAME, price: 256},
			{item: Item.PURPLE_METEORITE_ARMOR, price: 263},
			{item: Item.BROKEN_LIGHT_ARMOR, price: 271},
			{item: Item.HANYOU_HELMET, price: 222},
			{item: Item.PURPLE_METEOR_HELMET, price: 235},
			{item: Item.COLD_BARTER, price: 225},
			{item: Item.PURPLE_BOOTS, price: 238},
			{item: Item.HANYOU_HANDLE, price: 229},
			{item: Item.PURPLE_METEOR_GLOVES, price: 242},
			{item: Item.COLD_BELT, price: 230},
			{item: Item.PURPLE_METEOR_BELT, price: 243},
			
			{item: Item.AMYTHEST_AXE, price: 291},
			{item: Item.TIGER_HAMMER, price: 299},
			{item: Item.FISHBONE_SWORD, price: 291},
			{item: Item.GOLDBACK_SABER, price: 299},
			{item: Item.PINCER_FISTS, price: 291},
			{item: Item.STREAMRAW_CLAW, price: 299},
			{item: Item.CANG_LING_WARFRAME, price: 256},
			{item: Item.PURPLE_METEORITE_ARMOR, price: 263},
			{item: Item.BROKEN_LIGHT_ARMOR, price: 271},
			{item: Item.HANYOU_HELMET, price: 222},
			{item: Item.PURPLE_METEOR_HELMET, price: 235},
			{item: Item.COLD_BARTER, price: 225},
			{item: Item.PURPLE_BOOTS, price: 238},
			{item: Item.HANYOU_HANDLE, price: 229},
			{item: Item.PURPLE_METEOR_GLOVES, price: 242},
			{item: Item.COLD_BELT, price: 230},
			{item: Item.PURPLE_METEOR_BELT, price: 243},
			
			{item: 150337, price: 0},
			{item: 150338, price: 0},
			{item: 150339, price: 0},
		]
	},
	[Shop.Normal_Max_Level_90]: {
		refreshCost: 115,
		amount: 10,
		items: [
			// 159000 @ 1
			// 159001 @ 1
			// 159002 @ 1
			// 159003 @ 1
			{item: Item.DOOM_HAMMER, price: 307},
			{item: Item.BERYL_AXE, price: 315},
			{item: Item.CLOUD_WING_SWORD, price: 307},
			{item: Item.PUPIL_BLADE, price: 315},
			{item: Item.EMPERORS_CLAW, price: 307},
			{item: Item.FIXED_SOUL_CLAW, price: 315},
			{item: Item.BROKEN_LIGHT_ARMOR, price: 271},
			{item: Item.PENGLAI_XIANYI, price: 278},
			{item: Item.DRAGON_WARFRAME, price: 285},
			{item: Item.PURPLE_METEOR_HELMET, price: 235},
			{item: Item.DEMON_BATTLE_HELMET, price: 248},
			{item: Item.PURPLE_BOOTS, price: 238},
			{item: Item.ROYAL_WIND_BOOTS, price: 251},
			{item: Item.PURPLE_METEOR_GLOVES, price: 242},
			{item: Item.BROKEN_MAGIC_HANDLE, price: 254},
			{item: Item.PURPLE_METEOR_BELT, price: 243},
			{item: Item.BI_LUO_BELT, price: 255},

			{item: Item.DOOM_HAMMER, price: 307},
			{item: Item.BERYL_AXE, price: 315},
			{item: Item.CLOUD_WING_SWORD, price: 307},
			{item: Item.PUPIL_BLADE, price: 315},
			{item: Item.EMPERORS_CLAW, price: 307},
			{item: Item.FIXED_SOUL_CLAW, price: 315},
			{item: Item.BROKEN_LIGHT_ARMOR, price: 271},
			{item: Item.PENGLAI_XIANYI, price: 278},
			{item: Item.DRAGON_WARFRAME, price: 285},
			{item: Item.PURPLE_METEOR_HELMET, price: 235},
			{item: Item.DEMON_BATTLE_HELMET, price: 248},
			{item: Item.PURPLE_BOOTS, price: 238},
			{item: Item.ROYAL_WIND_BOOTS, price: 251},
			{item: Item.PURPLE_METEOR_GLOVES, price: 242},
			{item: Item.BROKEN_MAGIC_HANDLE, price: 254},
			{item: Item.PURPLE_METEOR_BELT, price: 243},
			{item: Item.BI_LUO_BELT, price: 255},
			
			{item: Item.DOOM_HAMMER, price: 307},
			{item: Item.BERYL_AXE, price: 315},
			{item: Item.CLOUD_WING_SWORD, price: 307},
			{item: Item.PUPIL_BLADE, price: 315},
			{item: Item.EMPERORS_CLAW, price: 307},
			{item: Item.FIXED_SOUL_CLAW, price: 315},
			{item: Item.BROKEN_LIGHT_ARMOR, price: 271},
			{item: Item.PENGLAI_XIANYI, price: 278},
			{item: Item.DRAGON_WARFRAME, price: 285},
			{item: Item.PURPLE_METEOR_HELMET, price: 235},
			{item: Item.DEMON_BATTLE_HELMET, price: 248},
			{item: Item.PURPLE_BOOTS, price: 238},
			{item: Item.ROYAL_WIND_BOOTS, price: 251},
			{item: Item.PURPLE_METEOR_GLOVES, price: 242},
			{item: Item.BROKEN_MAGIC_HANDLE, price: 254},
			{item: Item.PURPLE_METEOR_BELT, price: 243},
			{item: Item.BI_LUO_BELT, price: 255},
			
			{item: 150337, price: 0},
			{item: 150338, price: 0},
			{item: 150339, price: 0},
		]
	},
	[Shop.Pets]: {
		refreshCost: 0,
		amount: 10,
		items: [
			{ item: 320002, price: 0},
			{ item: 320003, price: 0},
			{ item: 320006, price: 0},
			{ item: 320008, price: 0},
			{ item: 320015, price: 0},
			{ item: 320016, price: 0},
			{ item: 320017, price: 0},
			{ item: 320018, price: 0},
			{ item: 320019, price: 0},
			{ item: 320025, price: 0},
			{ item: 320026, price: 0},
			{ item: 320027, price: 0},
			{ item: 320028, price: 0},
			{ item: 320029, price: 0},
			{ item: 320030, price: 0},
			{ item: 320031, price: 0},
			{ item: 320033, price: 0},
			// { item: 320034, price: 0},
			{ item: 320036, price: 0},
			{ item: 320037, price: 0},
			{ item: 320038, price: 0},
			{ item: 320039, price: 0},
			{ item: 320040, price: 0},
			{ item: 320041, price: 0},
			{ item: 320042, price: 0},
			{ item: 320043, price: 0},
			{ item: 320044, price: 0},
			{ item: 320045, price: 0},
		]
	},
	[Shop.Food]: {
		refreshCost: 0,
		amount: 32,
		items: [
			{ item: 159015, price: 0}, //PetFoodx20
			{ item: 152025, price: 0}, //PetSkillBook
			{ item: 150078, price: 0}, //DemonProof
			{ item: 160000, price: 0}, //SoulBox
			{ item: 159100, price: 0}, //AllOutfits+32
			{ item: 160107, price: 0}, //Pets+21
			{ item: 159006, price: 0}, // Stones
			{ item: 110106, price: 0}, // Strength 
			{ item: 110206, price: 0}, // Agility
			{ item: 110406, price: 0}, // Speed
			{ item: 110506, price: 0}, // Attack
			{ item: 110606, price: 0}, // Max Health
			{ item: 110306, price: 0}, // Stamina
			{ item: 148023, price: 0}, //Bloodline Item
			{ item: 148024, price: 0}, //Bloodline Item
			{ item: 148025, price: 0}, //Bloodline Item
			{ item: 148026, price: 0}, //Bloodline Item
			{ item: 148027, price: 0}, //Bloodline Item
			{ item: 148028, price: 0}, //Bloodline Item
			{ item: 148029, price: 0}, //Bloodline Item
			{ item: 148030, price: 0}, //Bloodline Item
			{ item: 148031, price: 0}, //Bloodline Item
			{ item: 148032, price: 0}, //Bloodline Item
			{ item: 148033, price: 0}, //Bloodline Item
			{ item: 148034, price: 0}, //Bloodline Item
			{ item: 148035, price: 0}, //Bloodline Item
			{ item: 148036, price: 0}, //Bloodline Item
			{ item: 148037, price: 0}, //Bloodline Item
			{ item: 148038, price: 0}, //Bloodline Item
			{ item: 148039, price: 0}, //Bloodline Item
			{ item: 148040, price: 0}, //Bloodline Item
			{ item: 150167, price: 0}, //45mExp
		]
	},
	...require('./servers/mainland/shops/blackMarket')
}

module.exports = {
	Shop,
	Shops
}