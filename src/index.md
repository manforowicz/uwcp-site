---
title: UW Competitive Programming
heading: UW Competitive Programming Club
---

Hi! We're a group of students at the University of Washington passionate about competitive programming and problem solving.

Check out this [CSES problem](https://cses.fi/problemset/task/1621/) which asks you to output how many distinct values are in a given list. In case you're stuck, here's one possible approach:

```cpp
// C++
#include <iostream>
#include <set>
using namespace std;

int main() {	
    // Read n from standard input.
    int n; cin >> n;

    // Will store the distinct
    // numbers seen so far.
    set<int> seen;

    // Repeat n times.
    for (int i = 0; i < n; i++) {

        // Read the next number.
        int num; cin >> num;

        // Add it to our set.
        // Does nothing if it's
        // already in the set.
        seen.insert(num);
    }

    // Output the size of our set.
    // This is the number of distinct
    // numbers we've seen.
    cout << seen.size() << '\n';
}
```

This code inserts the given values into a set. A set is a data structure that ignores repeated values, and only stores distinct elements. So the number of distinct elements is equal to the final size of the set. However, this is just one of many approaches! Play around with this code, and try submitting your own solution to [CSES](https://cses.fi/problemset/task/1621/).

## Participate

Was that interesting? Then give our weekly online practice [contests](https://vjudge.net/group/uw-cp-club) a try! Come to our in-person meetings in Savery Hall to discuss solutions. Everyone is welcome to show up! Our [Discord]({{ data.discord_link }}) has instructions on how to participate as well as meeting time and location. We also encourage members to form teams and participate in our local winter [ICPC](/icpc/) contest!

## Learn

Want to become a competitive programmer but don't know where to start? We suggest reading the [USACO Guide](https://usaco.guide/general/), a comprehensive resource for beginners to learn competitive programming. It walks you through concepts including running code, input/output, and basic algorithms. Also see our list of [resources](/resources/).

And just for fun, here's a programming quote that changes daily:

<blockquote id="typing-animation">Quote</blockquote>
<script src="/assets/typing-animation.js" defer></script>