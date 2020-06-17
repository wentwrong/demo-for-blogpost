import { Selector } from 'testcafe';

fixture `Product page`
    .page('http://localhost:8080');

test('Open entire page', async t => {
    await t
        .takeScreenshot();
});

test('`Add To Cart` button should exists', async t => {
    await t
        .takeScreenshot()
        .click(Selector('button').withText('Add To Cart'));
});
