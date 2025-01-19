export const getEnv = (key, defaultValue) => {
	const value = process.env[key] || defaultValue;
	if (value === undefined) throw Error(`Missing String environment variable for ${key}`);
	return value;
};
