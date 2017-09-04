let MathComponent = {
    bindings: {
        name: '=?'
     },
    template: require('./math.tpl.html'),
    controller:'mathCtrl',
    controllerAs: 'vm'
}

export default MathComponent;
