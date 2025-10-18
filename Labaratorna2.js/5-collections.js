const phones = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Antoninus Pius", phone: "+380445554422" },
  { name: "Commodus", phone: "+380445554411" },
];

function findPhoneByName(name) {
  for (const entry of phones) {
    if (entry.name === name) return entry.phone;
  }
  return null;
}

const phoneHash = {
  "Marcus Aurelius": "+380445554433",
  "Antoninus Pius": "+380445554422",
  Commodus: "+380445554411",
};

function findPhoneByNameHash(name) {
  return phoneHash[name] || null;
}

module.exports = { phones, findPhoneByName, phoneHash, findPhoneByNameHash };
