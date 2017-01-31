/**
 * OAuthController
 */

module.exports = {
    token: function(req,res){
        API(OAuth.sendToken,req,res);
    },

    'token-info': function(req,res){
        API(OAuth.tokenInfo,req,res);
    }

};