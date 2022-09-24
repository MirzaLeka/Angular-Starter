import { DirectiveTestingDirective } from './directive-testing.directive';

describe('DirectiveTestingDirective', () => {

  let directive: DirectiveTestingDirective;
  let textEmitterSpy: jasmine.Spy;

  beforeEach(() => {
    directive = new DirectiveTestingDirective();
    textEmitterSpy = spyOn(directive.textEmitter, 'emit');
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should not call textEmitter if text is empty', () => {
    directive.handleInput('')
    directive.handleInput('     ')
    expect(textEmitterSpy).not.toHaveBeenCalled();
  });

  it('should call textEmitter if text is valid', () => {
    directive.handleInput('hello')
    expect(textEmitterSpy).toHaveBeenCalledWith('hello');
  });

  it('should unsubscribe from the observable when directive is destroyed', () => {
    const unsubscriberSpy = spyOn(directive.unsubscriber$, 'complete');
    directive.ngOnDestroy();
    expect(unsubscriberSpy).toHaveBeenCalled();
  });

});
