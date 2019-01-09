$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("YouTubeSearch.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Feature File"
    }
  ],
  "line": 20,
  "name": "Youtube Search Validations",
  "description": "",
  "id": "youtube-search-validations",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@UATTesting"
    }
  ]
});
formatter.scenario({
  "line": 22,
  "name": "Youtube Search positive scenarios",
  "description": "",
  "id": "youtube-search-validations;youtube-search-positive-scenarios",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Open chrome browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enter search criteria",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.match({
  "location": "YouTubeSearchStepDef.open_chrome_browser_and_enter_url()"
});
formatter.result({
  "duration": 9792567941,
  "status": "passed"
});
formatter.match({
  "location": "YouTubeSearchStepDef.enter_search_criteria()"
});
formatter.result({
  "duration": 1223532304,
  "status": "passed"
});
formatter.match({
  "location": "YouTubeSearchStepDef.click_on_search_button()"
});
formatter.result({
  "duration": 3968688189,
  "status": "passed"
});
});