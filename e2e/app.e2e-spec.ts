import { HotelappPage } from './app.po';

describe('hotelapp App', () => {
  let page: HotelappPage;

  beforeEach(() => {
    page = new HotelappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
