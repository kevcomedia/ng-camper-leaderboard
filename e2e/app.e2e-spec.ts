import { NgCamperLeaderboardPage } from './app.po';

describe('ng-camper-leaderboard App', () => {
  let page: NgCamperLeaderboardPage;

  beforeEach(() => {
    page = new NgCamperLeaderboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
