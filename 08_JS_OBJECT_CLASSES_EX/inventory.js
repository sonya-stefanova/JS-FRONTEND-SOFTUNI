function createHeroRegister(heroData) {
    // 1, Parse the input data and create an array of objects
    const heroes = heroData
    .map(hero => {
      const [name, level, items] = hero.split(' / ');
      return {
        name,
        level: Number(level),
        items: items.split(', '),
      };
    })
    // 2. Sort the array of heroes by level in ascending order
    .sort((a, b) => a.level - b.level);
  
 // 3Use forEach to format the output string
    let result = '';
    heroes.forEach(hero => {
    const heroInfo = `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}\n`;
    result += heroInfo;
    });

    return result;
  }
  
  // Example usage
  const input = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ];
  
  const output = createHeroRegister(input);
  console.log(output);