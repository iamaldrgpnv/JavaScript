class Climber {
	constructor(name, address) {
		this.name = name;
		this.address = address
	}
	set name(name) {
		if (name.length < 3) throw new Error("Недопустимая длина строки имени")
		this._name = name;
	}
	set address(value) {
		if (value.length < 5) throw new Error("Недопустимая длина строки адреса")
		this._address = value;
	}
}
class Mountain {
	constructor(name, country, height) {
		this.name = name;
		this.country = country;
		this.height = height;
	}
	set name(nameOfMountain) {
		if (nameOfMountain.length < 4) throw new Error("Недопустимая длина строки названия горы")
		this._name = nameOfMountain;
	}
	set country(nameOfCountry) {
		if (nameOfCountry.length < 4) throw new Error("Недопустимая длина строки названия страны")
		this._country = nameOfCountry;
	}
	set height(meters) {
		if (meters < 100) throw new Error("Недопустимая высота горы")
		this._height = meters;
	}
}
class Group {
	constructor(groupRecruitment, arr, mountain) {
		this.req = groupRecruitment;
		this.arr = arr;
		this.mountain = mountain;
	}
	set req(answer) {
		if (answer !== true) {
			this._recruitment = "Запись закрыта";
		} else {
			this._recruitment = "Запись открыта";
		}
	}
	set arr(group) {
		if (group.length >= 3) {
			this._recruitment = "Запись закрыта";
			let arr = [];
			for (let i = 0; i < 3; i++) arr.push(group[i]);
			this._arr = arr;
		} else {
			this._arr = group;
		}
	}
	get arr() {
		return this._arr;
	}
	set mountain(mountain) {
		if (mountain instanceof Mountain) this._mountain = mountain;
	}
}
export { Climber, Mountain, Group };