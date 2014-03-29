/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
            
            this._userController = {
                displayName: "Afonso",
                credits: 5
            };
            
            this._recentConversations = [
                {name: "Adam", conversion: [
                    {source: "Adam", date: "12:23", message: "Hello there"},
                    {source: "Adam", date: "12:23", message: "How are you?"},
                    {source: "Adam", date: "12:23", message: "Wanna go to the movies?"}]},
                {name: "Channel", conversion: [
                    {source: "Adam", date: "12:23", message: "Hello everyone"},
                    {source: "Anne", date: "13:23", message: "Sup?"},
                    {source: "Heidi", date: "16:45", message: "Everything is awesome"}]}
            ];
        }
    }
});
