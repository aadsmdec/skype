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
                    {source: "Adam", date: "12:23", message: "lskjdf lksdjf lskjdf lsdkjf "},
                    {source: "Adam", date: "12:23", message: "slkdjhf lksjdhf lksjhd flkjsdf"},
                    {source: "Adam", date: "12:23", message: "lkdfjg ldkfgjldkfj glkdfj glfd g"}]},
                {name: "Channel", conversion: [
                    {source: "Adam", date: "12:23", message: "lskjdf lksdjf lskjdf lsdkjf "},
                    {source: "Anne", date: "13:23", message: "slkdjhf lksjdhf lksjhd flkjsdf"},
                    {source: "Heidi", date: "16:45", message: "lkdfjg ldkfgjldkfj glkdfj glfd g"}]}
            ];
        }
    }
});
