"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var story_service_1 = require('./story.service');
var AppComponent = (function () {
    function AppComponent(router, storyService) {
        this.router = router;
        this.storyService = storyService;
        this.title = 'Story Organizer';
        this.author = 'Matthew Nerger';
    }
    AppComponent.prototype.goToPage = function (page) {
        var link = ['/' + page];
        this.router.navigate(link);
    };
    AppComponent.prototype.saveToDisk = function () {
        var stories = this.storyService.getStories();
        var ids = this.storyService.getIDs();
        this.storyService.saveStories(stories, ids);
        var blob = new Blob([localStorage["story.organizer.story.array"]], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "story-organizer-data.sod");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            templateUrl: 'templates/app.component.html',
            styleUrls: ['styles/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                story_service_1.StoryService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, story_service_1.StoryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map