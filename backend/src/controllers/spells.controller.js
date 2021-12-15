const spells = [
  {
    id: 1,
    level: 1,
    name: "Curar Feridas",
    effect: "Cura",
    duration: "",
    value: "1d8",
    range: "toque",
    description:
      "Uma criatura que vocẽ toque recupera um número de pontos de vida igual a 1d8 + seu modificador de feitiços. Este Feitiço não tem efeito em mortos vivos ou constructos",
    higherLevel:
      "Quando é conjurada usando um espaço de magia de 2° nível ou superior a cura é aumentada em 1d8 para cada nível de espaço acima do 1",
  },
];

const getAll = (_, res) => {
  res.json(spells);
};

const create = (req, res) => {
  const {
    level,
    name,
    effect,
    duration,
    value,
    range,
    description,
    higherLevel,
  } = req.body;

  const nextId = spells[spells.length - 1].id + 1;
  const newSpell = {
    id: nextId,
    level,
    name,
    effect,
    duration,
    value,
    range,
    description,
    higherLevel,
  };

  spells.push(newSpell);

  return res.json(newSpell);
};

module.exports = {
  create,
  getAll,
};
