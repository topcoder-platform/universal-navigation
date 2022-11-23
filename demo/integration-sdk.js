(
  /**
   * @param {object} window - Reference to window object to make method shorter.
   * @param {object} document - Reference to the element that will contain the script tag and to make method shorter.
   * @param {string} scriptTagName - Contains the word 'script' to make method shorter.
   * @param {string} scriptAddress - The address of the main script that we need to load.
   * @param {string} globalName - This allows dynamically define global variable name to avoid conflicts with other SDKs.
   * @param {object} scriptElement - Stores the element that will be created later (result variable to avoid declaration within the method body)
   * @param {object} otherScriptElement -  The script tag that already located in the body before which we'll inject a newly created script tag (result variable to avoid declaration within the method body)
   */
  function (window, document, scriptTagName, scriptAddress, globalName, scriptElement, otherScriptElement) {
      // store the name of the global variable
      window['TcUnivNavConfig'] = globalName;

      // creates a global variable to delegate, so it will be available before script loaded 
      window[globalName] = window[globalName] || function () {
          // pushes arguments that were passed to delegate into queue
          // so they can be accessed later from the main script
          (window[globalName].q = window[globalName].q ?? []).push(arguments)
      };

      // epoch timestamp when the SDK was initialized
      window[globalName].l = 1 * new Date();

      // dynamically create a script tag element with async execution
      scriptElement = document.createElement(scriptTagName);
      otherScriptElement = document.getElementsByTagName(scriptTagName)[0];
      scriptElement.async = 1; // it is just a shorter version of `true`
      scriptElement.type = 'module';
      scriptElement.src = scriptAddress;

      // inject the script tag before first script tag found within document
      otherScriptElement.parentNode.insertBefore(scriptElement, otherScriptElement);
  }
)(window, document, 'script', '//localhost:8080/tc-universal-nav.js', 'tcUniNav');