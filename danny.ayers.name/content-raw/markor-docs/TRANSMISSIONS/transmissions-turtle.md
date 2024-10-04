@prefix : <http://example.org/> .

:Postcraft a :Transmission ;
   :contains :a, :b, :c .

:a :list (:s1 :s2 :s3 ) .

:b :list (:s3 :s104 :s105) .
:c :list (:s3 :s204 :s205) .


---
@prefix : <http://example.org/> .

:a :list (:s1 :s2 :s3 ) .

:b :list (:s100 :s101 :s102) .
:c :list (:s200 :s201 :s202) .

Or
:s3 :to :s100 .
:s3 :to :s200 .

Or

:e :join (:s3 :s100) .
:e :join (:s3 :s200) .

----
@prefix : <http://example.org/> .

:a :list (:s1 :s2 :s3 ) .

:b :list (:s3 :s4 :s5 ) .
:c :list (:s3 :s104 :s105) .

---


@prefix : <http://example.org/stuff/1.0/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
:a :b
  [ rdf:first "apple";
    rdf:rest [ rdf:first "banana";
               rdf:rest rdf:nil ]
  ] .
  

:s1 :to :s2 .
:s2 to :s
:b :to ::c

[] :to [ foaf:name "Bob" ] .
