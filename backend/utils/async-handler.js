export const asyncHandler = controller => {
	return async (req, res, next) => {
		try {
			await controller(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};
