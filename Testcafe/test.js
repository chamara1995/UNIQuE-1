import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `localhost:3000`;

test('My first test', async t => {
    await t
        .typeText('#user', 'tadHack@dialog.lk')
        .typeText('#password', '123')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});