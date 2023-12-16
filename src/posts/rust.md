---
title: Rust - UW Competitive Programming
heading: Competing with Rust
author: Marcin Anforowicz
---

[Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) is a programming language that is gaining in popularity.
The easiest way to learn it is by reading the official [Rust book](https://doc.rust-lang.org/book/).
Competing with Rust is possible, but we generally recommend C++.

Rust competitive pros ✅:
- No undefined behavior.
- Short, helpful error messages.
- Quicker execution and lower memory usage.

Rust competitive cons ❌:
- Not widely supported by programming competitions.
- Error handling boilerplate (like `unwrap`).
- Lots of input/output boilerplate.

Rust's standard input/output is great for real applications, but too tedious for competitive programming.
That's why we wrote some code to simplify reading and writing.
Paste this boilerplate at the start of your Rust programs:

```rust
// Rust
#![allow(dead_code)]
#![allow(unused_imports)]
use std::io::{stdin, stdout, BufRead, BufWriter, Write};
use std::str::{FromStr, SplitAsciiWhitespace};

struct Read<T: BufRead> {
    buf: T,
    line: String,
}

impl<T: BufRead> Read<T> {
    fn new(buf: T) -> Self {
        Self {
            buf,
            line: String::new(),
        }
    }

    fn line(&mut self) -> SplitAsciiWhitespace {
        self.line.clear();
        self.buf.read_line(&mut self.line).expect("Failed read");
        self.line.split_ascii_whitespace()
    }

    fn next_arr<U: FromStr>(&mut self) -> Vec<U> {
        self.line()
            .map(|s| s.parse().ok().expect("Failed parse"))
            .collect()
    }
}

macro_rules! scan {
    ( $read:expr, $( $type:ty ),* ) => { {
        let mut iter = $read.line();
        ($(
            iter.next()
                .expect("Not enough tokens on line")
                .parse::<$type>()
                .expect("Couldn't parse")
        ),*)
    } }
}
```

This allows you to read and write like so:

```rust
// Rust
fn main() {
    // Open input and output
    let mut read = Read::new(stdin().lock());
    let mut out = BufWriter::new(stdout().lock());

    // Read different types from one line
    let (a, b, c, d) = scan!(read, bool, f32, u8, String);

    // Read a vector from one line
    let arr: Vec<i64> = read.next_arr();

    // Write output
    writeln!(out, "{} {} {} {}", a, b, c, d).unwrap();
    writeln!(out, "{:?}", arr).unwrap();
}
```

Rust's [standard library](https://doc.rust-lang.org/std/collections/) has common data structures including hash map, btree map, and deque.
Good luck competing in Rust! 🦀