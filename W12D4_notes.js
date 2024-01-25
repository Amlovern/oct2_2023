/*

Scopes

DRY up our code
Ensure we are retrieving data from our DB that we intend to receive

Couple ways to add scopes:
    Default scope to model
        In last object in init:
            defaultScope: {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
    Scopes property
        Point to an object
        That object has KV pairs with the key being the name of the scope, and the value being the object to be passed to the query
        When applying a non-default scope, we have to adjust our query
            We have to add .scope() to the query
            <model>.scope(<scopes>).<query method>()
        If we add a named scope, then the defaultScope will not be applied automatically
            We need to specify it in the .scopes()

        We can also add a function scope
        Function scopes return a filter to be applied to the query
        Function scopes get passed in as another object with the key of "method" and a value of an array:
            [<func scope name>, <args>]

JWT - JSON Web Token
    This how we handle User Auth
        If we want to log a user in, we create a token. If we want to log a user out, we delete that token.

How can we keep data safe as we transport it across the web?
    Encode
        Not very secure. Can easily be decoded.
    Encrypt
        More secure. Can't be decrypted unless they have the password/secret key
        If a bad user gets that secret key, we are in trouble
    Hash
        Cannot be reverse-engineered
        Hashing is deterministic
        There is a problem here: There is a possibility that multiple strings could end up hashing to the same value
            This is called a Hash Collision
        We can add Salt to a hash to avoid hash collisions

JWTs
    Consists of 3 parts:
        Header
            Contains the type of token
            Indicator for the algo that we use for the hash
            JWT will automatically set these
        Payload
            The data we are transmitting
            Can add claims - such as an expiration
            ONLY encoded
        Signature
            Hash of the header, payload, and a secret key
            Allows us to validate that our token hasn't been tampered with

    To create a token:
        jwt.sign(<payload>, <secretKey>)
        
    To verify a token:
        jwt.verify(<token>, <secretKey>)

*/