import { TeacherStudentAppPage } from './app.po';

describe('teacher-student-app App', () => {
  let page: TeacherStudentAppPage;

  beforeEach(() => {
    page = new TeacherStudentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
