function mainController($scope, $http) {  
    $scope.formData = {};

    // Cuando se cargue la página, pide del API todos los TODOs
    $http.findAll('/api/ClientController')
        .success(function(data) {
            $scope.data = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Cuando se añade un nuevo TODO, manda el texto a la API
    // $scope.post = function(){
    //     $http.post('/api/client', $scope.formData)
    //         .success(function(data) {
    //             $scope.formData = {};
    //             $scope.data = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             console.log('Error:' + data);
    //         });
    // };

    // // Borra un TODO despues de checkearlo como acabado
    // $scope.deleteTodo = function(id) {
    //     $http.delete('/api/client/' + id)
    //         .success(function(data) {
    //             $scope.data = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             console.log('Error:' + data);
    //         });
    // };
}