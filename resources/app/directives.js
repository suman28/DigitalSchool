angular.module('directives.module',['ngMaterial','controllers.module'])
.directive('helloWorld',function(){
  return {
      restrict:'E',
      template:'<h2>Parent Scope</h2>'
  }
})
// .directive('testDirective',function(){
//   return{
//     restrict:'A',
//     link:function(scope,element,attribute){
//       element.bind('mouseover',function(){
//         element.css('cursor','pointer');
//       });
//       element.bind('click',function(){
//         element.css('background-color','grey');
//         scope.$apply(function(){
//           scope.color = 'white';
//         })
//       })
//     }
//   }
// })
// .directive('myDirective',function(){
//   return{
//     restrict:'A',
//     scope:false, //when scope is set to false, it inherits the scope of its parent
//                 //any changes to the controller or directive will be in sync.
//     //scope:true //when scope is set to true,a new scope is inherited from the parent scope.
//                 //Any changes made to this new scope will not reflect back to the parent scope.
//
//     //scope:{}, //it will create an isolated scope (doesn't inherit its parent scope)
//
//     template:'<div>Your name is:{{name}}</div>'+
//               'change your name:<input type="text" ng-model="name"/>'
//         }
// })

.directive('scopePrefixDirective',function(){
  return {
    restrict:'EA',
    scope:{
      name:'@',
      color:'=',
      reverse:'&'
    },
    template:["<div class='row  md-whiteframe-z2' layout-padding><h2>Directive scope</h2><div class='line'>",
              "<p>Name : <strong>{{name}}</strong></p>Change name:<md-input-container><input type='text' ng-model='name' /></md-input-container>",
              "</div><div class='line'>",
              "<p>Color : <strong style='color:{{color}}'>{{color}}</strong></p>Change color:<md-input-container><input type='text' ng-model='color' /></md-input-container></div>",
              "<br/><md-button class='md-raised' ng-click='reverse()'>Reverse Name</md-button></div>"
            ].join("")
  }
})
.directive('foo',function(){
  // returns the Directive Definition Object
  return{
    transclude:true,
    // During the linking process, the ngTransclude directive will clone the DIV element’s original content
    //and add it to the DOM as a child element of the element on which the ngTransclude directive is applied.
    template:'<div>the template</div><div ng-transclude></div>'
  }
})
.directive('foo2',function(){
  return{
    template:'<div>the template</div>',
    transclude:true,

    link:function(scope,element,attribute,ctrl,transclude){
      //the callback function will receive the cloned content as a parameter,
      // then the function adds the cloned content to the DOM.
      // transclude(scope.$new(), function(c){
      //   element.append(c);
      // });
      // transclude(scope.$new(), function(c){
      //   element.append(c);
      // });
      transclude(scope.$new(), function(c){
        scope.message = "Adding a property to the child scope of the transcluded content";
        element.append(c);
      })
    }
  }
})
.directive('foo3',function(){
  return{
    transclude:'element',
    compile:function(tElement,tAttrs){
      var parentElement = tElement.parent();
      return function(scope,element,attrs,ctrl,transclude){
        transclude(scope.$new(),function(clone){
          parentElement.append(clone);
        });
        transclude(scope.$new(),function(clone){
          parentElement.append(clone);
        });
        transclude(scope.$new(),function(clone){
          parentElement.append(clone);
        });
      }
    }
  }
})
