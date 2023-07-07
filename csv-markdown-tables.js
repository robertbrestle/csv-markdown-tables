MarkdownTablesJS = {
    /**
     * Initialize a <form> for users to perform conversions. See the example on github.
     * @param {string} formId - form identifier
     * @param {string} inputId - input textarea identifier
     * @param {string} firstRowHeaderId - input checkbox identifier
     * @param {string} outputId - output textarea identifier
     */
    initForm: function(formId, inputId, outputId, firstRowHeaderId, delimiterId) {
        if (typeof formId === "undefined" || typeof inputId === "undefined" || typeof outputId === "undefined" || typeof firstRowHeaderId === "undefined" || typeof delimiterId === "undefined") {
            console.error("Invalid init parameters");
            return null;
        }
        // init form listener
        document.getElementById(formId).addEventListener("submit", function(e) {
            e.preventDefault();

            let inputText = document.getElementById(inputId).value;
            let firstRowHeaderBool = document.getElementById(firstRowHeaderId).checked;
            let delimiter = document.getElementById(delimiterId).value;
            let convert = MarkdownTablesJS.convert(inputText, firstRowHeaderBool, delimiter);
            document.getElementById(outputId).value = convert;
        });
    }
    ,
    /**
     * Convert a CSV string to a markdown table string.
     * @param {string} csvText - CSV table
     * @param {boolean} firstRowHeader - if the first row should be treated as the column headers
     * @param {delimiter} delimiter - 
     * @returns {string} markdown table
     */
    convert: function(csvText, firstRowHeader, delimiter) {
        let response = "";

        let rows = csvText.split("\n");
        let firstRow = 1; // default data to the second row
        // set delimiter
        if (typeof delimiter === "undefined" || delimiter == null || delimiter == "") {
            delimiter = ",";
        }
        let delimiterRegexp = new RegExp(delimiter, "g");
        let notDelimiterRegexp = new RegExp("[^" + delimiter + "]*", "g");

        if (firstRowHeader) {
            // header row
            response += rows[0].trim().replace(delimiterRegexp, " | ") + "\n";
        }else {
            let headerRow = [];
            let firstRowLength = rows[0].split(",").length;
            for(let i = 0; i < firstRowLength; i++) {
                headerRow.push("Column " + (i + 1));
            }
            response += headerRow.join(" | ") + "\n";

            firstRow = 0; // data starts on first row
        }

        // spacer row
        response += rows[0].replace(notDelimiterRegexp, "---").replace(delimiterRegexp, " | ") + "\n";

        for(let i = firstRow; i < rows.length; i++) {
            response += rows[i].trim().replace(delimiterRegexp, " | ") + "\n";
        }

        return response;
    }
};
