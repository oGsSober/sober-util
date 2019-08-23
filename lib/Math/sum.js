export default function sum(array) {
	if (
		array === undefined ||
		array === null ||
		!array.length ||
		!(array instanceof Array)
	)
		return undefined;
	let result = 0;
	array.forEach(num => {
		result += Number(num);
	});
	return result;
}
