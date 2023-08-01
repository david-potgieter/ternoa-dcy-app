export function randomName() {
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Black', 'White']
  const animals = [
    'Lion',
    'Tiger',
    'Bear',
    'Fox',
    'Elephant',
    'Giraffe',
    'Zebra',
    'Eagle',
    'Dolphin',
    'Shark',
    'Kangaroo',
    'Koala',
    'Penguin',
    'Panda',
    'Raccoon',
    'Wolf',
    'Otter',
    'Hippo',
    'Cheetah',
    'Leopard',
    'Squirrel',
    'Meerkat',
    'Chimpanzee',
    'Orangutan',
    'Jaguar',
    'Platypus',
    'Armadillo',
    'Hedgehog',
    'Opossum',
    'Rhinoceros',
    'Bison',
    'Buffalo',
    'Porcupine',
    'Wombat',
    'Wallaby',
    'Aardvark',
    'Badger',
    'Chinchilla',
    'Capuchin',
    'Beaver',
    'Iguana',
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)]

  return `${randomColor} ${randomAnimal}`
}
