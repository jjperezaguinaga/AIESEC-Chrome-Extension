/**
* Module for aiesec applications
* @module aiesec
**/

var aiesec = (function(aiesec, undefined) {
	var aiesec = aiesec || {};

	/**
	* Bootstrap for the TN Search Tool that wraps all the required libraries.
	* @constructor
	* @class bootstrapSearchTn
	* @namespace aiesec
	* @chainable
	*/
	aiesec.bootstrapSearchTn = function() {
		var self = {};

		self.searchFilter = ko.observable({});

		self.wasLoadedSuccessfully = function() {
			for (var key in self) {
				if(self.hasOwnProperty(key) && !self[key] instanceof Function) {			
					if(typeof self[key] === 'undefined') return false;
				}
			}
			return true;
		}

		self.init = function() {
			self.searchFilter(new aiesec.filterSearch());			
			return self.wasLoadedSuccessfully() ? self : {};			
		}

		return self.init();
	}
			
	return aiesec;
})(aiesec)