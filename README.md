## Algorithm

https://www.geeksforgeeks.org/vigenere-cipher/

## Deploy

hosted at AWS S3: http://gha-custom-action-hosting-sergiorgiraldo3.s3-website.eu-west-3.amazonaws.com/
using Github action as CD tool

## User stories

1. [x] User can see the app window with these components:
    - Plain text message input field
    - Encryption key input field
    - Action buttons - 'Encrypt' and 'Decrypt'
    - Resulting encrypted or decrypted message
2. [x] User can enter the text to be encrypted in the plain text message input field
3. [x] User can enter the Encryption key the Vigenere algorithm will use to encrypt the plain text message.
4. [x] User can click the 'Decrypt' button disabled until the plain text has been encrypted.
5. [x] User can click the 'Encrypt' button to encrypt the plain text message
6. [x] User can see the encrypted message displayed in the result field.

## Unit tests

- Cypress powered
