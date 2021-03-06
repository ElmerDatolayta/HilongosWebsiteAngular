'use strict';

app.factory('barangayDataService',['$http','$q',function($http,$q){
    var factory = {};

    var barangayNames = function(){
        return [
            {"name":"Agutayan"},
            {"name":"Atabay"},
            {"name":"Baas"},
            {"name":"Bagong Lipunan"},
            {"name":"Bagumbayan"},
            {"name":"Baliw"},
            {"name":"Bantigue"},
            {"name":"Bon-ot"},
            {"name":"Bung-aw"},
            {"name":"Cacao"},
            {"name":"Campina"},
            {"name":"Cantandog 1"},
            {"name":"Cantandog 2"},
            {"name":"Central Poblacion"},
            {"name":"Concepcion"},
            {"name":"Eastern Poblacion"},
            {"name":"Hampangan"},
            {"name":"Himo-aw"},
            {"name":"Hitudpan"},
            {"name":"Imelda Marcos"},
            {"name":"Kanghaas"},
            {"name":"Kang-iras"},
            {"name":"Lamak"},
            {"name":"Libertad"},
            {"name":"Liberty"},
            {"name":"Lunang"},
            {"name":"Magnangoy"},
            {"name":"Manaul"},
            {"name":"Marangog"},
            {"name":"Matapay"},
            {"name":"Naval"},
            {"name":"Owak"},
            {"name":"Pa-a"},
            {"name":"Pontod"},
            {"name":"Proteccion"},
            {"name":"San Agustin"},
            {"name":"San Antonio"},
            {"name":"San Isidro"},
            {"name":"San Juan"},
            {"name":"San Roque"},
            {"name":"Santa Cruz"},
            {"name":"Santa Margarita"},
            {"name":"Santo Niño"},
            {"name":"Tabunok"},
            {"name":"Tagnate"},
            {"name":"Talisay"},
            {"name":"Tambis"},
            {"name":"Tejero"},
            {"name":"Tuguipa"},
            {"name":"Utanan"},
            {"name":"Western Poblacion"}
        ];
    };

    var barangaySearchStrings = function(){
        return [
            {"searchString":"agutayan"},
            {"searchString":"atabay"},
            {"searchString":"baas"},
            {"searchString":"bag"},
            {"searchString":"bagonglipunan"},
            {"searchString":"bagumbayan"},
            {"searchString":"baliw"},
            {"searchString":"bantigue"},
            {"searchString":"bonot"},
            {"searchString":"bungaw"},
            {"searchString":"cacao"},
            {"searchString":"campina"},
            {"searchString":"cantandog"},
            {"searchString":"cantandog1"},
            {"searchString":"cantandog2"},
            {"searchString":"centralpoblacion"},
            {"searchString":"concepcion"},
            {"searchString":"easternpoblacion"},
            {"searchString":"hampangan"},
            {"searchString":"himoaw"},
            {"searchString":"hitudpan"},
            {"searchString":"imeldamarcos"},
            {"searchString":"kang"},
            {"searchString":"kanghaas"},
            {"searchString":"kangiras"},
            {"searchString":"lamak"},
            {"searchString":"libert"},
            {"searchString":"libertad"},
            {"searchString":"liberty"},
            {"searchString":"lunang"},
            {"searchString":"magnangoy"},
            {"searchString":"manaul"},
            {"searchString":"marangog"},
            {"searchString":"matapay"},
            {"searchString":"naval"},
            {"searchString":"owak"},
            {"searchString":"paa"},
            {"searchString":"pontod"},
            {"searchString":"proteccion"},
            {"searchString":"san"},
            {"searchString":"sana"},
            {"searchString":"sanagustin"},
            {"searchString":"sanantonio"},
            {"searchString":"sanisidro"},
            {"searchString":"sanjuan"},
            {"searchString":"sanroque"},
            {"searchString":"sant"},
            {"searchString":"santa"},
            {"searchString":"santacruz"},
            {"searchString":"santamargarita"},
            {"searchString":"santoniño"},
            {"searchString":"tabunok"},
            {"searchString":"tagnate"},
            {"searchString":"talisay"},
            {"searchString":"tambis"},
            {"searchString":"tejero"},
            {"searchString":"tuguipa"},
            {"searchString":"utanan"},
            {"searchString":"westernpoblacion"}
        ];
    };

    var getBarangayHistory = function(barangayId){
        return $http.get('assets/json/'+barangayId+'.json').then(function(response){
            return response;
        });
    }

    factory.getBarangayNames = barangayNames;
    factory.getBarangaySearchString = barangaySearchStrings;
    factory.getBarangayHistory = getBarangayHistory;

    return factory;
}]);