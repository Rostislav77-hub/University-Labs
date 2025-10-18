function fn() {
  const objConst = { name: "Marcus" };
  let objVar = { name: "Aurelius" };
  objConst.name = "Antoninus";
  objVar.name = "Commodus";
  // objConst = { name: 'Other' }; // Ошибка
  objVar = { name: "Other" }; // Работает
  return { objConst, objVar };
}

function createUser(name, city) {
  return { name, city };
}

module.exports = { fn, createUser };
