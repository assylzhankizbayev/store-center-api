exports.getAll = (promise) =>
  promise
    .then(([rows]) => ({ success: !!rows, result: rows }))
    .catch((error) => ({ success: false, error }));

exports.getOne = (promise) =>
  promise
    .then(([rows]) => ({ success: !!rows[0], result: rows[0] }))
    .catch((error) => ({ success: false, error }));

exports.addOne = (promise) =>
  promise
    .then(([result]) => ({ success: result.affectedRows > 0 }))
    .catch((error) => ({ success: false, error }));

exports.addOneAndGetID = (promise) =>
  promise
    .then(([result]) => ({
      success: result.affectedRows > 0,
      id: result.insertId,
    }))
    .catch((error) => ({ success: false, error }));

exports.remove = (promise) =>
  promise
    .then(([result]) => ({
      success: result.affectedRows > 0,
      error: result.affectedRows > 0 ? null : "row not found",
    }))
    .catch((error) => ({ success: false, error }));
