// Write your tests here!
'use strict';

Tinytest.add('Dygraph.is', function (test) {
  var data = [[1,2],[2,5],[4,10],[5,2]];
  var div = document.createElement('div');
  var mc = new Dygraph(div,data,{legend: 'always'});
  test.instanceOf(mc, Dygraph, 'Instantiation OK');
});
