/**
* Profile
* @namespace openlab.profiles.services
*/
(function () {
  'use strict';

  angular
    .module('openlab.profiles.services')
    .factory('Profile', Profile);

  Profile.$inject = ['$http'];

  /**
  * @namespace Profile
  */
  function Profile($http) {
    /**
    * @name Profile
    * @desc The factory to be returned
    * @memberOf openlab.profiles.services.Profile
    */
    var Profile = {
      destroy: destroy,
      get: get,
      update: update,
      all: all
      //getApi: getApi
    };

    return Profile;

    /////////////////////

    /**
    * @name destroy
    * @desc Destroys the given profile
    * @param {Object} profile The profile to be destroyed
    * @returns {Promise}
    * @memberOf openlab.profiles.services.Profile
    */
    function destroy(profile) {
      return $http.delete('/api/v1/accounts/' + profile + '/');
    }


    /**
    * @name get
    * @desc Gets the profile for user with username `username`
    * @param {string} username The username of the user to fetch
    * @returns {Promise}
    * @memberOf openlab.profiles.services.Profile
    */
    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/');
    }

    /**
    * @name update
    * @desc Update the given profile
    * @param {Object} profile The profile to be updated
    * @returns {Promise}
    * @memberOf openlab.profiles.services.Profile
    */
    function update(profile) {
      return $http.put('/api/v1/accounts/' + profile.username + '/', profile);
    }

    /**
    * @name all
    * @desc Get all Profiles
    * @returns {Promise}
    * @memberOf openlab.profiles.services.Profile
    */
    function all() {
      return $http.get('/api/v1/accounts/');
    }

    ///**
    //* @name getApi
    //* @desc Gets the Api root for user with username `username`
    //* @param {string} username The username of the user to fetch
    //* @returns {Promise}
    //* @memberOf openlab.profiles.services.Profile
    //*/
    //function getApi(username) {
    //  return $http.get('/api/v1/');
    //}
  }
})();