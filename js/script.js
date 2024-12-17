const conversionFactors = {
	length: {
		km: {
			km: 1,
			mi: 0.621371,
			m: 1000,
			ft: 3280.84,
			cm: 100000,
			in: 39370.1,
			mm: 1000000,
		},
		mi: {
			km: 1.60934,
			mi: 1,
			m: 1609.34,
			ft: 5280,
			cm: 160934,
			in: 63360,
			mm: 1609340,
		},
		m: {
			km: 0.001,
			mi: 0.000621371,
			m: 1,
			ft: 3.28084,
			cm: 100,
			in: 39.3701,
			mm: 1000,
		},
		ft: {
			km: 0.0003048,
			mi: 0.000189394,
			m: 0.3048,
			ft: 1,
			cm: 30.48,
			in: 12,
			mm: 304.8,
		},
		cm: {
			km: 0.00001,
			mi: 0.0000062137,
			m: 0.01,
			ft: 0.0328084,
			cm: 1,
			in: 0.393701,
			mm: 10,
		},
		in: {
			km: 0.0000254,
			mi: 0.0000157828,
			m: 0.0254,
			ft: 0.0833333,
			cm: 2.54,
			in: 1,
			mm: 25.4,
		},
		mm: {
			km: 0.000001,
			mi: 0.000000621371,
			m: 0.001,
			ft: 0.00328084,
			cm: 0.1,
			in: 0.0393701,
			mm: 1,
		},
	},

	weight: {
		kg: { kg: 1, lb: 2.20462, g: 1000, oz: 35.274, t: 0.001 },
		lb: { kg: 0.453592, lb: 1, g: 453.592, oz: 16, t: 0.000453592 },
		g: { kg: 0.001, lb: 0.00220462, g: 1, oz: 0.035274, t: 0.000001 },
		oz: { kg: 0.0283495, lb: 0.0625, g: 28.3495, oz: 1, t: 0.0000283495 },
		t: { kg: 1000, lb: 2204.62, g: 1000000, oz: 35274, t: 1 },
	},

	temperature: {
		celsius: {
			celsius: 1,
			fahrenheit: (c) => (c * 9) / 5 + 32,
			kelvin: (c) => c + 273.15,
		},
		fahrenheit: {
			celsius: (f) => ((f - 32) * 5) / 9,
			fahrenheit: 1,
			kelvin: (f) => ((f - 32) * 5) / 9 + 273.15,
		},
		kelvin: {
			celsius: (k) => k - 273.15,
			fahrenheit: (k) => ((k - 273.15) * 9) / 5 + 32,
			kelvin: 1,
		},
	},

	volume: {
		liters: {
			liters: 1,
			gallons: 0.264172,
			milliliters: 1000,
			fluidOunces: 33.814,
			cups: 4.22675,
		},
		gallons: {
			liters: 3.78541,
			gallons: 1,
			milliliters: 3785.41,
			fluidOunces: 128,
			cups: 16,
		},
		milliliters: {
			liters: 0.001,
			gallons: 0.000264172,
			milliliters: 1,
			fluidOunces: 0.033814,
			cups: 0.00422675,
		},
		fluidOunces: {
			liters: 0.0295735,
			gallons: 0.0078125,
			milliliters: 29.5735,
			fluidOunces: 1,
			cups: 0.125,
		},
		cups: {
			liters: 0.236588,
			gallons: 0.0625,
			milliliters: 236.588,
			fluidOunces: 8,
			cups: 1,
		},
	},

	time: {
		hours: {
			hours: 1,
			minutes: 60,
			seconds: 3600,
			days: 0.0416667,
			weeks: 0.00595238,
		},
		minutes: {
			hours: 0.0166667,
			minutes: 1,
			seconds: 60,
			days: 0.000694444,
			weeks: 0.0000992063,
		},
		seconds: {
			hours: 0.000277778,
			minutes: 0.0166667,
			seconds: 1,
			days: 0.0000115741,
			weeks: 0.00000165344,
		},
		days: {
			hours: 24,
			minutes: 1440,
			seconds: 86400,
			days: 1,
			weeks: 0.142857,
		},
		weeks: { hours: 168, minutes: 10080, seconds: 604800, days: 7, weeks: 1 },
	},

	speed: {
		kmh: { kmh: 1, mph: 0.621371, ms: 0.277778, fts: 0.911344 },
		mph: { kmh: 1.60934, mph: 1, ms: 0.44704, fts: 1.46667 },
		ms: { kmh: 3.6, mph: 2.23694, ms: 1, fts: 3.28084 },
		fts: { kmh: 1.09728, mph: 0.681818, ms: 0.3048, fts: 1 },
	},

	area: {
		squareMeters: {
			squareMeters: 1,
			squareFeet: 10.7639,
			acres: 0.000247105,
			hectares: 0.0001,
		},
		squareFeet: {
			squareMeters: 0.092903,
			squareFeet: 1,
			acres: 0.000022957,
			hectares: 0.0000092903,
		},
		acres: {
			squareMeters: 4046.86,
			squareFeet: 43560,
			acres: 1,
			hectares: 0.404686,
		},
		hectares: {
			squareMeters: 10000,
			squareFeet: 107639,
			acres: 2.47105,
			hectares: 1,
		},
	},

	energy: {
		joules: {
			joules: 1,
			calories: 0.239006,
			kilowattHours: 0.000000277778,
			BTU: 0.000947817,
		},
		calories: {
			joules: 4.184,
			calories: 1,
			kilowattHours: 0.00000116222,
			BTU: 0.00396567,
		},
		kilowattHours: {
			joules: 3600000,
			calories: 860421,
			kilowattHours: 1,
			BTU: 3412.14,
		},
		BTU: {
			joules: 1055.06,
			calories: 252.164,
			kilowattHours: 0.000293071,
			BTU: 1,
		},
	},

	data: {
		bytes: {
			bytes: 1,
			kilobytes: 1 / 1024,
			megabytes: 1 / (1024 * 1024),
			gigabytes: 1 / (1024 * 1024 * 1024),
			terabytes: 1 / (1024 * 1024 * 1024 * 1024),
		},
		kilobytes: {
			bytes: 1024,
			kilobytes: 1,
			megabytes: 1 / 1024,
			gigabytes: 1 / (1024 * 1024),
			terabytes: 1 / (1024 * 1024 * 1024),
		},
		megabytes: {
			bytes: 1024 * 1024,
			kilobytes: 1024,
			megabytes: 1,
			gigabytes: 1 / 1024,
			terabytes: 1 / (1024 * 1024),
		},
		gigabytes: {
			bytes: 1024 * 1024 * 1024,
			kilobytes: 1024 * 1024,
			megabytes: 1024,
			gigabytes: 1,
			terabytes: 1 / 1024,
		},
		terabytes: {
			bytes: 1024 * 1024 * 1024 * 1024,
			kilobytes: 1024 * 1024 * 1024,
			megabytes: 1024 * 1024,
			gigabytes: 1024,
			terabytes: 1,
		},
	},
};

