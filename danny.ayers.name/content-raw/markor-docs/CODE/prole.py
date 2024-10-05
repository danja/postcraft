class Prolog:
    def __init__(self):
        self.facts = set()
        self.rules = {}

    def assert_fact(self, fact):
        self.facts.add(fact)

    def define_rule(self, rule_head, rule_body):
        if rule_head not in self.rules:
            self.rules[rule_head] = []
        self.rules[rule_head].append(rule_body)

    def unify(self, query, fact, bindings=None):
        if bindings is None:
            bindings = {}
        return self._unify_recursive(query, fact, bindings)

    def _unify_recursive(self, query, fact, bindings):
        if len(query) != len(fact):
            return None
        for q, f in zip(query, fact):
            if self._process_unification(q, f, bindings) is None:
                return None
        return bindings

    def _process_unification(self, q, f, bindings):
        if q.isupper():  # Variable in query
            if q in bindings:
                if bindings[q] != f:
                    return None
            else:
                bindings[q] = f
        elif q != f and f not in bindings:
            return None
        return bindings

    def query(self, query, depth=0):
        return self._query_recursive(query, depth, {})

    def _query_recursive(self, query, depth, bindings):
        if depth > 10:
            return []

        results = self._query_facts(query, bindings)
        results.extend(self._query_rules(query, depth, bindings))
        return results

    def _query_facts(self, query, bindings):
        results = []
        query_functor, *query_args = query
        for fact in self.facts:
            fact_functor, *fact_args = fact
            if query_functor == fact_functor:
                new_bindings = self.unify(query_args, fact_args, bindings)
                if new_bindings is not None:
                    results.append(new_bindings)
        return results

    def _query_rules(self, query, depth, bindings):
        results = []
        query_functor, *query_args = query
        rule_head = (query_functor, *['X'] * len(query_args))
        if rule_head in self.rules:
            for rule_body in self.rules[rule_head]:
                results.extend(self._apply_rule(query, rule_body, depth, bindings))
        return results

    def _apply_rule(self, query, rule_body, depth, bindings):
        results = []
        query_functor, *query_args = query
        for subquery in rule_body:
            subquery_functor, *subquery_args = subquery
            subquery_bindings = self.unify(subquery_args, query_args, dict(bindings))
            if subquery_bindings is not None:
                print(f"Applying rule at depth {depth}: {subquery} with bindings {subquery_bindings}")
                subquery_results = self._query_recursive((subquery_functor, *subquery_args), depth+1, subquery_bindings)
                for res in subquery_results:
                    unified_args = [res.get(arg, arg) for arg in query_args]
                    new_binding = self.unify(query_args, unified_args, subquery_bindings)
                    if new_binding:
                        results.extend(self._query_recursive((subquery_functor, *unified_args), depth+1, new_binding))
        return results

# Example usage
prolog = Prolog()
prolog.assert_fact(('parent', 'alice', 'bob'))
prolog.assert_fact(('parent', 'bob', 'charlie'))
prolog.define_rule(('ancestor', 'X', 'Y'), [('parent', 'X', 'Y')])
prolog.define_rule(('ancestor', 'X', 'Y'), [('parent', 'X', 'Z'), ('ancestor', 'Z', 'Y')])

# Test cases
print("Test Case 1: Querying a simple fact (parent, alice, bob):", prolog.query(('parent', 'alice', 'bob')))
print("Test Case 2: Querying a basic rule (ancestor, alice, bob):", prolog.query(('ancestor', 'alice', 'bob')))
print("Test Case 3: Querying a recursive rule (ancestor, alice, charlie):", prolog.query(('ancestor', 'alice', 'charlie')))
