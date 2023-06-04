# Ingram Micro Cloud Consult

An interactive React App

## Dependencies

node v14 +

## Getting started

This is a React-Typescript Single Page Application that uses Redux-toolkit for state management.<br /><br />
The "public" folder contains the index.html file as well as static assets and documents not used for rendering (eg. logo, download documents etc)<br /><br />
The src folder contains files and assets necessary for content-rendering.<br /><br />
The src/app folder contains the main redux store and relative reducers: always use the store to update state that is used in multiple components<br /><br />
The src/assets folder is used to store all assets: it is important to locate here all the images/ fonts. If you save images/fonts in any other folder, they will load properly on development environment but will fail to load on production.<br /><br />
The src/icons folder contains all svg files converted into jsx to make icon usage easier in other React components.<br /><br />
The src/data folder contains the files that most of the content is pulled from, and the filtering functions used to dinamically update the content.<br /><br />
The src/scss folder contains the global scss files, with styles that can be used from any component. It also contains some of the bootstrap 5 styles used to build this project.<br /><br />
Finally the src/components and src/views contains react components and relative helper or style files.<br /><br />
In the package.json file you will find a detailed list of dependencies used in this project. To be able to inspect and debug in development mode, or to produce a production-ready folder, you will need to run the following scripts: <br />

Install project dependencies

```node
npm install
```

To run dev environment

```node
npm run start
```

To build production folder

```node
npm run build
```

## Updating painpoints

Painpoints can be added / removed without interfering with the app's rendering and functionality. <br />
Painpoints are dinamically pulled in the app from the following file:

```
src/data/paipoints.json
```

The painpoint object schema is as follows:

```json
{
    "Notes": {
        "Questions": ""
    },
    "Pain Point": "A constant stream of new competitors in the market makes it hard to maintain a differentiated customer offering.",
    "Experience Customer": "X",
    "Experience Employee": "",
    "Experience Supplier": {
        "Partner": ""
    },
    "Growth Stage Startup": "",
    "Growth Stage Expansion": "",
    "Growth Stage Maturity": "X",
    "Business Pillar Modern Cloud Platforms": "",
    "Business Pillar Seamless Security": "",
    "Business Pillar Connected Workplace": "",
    "Business Pillar Business Performance": "Dynamics 365 Marketing, Dynamics 365 Customer Insights, Dynamics 365 Sales Enterprise, Power BI",
    "Function Operations": "",
    "Function HR": "",
    "Function Finance": "",
    "Function Sales": "X",
    "Function Marketing": "X",
    "Function Distribution & Logistics": ""
}
```

-   Most fields accept "X" (make sure to wrap it with double quotes) if ticked or an empty string ("") if not ticked.
-   The "Pain Point" field accepts a string(it will be the description of the Pain Point)
-   The "Business Pillar" fields accept a string that represents a list: items of the list are separated by a comma ( , )

## Updating SKU's

SKUs can be added / removed without interfering with the app's rendering and functionality. <br />
SKUs are dinamically pulled in the app from the following file:

```
src/data/sku.json
```

The SKU object schema is as follows:

```json
{
    "SKU": "Adobe Creative Cloud",
    "SKU Description": "Adobe Creative Cloud gives users access to a collection of software developed by Adobe for graphic design, video editing, web development, photography, and cloud services.",
    "SKU Capabilities": "Design | Video editing | Web development | Photography | Illustration | Cloud services"
}
```

-   "SKU" and "SKU description" fields are strings.
-   "SKU Capabilities" is a string that represents a list: items of the list are sparated by a vertical bar ( | )

## Updating other data

It is not possible to add additional fields to the following:

-   Busineess Functions
    -   They are rendered in a pie chart that has been styled to contain specifically 6 slices
-   Experiences
    -   They are rendered in a pie chart that has been styled to contain specifically 3 slices
-   Growth stages
    -   They are rendered on a table that has been styled to containe specifically 3 elements on desktop

These changes must be done by a developer

## Updating proposal template download file

You can update the url of the download file located in:

```
src/views/pages/static/proposal/Proposal.tsx
```

in line 10:

```js
    fetch('proposal.docx').then(response => {
```

replace 'proposal.docx' with the target url
