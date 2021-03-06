For all your regular expression needs, please peruse [RegExr](https://regexr.com/), an indispensable tool that I refer to almost every day multiple times.

That being said, I sometimes need to chain my regular expressions so in each operation of replace, the output
gets pasted back into input at RegExr. Of course, further down the chain, I realize I had forgotten something
in one of the early replace operations. This creates a lot of frustration since I now have to open multiple
tabs for each operation I want to run so I could have access to the history of the rules I applied.

I have built this tool so I can chain rules. Look at the example below. I want to get rid of the numbers at the end of each word and swap lazy and quick in the sentence. The solution I'm suggesting is one way of doing it. You can alter the order of the nodes and in some cases it will help you, in some other, you might have to follow a strict order.

[![regex-train.png](https://i.postimg.cc/SNZD2P00/regex-train.png)](https://postimg.cc/6yvdFY5z)
