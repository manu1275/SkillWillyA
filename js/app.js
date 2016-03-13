Parse.initialize("FuShWBK5CzkQz0MWeq2WDzpA80tWsFtFHpr8gNQR", "lJ9NbQMHfFIgLTVrsgImkjseH4PSsAZT7Qy7qnzh");

/*var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  var msgbox = Windows.UI.Popups.MessageDialog("yay! it worked");
  return msgbox.showAsync();
});*/

var Category = Parse.Object.extend("Category");

var query = new Parse.Query(Category);
query.find({
  success: function(results) {
    listCategoryNames(results);
  },
  error: function(error) {
    console.log(error);
  }
});

var listCategoryNames = function(resultList){

	var resultsArr = [], categories = [];

	for(var i=0; i < resultList.length; i++){
    	resultsArr.push(resultList[i].toJSON());	
    }

	for(var i=0; i < resultsArr.length; i++){

		categories.push({"category" : resultsArr[i].name});
	}

	var source = $('#searchresults-template').html();
    var template = Handlebars.compile(source);
    var html = template(categories);
    $('#result_list').append(html);
}