import { StripunsafePipe } from './stripunsafe.pipe';

describe('StripunsafePipe', () => {
  it('create an instance', () => {
    const pipe = new StripunsafePipe();
    expect(pipe).toBeTruthy();
  });
});
