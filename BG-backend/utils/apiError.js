class apiError extends Error {
  constructor(
    statusCode,
    message = "Something went wronng",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = Number(statusCode);
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError };
