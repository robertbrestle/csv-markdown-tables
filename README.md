# csv-markdown-tables
A simple client-side JS converter for CSV to markdown tables.

# Usage
Include `csv-markdown-tables.js` on your page, and 

To initialize a form:
`MarkdownTablesJS.initForm(formId, inputId, firstRowHeaderId, outputId)`

To perform the conversion and return the markdown table as a string:
`MarkdownTablesJS.convert(csvText, firstRowHeaders)`

# Example

CSV input
```
name,age,color,date
Arturo,43,ivory,2022-10-13
Renee,22,fuchsia,2023-02-09
Morris,39,lavender,2022-12-02
Ivan,58,maroon,2023-02-10
Janice,18,magenta,2022-11-24
Diane,74,cyan,2023-04-29
Carlos,35,maroon,2023-06-14
Darrel,28,orchid,2023-02-26
Denise,44,silver,2023-06-07
Jason,19,ivory,2023-06-26
```

Markdown table output
```
name | age | color | date
------ | ------ | ------ | ------
Arturo | 43 | ivory | 2022-10-13
Renee | 22 | fuchsia | 2023-02-09
Morris | 39 | lavender | 2022-12-02
Ivan | 58 | maroon | 2023-02-10
Janice | 18 | magenta | 2022-11-24
Diane | 74 | cyan | 2023-04-29
Carlos | 35 | maroon | 2023-06-14
Darrel | 28 | orchid | 2023-02-26
Denise | 44 | silver | 2023-06-07
Jason | 19 | ivory | 2023-06-26
```

&nbsp;
