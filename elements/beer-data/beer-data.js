'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var BeerData = (function () {
    function BeerData() {
      _classCallCheck(this, BeerData);
    }

    _createClass(BeerData, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'beer-data';

        this.properties = {
          beers: {
            notify: true,
            value: function value() {
              return [{
                name: 'Sleepy Bulldog Pale Ale',
                brewery: 'Gottlands Bryggeri',
                short: 'A good beer',
                description: 'Benämningen Pale Ale kännetecknar en ljusare typ av Ale som bryggs på ljusare malt. En ölsort med karaktäristisk humle som har fruktiga toner och en markerad beska. Namnet härrör från en Bulldog som hette Krut. Med sina dryga 40 kilo muskler, ingav Krut välförtjänt respekt. Han var en sann glädjespridare precis som denna öl.',
                image: 'http://1.bp.blogspot.com/-tPbk73_TAgc/TslQ1GyOzlI/AAAAAAAAALI/cWaXKtTPKKU/s1600/IMG_4516.JPG'
              }, {
                name: 'Golden Ale',
                brewery: 'Oppigårds',
                short: 'A good beer',
                description: 'Oppigårds Golden Ale är det första öl vi bryggde. Året var 2004. Under de första åren justerade vi receptet flera gånger. Sedan 2006 finns flaskorna på Systembolaget runt om i Sverige. Idag är det en av de populäraste svenskbrygda alen på Systembolaget. Oppigårds Golden Ale är ett utmärkt puböl men har också blivit en populär matöl. Golden Ale karktäriseras av en ren maltsmak och medelstor kropp med medelstor beska och utpräglad humlearom från Goldings och Cascade. Denna öl säljs i Systembolagets ordinarie sortiment.',
                image: 'http://4.bp.blogspot.com/-b0egjeTPPRk/TV2XG0FxBLI/AAAAAAAAADQ/FgQA9sFK-ww/s1600/IMG_1121.JPG'
              }];
            }
          }
        };
      }
    }]);

    return BeerData;
  })();

  Polymer(BeerData);
})();