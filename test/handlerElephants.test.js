const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função handlerElephants retorna o resultado esperado.', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 5);
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants('1223')).toBeNull();
  });
});
