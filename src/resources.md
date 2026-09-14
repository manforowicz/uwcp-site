---
title: Resources
---

Guides, practice problems, and tools for competitive programming. Feel free to suggest more!

<h2 id="start-here">Start here</h2>

- [USACO Guide](https://usaco.guide/)
- [CSES](https://cses.fi/problemset)
- [UW practice group](https://vjudge.net/group/uw-cp-club)

<h2 id="learn-algorithms">Learn algorithms</h2>

- [CP-algorithms](https://cp-algorithms.com/)
- [Codeforces catalog](https://codeforces.com/catalog)
- [Codeforces EDU](https://codeforces.com/edu/courses)
- [VisuAlgo](https://visualgo.net/en)
- [OI Wiki](https://oi-wiki.org/)
- [CP Book](https://cpbook.net/)

<h2 id="practice-compete">Practice & compete</h2>

### Online judges

- [Codeforces](https://codeforces.com/)
- [AtCoder](https://atcoder.jp/)
- [USACO](https://www.usaco.org/)
- [vjudge](https://vjudge.net/)
- [oj.uz](https://oj.uz/problems)
- [TOKI](https://tlx.toki.id/)
- [Codewars](https://www.codewars.com/)
- [CodeChef](https://www.codechef.com/)

### Problem sets

- [AtCoder Educational DP contest](https://atcoder.jp/contests/dp)
- [90 classical problems](https://atcoder.jp/contests/typical90/tasks)

### Seasonal contests

- [Meta Hacker Cup](https://www.facebook.com/codingcompetitions/hacker-cup)
- [Advent of Code](https://adventofcode.com/)

<h2 id="libraries-tools">Libraries & tools</h2>

### Code and development

- [KACTL](https://github.com/kth-competitive-programming/kactl)
- [Library Checker](https://judge.yosupo.jp/)
- [CP Editor](https://cpeditor.org/)
- [Graph Editor](https://csacademy.com/app/graph_editor/)
- [Polygon](https://polygon.codeforces.com/)

### Track your practice

- [Codeforces Checklist](https://cf.kira924age.com/)
- [AtCoder Checklist](https://kenkoooo.com/atcoder)

<h2 id="group-games">Group games</h2>

- [AtCoder Lockout](https://kenkoooo.com/atcoder)
- [Codeforces Lockout Discord bot](https://codeforces.com/blog/entry/78546)
- [TLE Discord bot](https://github.com/cheran-senthil/TLE)

<h2 id="interview-practice">Interview practice</h2>

- [HackerRank](https://www.hackerrank.com/)
- [LeetCode](https://leetcode.com/)

<h2 id="glossary">Glossary</h2>

100 common terms, grouped by topic.

### Contests and community

- CP (competitive programming): Solving programming problems under time and resource limits.
- OI (Olympiad in Informatics): An informatics competition, often with partial-credit scoring.
- ICPC: International Collegiate Programming Contest; a university team competition.
- OJ (online judge): A service that runs submissions against tests and reports results.
- Editorial: An explanation of a problem's intended solution, often including code.
- Upsolving: Working on problems after a contest that you did not solve during it.
- Virtual contest: Taking a past contest with its original time limit for practice.
- Rating: A platform's numerical estimate of a contestant's performance level.
- Division: A contest category separating participants by level or eligibility.
- Subtask: A restricted version of a problem worth part of the total score.

Further reading: [USACO Guide introduction](https://usaco.guide/general/intro-cp) and [Codeforces discussion of upsolving](https://codeforces.com/blog/entry/55303).

### Judging and verdicts

- AC (accepted): The submission passed the judge's required tests.
- WA (wrong answer): The output failed the judge's correctness check.
- TLE (time limit exceeded): The program took longer than the allowed time.
- MLE (memory limit exceeded): The program used more memory than allowed.
- RE / RTE (runtime error): The program failed while running, for example by crashing.
- CE (compilation error): The submitted source could not be compiled.
- Pretests: An initial subset of tests; passing them may not mean final acceptance.
- System tests: The fuller judging phase used to determine final results in some contests.
- Hack: A valid test case submitted to expose a flaw in another contestant's solution.
- Interactive problem: A problem where your program exchanges queries and responses with a judge.

Further reading: [USACO FAQs](https://usaco.guide/general/usaco-faq) and [Codeforces scoring and judging](https://codeforces.com/blog/entry/133094).

### Complexity and debugging

- Constraints: Limits on input sizes and values that help determine a feasible approach.
- Time complexity: How an algorithm's running time grows with input size.
- Space complexity: How an algorithm's memory use grows with input size.
- Big O: Notation for an asymptotic upper bound, such as O(n log n).
- Amortized analysis: Bounding the average cost per operation over a sequence, without assuming random inputs.
- Constant factor: A multiplicative cost hidden by asymptotic notation that can matter in practice.
- Edge case: An unusual or boundary input, such as an empty range or repeated values.
- Overflow: A computation producing a value outside its numeric type's representable range.
- UB (undefined behavior): An operation for which the language gives no behavior guarantees.
- Stress testing: Comparing a solution against a trusted one on many generated inputs.

Further reading: [USACO FAQs on correctness and debugging](https://usaco.guide/general/usaco-faq).

### Common techniques

- Brute force: Enumerating candidates directly and checking each one.
- Greedy: Making a locally preferred choice at each step; correctness needs justification.
- Binary search: Repeatedly halving an ordered search space using a monotone condition.
- Two pointers: Moving two indices through a sequence to avoid repeated work.
- Sliding window: Maintaining information about a contiguous range as its boundaries move.
- Prefix sums: Cumulative sums that let you compute a range sum by subtraction.
- Difference array: Storing changes between neighbors to make range additions efficient.
- Coordinate compression: Replacing distinct values with ranks while preserving their order, not their distances.
- Sweep line: Processing ordered events while maintaining the state relevant to the current position.
- Meet in the middle: Splitting an exhaustive search into halves and combining their results.

Further reading: [Codeforces tutorial catalog](https://codeforces.com/catalog).

### Dynamic programming

- DP (dynamic programming): Reusing solutions to overlapping subproblems to solve a larger problem.
- State: The information that identifies a subproblem in a DP.
- Transition: A rule for deriving one state's answer from other states.
- Base case: A state with a directly known answer that starts a recurrence.
- Memoization: Caching results, commonly in a recursive, top-down solution.
- Tabulation: Filling a DP table in an order that computes dependencies first.
- Knapsack DP: Choosing items under a capacity constraint, often to maximize value.
- Bitmask DP: Representing a subset or small collection of flags as bits in a state.
- Digit DP: Counting or optimizing numbers by processing their digits with state constraints.
- Tree DP: Combining answers from parts of a tree, often from children to parents.

Further reading: [CP-Algorithms introduction to DP](https://cp-algorithms.com/dynamic_programming/intro-to-dp.html) and [Codeforces tutorial catalog](https://codeforces.com/catalog).

### Data structures

- Stack: A collection that removes the most recently added item first.
- Queue: A collection that removes the earliest added item first.
- Deque: A double-ended queue supporting insertion and removal at both ends.
- Priority queue / heap: A structure that efficiently retrieves the highest- or lowest-priority item.
- DSU (disjoint set union): A structure supporting component merges and membership queries; also called union-find.
- Fenwick tree / BIT: A binary indexed tree commonly used for point updates and prefix sums.
- Segment tree: A tree of interval summaries supporting range queries and updates.
- Lazy propagation: Deferring compatible range updates in a tree until their children need them.
- Sparse table: A structure for static range queries, particularly minimum or maximum queries.
- Monotonic stack: A stack kept in sorted order, often used to find the next smaller or greater element.

Further reading: [CP-Algorithms data structures](https://cp-algorithms.com/) and [segment trees](https://cp-algorithms.com/data_structures/segment_tree.html).

### Graph fundamentals

- Vertex / node: An individual object in a graph.
- Edge: A connection between two vertices; it may have a direction or weight.
- Adjacency list: A graph representation listing each vertex's neighbors or outgoing edges.
- Path: A sequence of vertices joined by edges; a simple path repeats no vertices.
- Cycle: A closed path; a simple cycle repeats only its starting vertex.
- Connected component: A maximal set of mutually reachable vertices in an undirected graph.
- Tree: A connected undirected graph with no cycles.
- DAG (directed acyclic graph): A directed graph containing no directed cycles.
- Bipartite graph: A graph whose vertices split into two groups with every edge crossing between them.
- Degree: The number of incident edge ends; directed graphs distinguish in-degree and out-degree.

Further reading: [CP-Algorithms graph topics](https://cp-algorithms.com/).

### Graph algorithms

- BFS (breadth-first search): Exploring vertices by distance in edges; finds shortest paths in unweighted graphs.
- DFS (depth-first search): Exploring a branch as far as possible before backtracking.
- Dijkstra's algorithm: Finding shortest paths from a source when edge weights are nonnegative.
- Topological sort: Ordering a DAG's vertices so every edge goes forward.
- SCC (strongly connected component): A maximal set of mutually reachable vertices in a directed graph.
- MST (minimum spanning tree): A spanning tree with minimum total edge weight in a connected weighted graph.
- LCA (lowest common ancestor): The deepest shared ancestor of two vertices in a rooted tree.
- Binary lifting: Precomputing jumps of powers of two to answer ancestor or repeated-successor queries.
- Maximum flow: Sending as much flow as possible from a source to a sink within edge capacities.
- Matching: A set of edges that share no endpoints; a maximum matching has the most edges possible.

Further reading: [CP-Algorithms BFS](https://cp-algorithms.com/graph/breadth-first-search.html) and [graph algorithm index](https://cp-algorithms.com/).

### Strings and sequences

- Subarray / substring: A contiguous portion of an array or string.
- Subsequence: Elements selected in their original order, not necessarily contiguously.
- Prefix / suffix: A portion starting at the beginning or ending at the end of a sequence.
- Lexicographic order: Dictionary-style ordering based on the first differing element.
- Palindrome: A sequence that reads the same forward and backward.
- Trie: A tree representing sequences by shared prefixes.
- Rolling hash: A compact sequence fingerprint that can be updated efficiently; collisions are possible.
- KMP (Knuth-Morris-Pratt): A linear-time string-matching algorithm using information about matching prefixes.
- Z-function: For each position, the length of the longest prefix matching the substring starting there.
- LIS (longest increasing subsequence): A longest subsequence whose values are strictly increasing.

Further reading: [CP-Algorithms string hashing](https://cp-algorithms.com/string/string-hashing.html) and [string algorithm index](https://cp-algorithms.com/).

### Math and bit operations

- GCD (greatest common divisor): The greatest positive integer dividing both given integers, when not both zero.
- LCM (least common multiple): The smallest positive common multiple of two positive integers.
- Modular arithmetic: Arithmetic with values identified by their remainders modulo a positive integer.
- Modular inverse: A value that multiplies a number to 1 modulo m; exists exactly when their GCD is 1.
- Binary exponentiation: Computing powers using repeated squaring in logarithmically many multiplications.
- Sieve of Eratosthenes: Finding primes up to a bound by marking multiples of primes.
- Binomial coefficient: The number of ways to choose k objects from n distinct objects without regard to order.
- XOR (exclusive OR): A bitwise operation setting each result bit when the corresponding input bits differ.
- Popcount: The number of set bits, or ones, in a bit representation.
- MEX (minimum excluded): The smallest nonnegative integer absent from a collection.

Further reading: [CP-Algorithms binary exponentiation](https://cp-algorithms.com/algebra/binary-exp.html) and [math topics](https://cp-algorithms.com/).
