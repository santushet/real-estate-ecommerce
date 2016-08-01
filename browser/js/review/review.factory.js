app.factory('ReviewFactory', function ($http, $stateParams) {

  var ReviewFactory = {};

  ReviewFactory.fetchAll = function (args) {
    return $http.get('/api/reviews', {params: args})
    .then(function (response) { return response.data; });
  };

  ReviewFactory.create = function (data) {
    data.buildingId = $stateParams.id // JA/BG should not be using $stateParams in factory
    return $http.post('/api/reviews/', data)
    .then(function (response) {
    console.log(response)
     return response.data; })
    .catch(function(error){console.error(error); // JA/BG error should be caught in controller
    });
  };

  return ReviewFactory;
});
