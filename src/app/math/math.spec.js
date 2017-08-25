import math from './index';

describe('Math Module', () => {

  describe('mathCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(math);

      angular.mock.inject(($controller) => {
        ctrl = $controller('mathCtrl', {});
      });
    });

    it('Should contain initial value', () => {
      expect(ctrl.value).toBe('Test Component');
    });
  });
});
