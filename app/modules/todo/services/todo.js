function TodoService( $http ){
var uri = "https://academiaangular.herokuapp.com/";

    var service = {
        getApiGit       : _getApiGit,
        getApiList      : _getApiList,
        findUserApi     : _findUserApi,
        createUserApi   : _createUserApi,
        
};

return service;

    function _getApiGit(){
        return $http.get( uri );
    }

    function _getApiList(){
        return $http.get( uri );
    }

    function _createUserApi( data ){
        return $http({
            method: 'POST',
            url: uri + 'users',
            data: data
        });
    }

    function _updateUserApi( id, data ){
        return $http({
            method: 'PUT',
            url: uri + 'users/' + id,
            data: data
        });
    }
	
	 
 angular.module("todoApp").service("TodoService", TodoService);