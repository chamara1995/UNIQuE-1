import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:3000`;

test('My 1st test', async t => {
    await t
        .typeText('#user', 'tadHack@dialog.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});
