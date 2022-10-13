Idea:

The uppercase letters from 'A' to 'Z' have ASCCII codes between 65 and 90. We can iterate through our input string (s) and as we build up our answer string (ans), if the value (n) of any character lies in that range, we can replace it with the character of value n + 32, which corresponds to the lowercase version of the uppercase letter.

Time Complexity: O(N) where N is the length of s
Space Complexity: O(1) excluding the space of the output
