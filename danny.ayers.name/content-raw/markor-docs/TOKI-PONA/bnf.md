<sentence> ::= <subject> <predicate>
             | <interjection> <sentence>
             | <sentence> <prepositional_phrase>

<subject> ::= <noun>
            | <noun_phrase>
            | <proper_noun>

<predicate> ::= <verb> [<object>]
              | <adjective>

<noun_phrase> ::= <noun> [<noun> | <adjective>]

<object> ::= <noun>
           | <noun_phrase>

<prepositional_phrase> ::= <preposition> <noun_phrase>

<interjection> ::= <word>

<noun> ::= 'jan' | 'kili' | 'tomo' | ... (other nouns)

<verb> ::= 'moku' | 'lukin' | 'pali' | ... (other verbs)

<adjective> ::= 'suli' | 'lili' | 'pona' | ... (other adjectives)

<preposition> ::= 'kepeken' | 'tan' | 'sama' | ... (other prepositions)

<word> ::= (any valid Toki Pona word)

<proper_noun> ::= (any proper noun, usually starting with a capital letter)