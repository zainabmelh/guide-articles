	I want to start this video off by stating something I’m sure some of you have already realized. Propositions adhere to the same laws as sets! That means, you don’t have to learn new laws! :D However, just to be clear I have included them in this video as well. Basically, the conjunction in logic is similar to the intersection in set theory. Likewise, the disjunction in logic is similar to the union in set theory. Note that F=“False” and T=“True”.

1) Idempotent Laws: p∨p≣p,   p∧p≣p
2) Identity Laws: p∨F≣p,   p∨T≣T,   p∧F≣F,   p∧T≣p
3) Complement Laws: p∨¬p≣T,   ¬T≣F,   p∧¬p≣T,   ¬F≣T
4) Involution Law: ¬¬p≣p
5) Associative Laws: (p∨q)∨r≣p∨(q∨r),   (p∧q)∧r≣p∧(q∧r)
6) Commutative Laws: p∨q≣q∨p,   p∧q≣q∧p
7) Distributive Laws: p∨(q∧r)≣(p∨q)∧(p∨r),   p∧(q∨r)≣(p∧q)∨(p∧r)
8) DeMorgan’s Laws: ¬(p∨q)≣¬p∧¬q,   ¬(p∧q)≣¬p∨¬q

If you want to practice you skills for logic, I highly recommend constructing truth tables for these laws!

	I will now be introducing conditional statements. If you think that terminology sounds familiar, it is probably because if-else statements are conditional statements. A conditional statement has the form, “If p, then q” and is denoted p⟹q. This is read as, “If p, then q.” or “p implies q” or “q is sufficient for p”. Meaning, if p is true, then q must be true as well. Essentially, you’re being guaranteed that every time p is true, q will also be true.
	The classic example is with a student and a teacher. Your teacher tells you that if you study she will promise to give you a good grade on your upcoming exam. That is, p=“I studied” and q=“I received a good grade on my exam”. Leading to the conditional statement of p⟹q = “If I study, then I will receive a good grade on my exam.” So lets turn our attention to the truth table.

Case1: p=T and q=T, which I will abbreviate as TT, make sense right? You were promised that if you studied, you will receive a good grade. Since you studied and received a good grade, the teacher told the truth, meaning the conditional statement was TRUE for case1.

Case2: TF, you studied, but your teacher did not give you a good grade! Therefore, you're teacher lied to you, meaning the conditional statement was FALSE for case2.

Case3 & Case4: FT && FF, since your teacher didn’t promise you anything, they didn’t lie to you. Since they didn’t lie to you, they told the truth. Therefore, the conditional was true for both case3 and case4. Remember, we were only promised that if we studied we would receive a good grade. The teacher doesn’t say that if you don’t study you will receive a bad grade. See the difference? We will elaborate on this concept in the next video.


	Another type of conditional is called the biconditional, which is defined as (p⟹q)∧(q⟹p). I suggest constructing the truth table for this. Currently, we don’t have any applications for this, but it will help us out in future videos.

	My next video will be on the topic of tautologies and contradictions.
