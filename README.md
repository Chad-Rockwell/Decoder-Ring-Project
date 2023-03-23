# Decoder Ring Project

## Caesar Shift
- it encodes or decodes your message by shifting each letter
- shift must _NOT_ be 0, less than -25 or over 25
- it will ignore capital letters
- it will maintain spaces and nonalphabetic symbols in the message
- it can handle shifts that go beyond the end of the alphabet

## Polybius Square
- it encodes each character into a pair of numbers and decodes from a pair of numbers back into alphabetic characters
- 'i' and 'j' share the same coded number
- it ignores capital letters
- it maintains spaces

## Substitution Cipher
- it will return false if the substitution alphabet provided has any repeating characters
- it will return false if the substitution alphabet provided is _NOT_ exactly 26 characters
- it will encode and decode a message using the substitution alphabet, abc would turn into !rt if those were also the first 3 characters of the provided alphabet
- it will maintain spaces and ignore capital letters