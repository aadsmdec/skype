/**
 * @module ui/status-bar.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class StatusBar
 * @extends Component
 */
exports.StatusBar = Component.specialize(/** @lends StatusBar# */ {
    constructor: {
        value: function StatusBar() {
            this.super();
        }
    }
});
