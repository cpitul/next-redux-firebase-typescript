export async function exampleFetch(): Promise<{}> {
	const response = await fetch('/api/example', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
	});
	const result = await response.json();

	return result;
}
