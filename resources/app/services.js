angular.module('services.module',['ngMaterial','controllers.module'])
.factory('paginationFactory',function($q){
  var promises = [];

  _init = function(){
    var deferred = $q.defer();
    alert("in init function");
     return deferred.promise;
  }
  _firstFunction = function(){
    var deferred = $q.defer();
    alert("in first function");
     return deferred.promise;
  }
  _secondFunction = function(){
    var deferred = $q.defer();
    alert("in second function");
    // return deferred.promise;
  }
  _thirdFunction = function(){
    var deferred = $q.defer();
    alert("in third function");
    // return deferred.promise;
  }

  return{
    //In this case, you don't need to define a additional promise,
     //because placing a return in front of the _init, will already return
     //the promise of _thirdFunction  .
    testPromise: function() {
        return _init()
        .then(_firstFunction)
         //remove () from inside the callback, to pass the actual method
         //instead the result of the invoked method.
         .then(_secondFunction)
         .then(_thirdFunction)

      }
  }

  // callFirst()
  // .then(function(firstResult){
  //    return callSecond();
  // })
  // .then(function(secondResult){
  //    return callThird();
  // })
  // .then(function(thirdResult){
  //    //Finally do something with promise, or even return this
  // });
})

.factory('game',function(){
  return{
    title:"Prince Of Persia"
  };
})
//factory for simple calculations
.factory('myFactory',function(){
  var factory = {};

  factory.addMethod = function(i,j){
    return i+j;
  }
  factory.subtractMethod = function(i,j){
    return i-j;
  }
  factory.multiplyMethod = function(i,j){
    return i*j;
  }
  factory.divideMethod = function(i,j){
    return i/j;
  }
  factory.getSquareMethod = function(a){
    if(a!=undefined){
        return factory.multiplyMethod(a,a);
    }
    else{
      factory.showAlert = function(){
        alert("alert");

      }
      factory.showAlert();
    }
  }
  factory.getCubeMethod = function(a){
    if(a!=undefined){
      return factory.multiplyMethod(a,factory.multiplyMethod(a,a));
    }
    else{
      alert("please enter any number");
    }
  }

  return factory;
})
.factory('loginFactory',function(){
  var factory = {};
  var users = [{
      username:'suman',
      password:'suman28'
  },
  {
      username:'ramana',
      password:'ramana28'
  }];
  factory.validUser = function(user){
    if(user){
      for(i in users){
        if(users[i].username==user.username){
          console.log("user with the username "+user.username+" already existed");
          this.sessionUser=user;
          return user;
        }
      }
    }
    else{
      // angular.isUndefinedOrNull = function(val) {
      //     return angular.isUndefined(val) || val === null;
      // }
        console.log(user);
        alert(angular.equals({}, user));
        return false;
    }

    console.log("user from the factory "+factory.user);

  }
  return factory;
})

//factory for CRUD(Create,Read,Upadate and Delete) operations
.factory('crudFactory',function(){

  var factory = {};
  var uid = 2;
  var contacts = [{
        id: 0,
            'name': 'Suman K',
            'email': 'sumankotagiri28@gmail.com',
            'password': 'suman'
    },
    {
          id: 1,
              'name': 'Test',
              'email': 'test@gmail.com',
              'password': 'test'
      }];

  factory.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }

  //simply search contacts list for given id
  //and returns the contact object if found
  factory.get = function(id){
    for(i in contacts){
      if(contacts[i].id==id){
        return contacts[i];
      }
    }
  }

  //iterate through contacts list and delete
  //contact if found
  factory.delete = function (id) {
      for (i in contacts) {
          if (contacts[i].id == id) {
              contacts.splice(i, 1);
          }
      }
  }

  factory.list = function(){
    return contacts;
  }
  return factory;
})
