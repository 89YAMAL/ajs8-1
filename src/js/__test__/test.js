import Team from '../game';

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

test('Создание команды', () => {
  const team = new Team('Russian team');
  const result = { name: 'Russian team', members: new Set() };
  expect(team).toEqual(result);
});

test('Добавление игрока', () => {
  const team = new Team('Russian team');
  const newCharacter = new Character('Mag');
  team.add(newCharacter);
  const result = {
    name: 'Russian team',
    members: new Set([{
      name: 'Mag',
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Тест на дублирование', () => {
  const team = new Team('Russian team');
  const newCharacter = new Character('Mag');
  team.add(newCharacter);
  expect(() => team.add(newCharacter)).toThrow('Дублирование!');
});

test('Добавление нескольких игроков', () => {
  const team = new Team('Russian team');
  const newCharacter1 = new Character('Mag');
  const newCharacter2 = new Character('Locky');
  const newCharacter3 = new Character('Varvar');
  // const result = {
  //   name: 'Russian team',
  //   members: new Set([
  //     {
  //     name: 'Mag',
  //     health: 100,
  //     },
  //     {
  //     name: 'Locky',
  //     health: 100,
  //     },
  //     {
  //     name: 'Varvar',
  //     health: 100,
  //   }]),
  // };
  expect(() => team.addAll(newCharacter1, newCharacter2, newCharacter3)).not.toThrow();
});

test('Добавление нескольких игроков c задвоением', () => {
  const team = new Team('Russian team');
  const newHero1 = new Character('Mag');
  const newHero2 = new Character('Locky');
  const newHero3 = new Character('Varvar');
  expect(() => team.addAll(newHero1, newHero1, newHero2, newHero3)).not.toThrow();
});

test('Добавление нескольких игроков', () => {
  const team = new Team('Russian team');
  const newCharacter1 = new Character('Mag');
  const newCharacter2 = new Character('Locky');
  const newCharacter3 = new Character('Varvar');
  team.add(newCharacter1);
  team.add(newCharacter2);
  team.add(newCharacter3);
  expect(team.toArray()).toEqual([newCharacter1, newCharacter2, newCharacter3]);
});