document.addEventListener("DOMContentLoaded", function () {
	const inputValue = document.getElementById("inputValue");
	const inputUnit = document.getElementById("inputUnit");
	const outputUnit = document.getElementById("outputUnit");
	const outputValue = document.getElementById("outputValue");

	function convert() {
		const category = document.body.getAttribute("data-category");
		const value = parseFloat(inputValue.value);
		const fromUnit = inputUnit.value;
		const toUnit = outputUnit.value;

		// Check for valid input and units
		if (isNaN(value) || !fromUnit || !toUnit) {
			outputValue.textContent = "";
			return;
		}

		// Get the conversion factor
		const conversionFactor = conversionFactors[category][fromUnit][toUnit];

		// Check for a valid conversion factor
		if (!conversionFactor) {
			outputValue.textContent = "Invalid Conversion";
			return;
		}

		// Calculate the result
		const result =
			typeof conversionFactor === "function"
				? conversionFactor(value)
				: value * conversionFactor;

		// Handle large numbers using exponential notation if necessary
		outputValue.textContent = isNaN(result) ? "Error" : formatResult(result);
	}

	// Function to format result
	function formatResult(value) {
		if (Math.abs(value) < 0.01 || Math.abs(value) > 10000000) {
			return value.toExponential(6); // Use scientific notation for very small or very large numbers
		} else {
			return value.toFixed(4); // Use fixed-point notation for typical numbers
		}
	}

	inputValue.addEventListener("input", convert);
	inputUnit.addEventListener("change", convert);
	outputUnit.addEventListener("change", convert);
});
