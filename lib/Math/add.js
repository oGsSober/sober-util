export default function add() {
	if (arguments.length === 0) return 0;
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		result += Number(arguments[i]);
	}

	return result;
}
