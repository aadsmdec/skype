montageDefine("9179ec9","index",{dependencies:["buffer"],factory:function(e,t){function n(e){if(e&&!o(e))throw Error("Unknown encoding: "+e)}function i(e){return e.toString(this.encoding)}function r(e){var t=this.charReceived=e.length%2;return this.charLength=t?2:0,t}function a(e){var t=this.charReceived=e.length%3;return this.charLength=t?3:0,t}var s=e("buffer").Buffer,o=s.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},l=t.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),n(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=r;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return this.write=i,void 0}this.charBuffer=new s(6),this.charReceived=0,this.charLength=0};l.prototype.write=function(e){for(var t="",n=0;this.charLength;){var i=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,n,i),this.charReceived+=i-n,n=i,this.charReceived<this.charLength)return"";t=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var r=t.charCodeAt(t.length-1);if(!(r>=55296&&56319>=r)){if(this.charReceived=this.charLength=0,i==e.length)return t;e=e.slice(i,e.length);break}this.charLength+=this.surrogateSize,t=""}var a=this.detectIncompleteChar(e),s=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-a,s),this.charReceived=a,s-=a),t+=e.toString(this.encoding,0,s);var s=t.length-1,r=t.charCodeAt(s);if(r>=55296&&56319>=r){var o=this.surrogateSize;return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),this.charBuffer.write(t.charAt(t.length-1),this.encoding),t.substring(0,s)}return t},l.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var n=e[e.length-t];if(1==t&&6==n>>5){this.charLength=2;break}if(2>=t&&14==n>>4){this.charLength=3;break}if(3>=t&&30==n>>3){this.charLength=4;break}}return t},l.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var n=this.charReceived,i=this.charBuffer,r=this.encoding;t+=i.slice(0,n).toString(r)}return t}}});