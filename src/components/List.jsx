var React = require("react");
var ListItem = require("./ListItem.jsx");

var ingredients = [{"id":1,"text":"chicken"},{"id":2,"text":"biryani"},{"id":3,"text":"soup"}];

var List = React.createClass({
    render:function(){
            var listitems = ingredients.map(function(item){
                return (<ListItem key={item.id} ingredient={item.text} />);
            });
            
            return (<ul>{listitems}</ul>);
    }
});

module.exports = List;
