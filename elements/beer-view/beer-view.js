'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var BeerView = (function () {
    function BeerView() {
      _classCallCheck(this, BeerView);
    }

    _createClass(BeerView, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'beer-view';

        this.properties = {
          name: {
            type: String,
            value: ''
          },
          short: {
            type: String,
            value: ''
          },
          description: {
            type: String,
            value: ''
          },
          brewery: {
            type: String,
            value: ''
          },
          price: {
            type: Number,
            value: 0
          },
          image: {
            type: String,
            value: ''
          },
          elementId: {
            type: String,
            computed: '_computeElementId(name)'
          }
        };
      }
    }, {
      key: '_computeElementId',
      value: function _computeElementId(name) {
        return name.split(' ').join('-');
      }
    }, {
      key: '_toggleMoreInfo',
      value: function _toggleMoreInfo(e) {
        var moreInfo = document.getElementById(this.elementId);
        var iconButton = Polymer.dom(e).localTarget;
        iconButton.icon = moreInfo.opened ? 'expand-more' : 'expand-less';
        moreInfo.toggle();
      }
    }, {
      key: 'ready',
      value: function ready() {}
    }, {
      key: 'attached',
      value: function attached() {}
    }, {
      key: 'detached',
      value: function detached() {}
    }, {
      key: 'attributeChanged',
      value: function attributeChanged() {}
    }]);

    return BeerView;
  })();

  Polymer(BeerView);
})();