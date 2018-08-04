function feed (root, args, context, info) {
  return context.db.query.links({}, info);
}

module.exports = {
  feed,
};
