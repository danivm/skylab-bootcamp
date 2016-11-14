function prepareParams(req, res, next) {

	const fields = req.query.show;
	const fieldsHide = req.query.hide;

	const limit = +req.query.limit || 20;
	const page = +req.query.page || 1;
	const skip = (limit*(page-1))+1;

	req.limit = limit
	req.skip = skip
	if (fields || fieldsHide) {
		var projection = {}
		if (fields) {
			fields.split(',').forEach( (field) => {
				projection[field]=1
			})
		}
		if (fieldsHide) {
			fieldsHide.split(',').forEach( (field) => {
				projection[field]=0
			})
		}
		req.projection = projection
	}

	next()
}

module.exports = prepareParams