const desListBoy = ["潇洒", "开心", "聪明", "迷人", "细心", "耿直", "坐怀不乱", "谦虚", "热情"]
const nounBoy = ["帅哥", "高富帅", "马屁精", "癞皮狗"]

const desListGirl = ["贤惠", "谦虚", "婀娜多姿"]
const nounGirl = ["美女", "白富美"]

class RandomName {
	constructor(
		options = {
			gender: 1, // 1 为男，0 为女
			repeat: {
				position: "before", // 重复了在前面提示文字或者后面提示文字 `before` `after`
				content: "重复-",
			},
		}
	) {
		const { gender, repeat } = options

		this.gender = gender
		this.repeat = repeat
		this.centerName = "的"
		this.appear = []
	}

	sendName(first, last) {
		const firstName = this.gender === 1 ? desListBoy[first] : desListGirl[first]
		const lastName = this.gender === 1 ? nounBoy[last] : nounGirl[last]
		const name = `${firstName}${this.centerName}${lastName}`

		return name
	}

	getName() {
		let firstCount = this.getRandomCount("des")
		let lastCount = this.getRandomCount("noun")
		const name = this.sendName(firstCount, lastCount)
		const range = this.getRange()

		if (range === 0) return ""

		if (this.appear.flat(Infinity).length >= range) {
			let repeatName
			if (this.repeat.position === "before") {
				repeatName = `${this.repeat.content}${name}`
			} else if (this.repeat.position === "after") {
				repeatName = `${name}${this.repeat.content}`
			} else {
				repeatName = `${this.repeat.content}${name}`
			}
			return repeatName
		}
		const firstList = this.appear[firstCount]

		if (firstList && firstList.includes(lastCount)) {
			return this.getName()
		} else {
			if (firstList) {
				this.appear[firstCount].push(lastCount)
			} else {
				this.appear[firstCount] = []
				this.appear[firstCount].push(lastCount)
			}
		}

		return name
	}

	getRandomCount(status) {
		let random = Math.floor(Math.random() * this.getLength(status))
		return random
	}

	getLength(status) {
		// status: `des` or `noun`
		const { length: desL } = this.gender === 1 ? desListBoy : desListGirl
		const { length: nounL } = this.gender === 1 ? nounBoy : nounGirl
		return status === "des" ? desL : nounL
	}

	getRange() {
		return this.gender
			? desListBoy.length * nounBoy.length
			: desListGirl.length * nounGirl.length
	}
}

export default RandomName
