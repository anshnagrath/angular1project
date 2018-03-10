//var myApp = angular.module('blogApp', ['ngRoute']); 

matchApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	// controllerAs 	: 'mymatch'
        })
         .when('/singleview',{
        	templateUrl     : 'views/singleview.html',
         	controller 		: 'secondaryController',
 
         })
        // .when('/blog/:blogId',{

        // 	templateUrl     : 'views/blog-view.html',
        // 	controller 		: 'singleBlogController',
        // 	controllerAs 	: 'singleBlog'
        // })

        // .otherwise(
          //   {
              //  redirectTo:'/'
            //    templateUrl : 'views/index-view.html'
            }
        //);
    //}
]);
