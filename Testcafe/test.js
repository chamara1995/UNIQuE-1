import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `localhost:3000`;

test('My 1st test', async t => {
    await t
        .typeText('#user', 'tadHack@dialog.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 2nd test', async t => {
    await t
        .typeText('#user', 'slid@ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 3rd test', async t => {
    await t
        .typeText('#user', 'pera@pdn.ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 4th test', async t => {
    await t
        .typeText('#user', 'abc@123.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 5th test', async t => {
    await t
        .typeText('#user', 'gihan@ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 6th test', async t => {
    await t
        .typeText('#user', 'gihan@ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 7th test', async t => {
    await t
        .typeText('#user', 'e14108@ce.pdn.ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 8th test', async t => {
    await t
        .typeText('#user', '123@ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 9th test', async t => {
    await t
        .typeText('#user', 'e14244@pdn.ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 10th test', async t => {
    await t
        .typeText('#user', 'dialog@dialog.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});
test('My 11th test', async t => {
    await t
        .typeText('#user', 'viky@ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 12th test', async t => {
    await t
        .typeText('#user', 'e14403@pdn.ac.lk')
        .typeText('#password', '123')
        .click('#submit-button')
});

test('My 13th test', async t => {
    await t
        .typeText('#user', 'pera95@pdn.ac.lk')
        .typeText('#password', '1234')
        .click('#submit-button')
});