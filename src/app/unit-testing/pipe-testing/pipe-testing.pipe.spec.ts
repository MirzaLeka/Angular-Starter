import { PipeTestingPipe } from './pipe-testing.pipe';

describe('PipeTestingPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeTestingPipe();
    expect(pipe).toBeTruthy();
  });
});
