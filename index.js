/** Simplified jsonit which is a JSON parser that isn't strict
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     objit
 */
 (function() {
  'use strict';
  var jsonit = require('jsonit')


  /** objit
   *  @constructor
   *  @param      {object || JsonIt string} data
   *  @param      {string} type    - optional type to assign
   *  @param      {string} setType - optional set default type
   *  @return     {object}
   */
  function objit(data, type, setType) {
    if ('string' !== typeof data) {
      return data
    }
    return jsonit(data, type, setType)
  }



  module.exports = objit
})();
