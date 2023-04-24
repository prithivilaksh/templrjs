export default eventHandler(async (event) => {
	const body = await readBody(event); // only for POST | PUT | PATCH | DELETE requests
	console.log(JSON.stringify("Query Body = ", body));
	const recordset = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/find`, {
		method: "post",
		headers: {
			"api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`,
		},
		body: {
			collection: body.collection || body._rawValue.collection,
			database: `${process.env.MONGODB_ATLAS_DATABASE}`,
			dataSource: `${process.env.MONGODB_ATLAS_DATASOURCE}`,
			filter: body.filter || body._rawValue.filter,
			limit: body.limit || body._rawValue.limit,
			//projection: body.projection || body._rawValue.projection,
		},
	});
	return recordset;
});
