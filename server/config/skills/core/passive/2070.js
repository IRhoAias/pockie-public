const { Stat } = require("../../../lines");
const { PassiveSkill } = require("../../util");

module.exports = class ToolBasic extends PassiveSkill {
	static modifier = Stat.SkillAdd6;
	static amount = 500;
}