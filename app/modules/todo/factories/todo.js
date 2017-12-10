function TodoFactory(){
    var factory = {
	 getApiToView        : _getApiToView,
        getUserApiToView    : _getUserApiToView,
        setUserViewToApi    : _setUserViewToApi
    };

    return factory;
	
	function _getApiToView(res){
        if( angular.isUndefined(res) ){
            return;
        }
        if( angular.isUndefined(res.data) ){
            return;
        }
        if( angular.isUndefined(res.data.users) ){
            return;
        }
        var data   = res.data.users;
        var result = [];

        angular.forEach(data, function(item){
            result.push( _convertApi( item ) );
        });

        return result;
    }
	
	function _convertApi( data ){
        var result = {};
        if( angular.isUndefined(data) ){
            return;
        }
        if( angular.isDefined(data.name) ){
            result.name = data.name;
        }
        if( angular.isDefined(data.email) ){
            result.email = data.email;
        }
        
        return result;
    }
	
	function _setUserViewToApi( data ){
        var result = {};
        
        if( angular.isDefined(data.name) ){
            result.name = data.name;
        }
        if( angular.isDefined(data.email) ){
            result.email = data.email;
        }
        
        return result;
    }


}

angular.module("todoApp").factory("TodoFactory", TodoFactory);