import { StudyRoomPage } from './app.po';

describe('study-room App', () => {
  let page: StudyRoomPage;

  beforeEach(() => {
    page = new StudyRoomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
