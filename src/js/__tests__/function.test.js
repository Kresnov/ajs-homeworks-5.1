import orderByProps from '../function.js';

test('Успех', () => {
  const received = orderByProps(
    {
      name: 'мечник',
      health: 40,
      level: 2,
      attack: 80,
      defence: 10,
    }, ['name', 'level'],
  );

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 10 },
    { key: 'health', value: 40 },
  ];

  expect(received).toEqual(expected);
});
