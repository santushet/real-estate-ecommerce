app.factory('BuildingFactory', function ($http) {

  var BuildingFactory = {};

  BuildingFactory.fetchAll = function (args) {
    return $http.get('/api/buildings', {params: args}) // JA/BG more descriptive variable name than args?
    .then(function (response) { return response.data; }); // JA/BG try ES6 fat arrow function
  };

  BuildingFactory.fetchOne = function (id) {
    return $http.get('/api/buildings/' +id) // JA/BG try abstracting api/buildings url to variable
    .then(function (response) { return response.data; });
  };

  BuildingFactory.changeStatus = function(id, propertyStatus) {
    return $http.put('/api/buildings/changeStatus/' + id, {isAvailable: propertyStatus})
      .then(res => res.data);
  }

  BuildingFactory.changePropertyType = function(id, propertyType) {
    return $http.put('/api/buildings/changeType/' + id, {propertyType: propertyType})
      .then(res => res.data);
  }

  BuildingFactory.updateProperty = function(id, propertyInfo) { // JA/BG is propertyInfo an object?
    return $http.put('/api/buildings/updateBuilding/' + id, propertyInfo)
      .then(res => res.data);
  }

  return BuildingFactory;

});
