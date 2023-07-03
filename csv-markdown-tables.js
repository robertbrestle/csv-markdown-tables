MarkdownTablesJS = {
    /**
     * Initialize a <form> for users to perform conversions. See the example on github.
     * @param {string} formId - form identifier
     * @param {string} inputId - input textarea identifier
     * @param {string} firstRowHeaderId - input checkbox identifier
     * @param {string} outputId - output textarea identifier
     */
    initForm: function(formId, inputId, firstRowHeaderId, outputId) {
        if (typeof formId === "undefined" || typeof inputId === "undefined" || typeof firstRowHeaderId === "undefined" || typeof outputId === "undefined") {
            console.error("Invalid init parameters");
            return null;
        }
        // init form listener
        document.getElementById(formId).addEventListener("submit", function(e) {
            e.preventDefault();

            let inputText = document.getElementById(inputId).value;
            let firstRowHeaderBool = document.getElementById(firstRowHeaderId).checked;
            let convert = MarkdownTablesJS.convert(inputText, firstRowHeaderBool);
            document.getElementById(outputId).value = convert;
        });
    }
    ,
    /**
     * Convert a CSV string to a markdown table string.
     * @param {string} csvText - CSV table
     * @param {boolean} firstRowHeaders - if the first row should be treated as the column headers
     * @returns {string} markdown table
     */
    convert: function(csvText, firstRowHeaders) {
        let response = "";

        let rows = csvText.split("\n");
        let firstRow = 1; // default data to the second row

        if (firstRowHeaders) {
            // header row
            response += rows[0].trim().replace(/,/g, " | ") + "\n";
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
        response += rows[0].replace(/[^,]*/g, "---").replace(/,/g, " | ") + "\n";

        for(let i = firstRow; i < rows.length; i++) {
            response += rows[i].trim().replace(/,/g, " | ") + "\n";
        }

        return response;
    }
};
