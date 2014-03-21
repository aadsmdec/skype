/**
 * @module ui/conversation.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Conversation
 * @extends Component
 */
exports.Conversation = Component.specialize(/** @lends Conversation# */ {
    constructor: {
        value: function Conversation() {
            this.super();
        }
    },
    
    handleNewMessageAction: {
        value: function(event) {
            var value = event.target.value;
            
            this.conversation.conversion.push({source: "Me", message: value});
        }
    }
});
