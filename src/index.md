---
title: UW Competitive Programming
heading: UW Competitive Programming Club
---

Hi! We're a group of students at the University of Washington passionate about competitive programming and problem solving.

Competitive programming is about racing to write programs that efficiently convert some input to an output. For example, this C++ program returns the sum of n integers: 


<pre class="code-view">
 <code id="htmlViewer" style="color:rgb(220, 220, 220); font-weight:400;background-color:rgb(30, 30, 30);background:rgb(30, 30, 30);display:block;padding: .5em;"><span style="color:rgb(155, 155, 155); font-weight:400;">#<span style="color:rgb(86, 156, 214); font-weight:400;">include</span> <span style="color:rgb(214, 157, 133); font-weight:400;">&lt;bits/stdc++.h&gt;</span></span>
<span style="color:rgb(86, 156, 214); font-weight:400;">using</span> <span style="color:rgb(86, 156, 214); font-weight:400;">namespace</span> std;

<span style="color:rgb(220, 220, 220); font-weight:400;"><span style="color:rgb(78, 201, 176); font-weight:400;">int</span> <span style="color:rgb(220, 220, 220); font-weight:400;">main</span><span style="color:rgb(220, 220, 220); font-weight:400;">()</span> </span>{
	ios::<span style="color:rgb(78, 201, 176); font-weight:400;">sync_with_stdio</span>(<span style="color:rgb(86, 156, 214); font-weight:400;">false</span>);
	cin.<span style="color:rgb(78, 201, 176); font-weight:400;">tie</span>(<span style="color:rgb(86, 156, 214); font-weight:400;">nullptr</span>);
	
	<span style="color:rgb(78, 201, 176); font-weight:400;">int</span> n; cin &gt;&gt; n;
	<span style="color:rgb(78, 201, 176); font-weight:400;">int64_t</span> sum = <span style="color:rgb(184, 215, 163); font-weight:400;">0</span>;
	<span style="color:rgb(86, 156, 214); font-weight:400;">for</span> (<span style="color:rgb(78, 201, 176); font-weight:400;">int</span> i = <span style="color:rgb(184, 215, 163); font-weight:400;">0</span>; i &lt; n; i++) {
		<span style="color:rgb(78, 201, 176); font-weight:400;">int64_t</span> num; cin &gt;&gt; num;
		sum += num;
	}
	cout &lt;&lt; sum &lt;&lt; <span style="color:rgb(214, 157, 133); font-weight:400;">&#x27;\n&#x27;</span>;
}</code></pre>

