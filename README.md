# Highpoint Masjid Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It hosts the code used to build the Highpoint Masjid in Highpoint, West Seattle. This website will be used as a templated to build other free mosque websites in the future. It is loosely based on [Mosque Screen's](https://github.com/Mosque-Screens) [Mosque website](https://github.com/Mosque-Screens/mosque.website) but converted to react and having some lifecycle improvments added to make it easy for mosques to host their free website on GitHub Pages.

Some of those improvements include the following:
1. The addition of GitHub actions pipeline to build and deploy the website to GitHub pages. For more information on that check out [this blog](https://dev.to/achukka/deploy-react-app-using-github-actions-157d) for more information
1. Conversion of the Next.js app to React
1. Movement of all data to the data files so user only needs up update the data files for their needs
1. Addition of a proper nav bar
1. Addition of an events page
1. Update data file to support new paradigm

## Getting Started

First fork the repo by clicking on the fork button at the top right then clone the website (star it too if you like it while you're at it 😉)

```bash
git clone https://github.com/<your username>/highpoint-masjid
```

Install the required packages to run it locally
```bash
npm install
```

Run it locally to test it out
```bash
npm run start
```

## Deploy your mosque website

Update the `src\data\mosques.yml` file as required. Each page will require its own entry in content_sections and pages part of the database

Convert the yml data to json by running
```bash
npm run release
```

commit and push your changes to your GitHub repo

Please note, you will need to configure your repo to run GH pages by using the instructions in [this blog](https://dev.to/achukka/deploy-react-app-using-github-actions-157d)
