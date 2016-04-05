import Ember from 'ember';

export default Ember.Component.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?zip=' + params.zip + '&apikey=6ba17065d6c0455689bc684933e2792e';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
