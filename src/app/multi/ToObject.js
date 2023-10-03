function multipleToObject(cources) {
  return cources.map((cource) => cource.toObject());
}
function monoToObject(cource) {
  return cource ? cource.toObject() : cource; // đúng thì là a sai thì là b
}
module.exports = {
  multipleToObject,
  monoToObject,
};
