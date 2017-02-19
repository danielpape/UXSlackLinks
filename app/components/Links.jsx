var React = require('react');
var Books = require('Books');
var Twitter = require('Twitter');
var Talks = require('Talks');
var Icons = require('Icons');
var Colours = require('Colours');
var UXDesignersWebsites = require('UXDesignersWebsites');
var Guidelines = require('Guidelines');
var Prototyping = require('Prototyping');
var ResearchTools = require('ResearchTools');
var Design = require('Design');
var Collaboration = require('Collaboration');
var UserFlows = require('UserFlows');
var Articles = require('Articles');
var TimeBoxing = require('TimeBoxing');
var Miscellany = require('Miscellany');


var Links = () => {
    return (
            <div className="container">
                <div className="row">
                  <Books/>
                  <Twitter/>
                  <ResearchTools/>
                </div>
                <div className="row">
                  <TimeBoxing/>
                  <UserFlows/>
                  <Prototyping/>
                </div>
                <div className="row">
                  <Guidelines/>
                  <Icons/>
                  <Colours/>
                </div>
                <div className="row">
                  <Design/>
                  <Articles/>
                  <Collaboration/>
                </div>
                <div className="row">
                  <Talks/>
                  <UXDesignersWebsites/>
                  <Miscellany/>
                </div>
            </div>
          );
};

module.exports = Links;
