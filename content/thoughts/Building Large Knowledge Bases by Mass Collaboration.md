
building knowledge bases by mass collaboration, with thousands of volunteers contributing simultaneously. While this approach promises large improvements in the speed and cost of knowledge base development, it can only succeed if the
problem of ensuring the quality, relevance and consistency of the knowledge is addressed, if contributors are properly motivated, and if the underlying algorithms
scale
Typical learning programs contain
only very weak assumptions about the world, and as a
result the rules they learn are relatively shallow – they
refer only to correlations between observable variables
The
open-source software movement, enabled by the Internet, has shown that it is possible to develop very high
quality software by accumulating contributions from thousands of volunteers [17]. 
Problems:
Quality: We thus need mechanisms for automatically gauging the quality of contributions, and for making
the best possible use of knowledge of widely variable quality.
Consistency: As the knowledge base grows in size,
maintaining consistency between knowledge entered by different contributors, or even by the same
contributor at different times, becomes increasingly difficult.
Relevance: In a distributed
setting, ensuring that the knowledge contributed is
relevant – and that volunteers’ effort is productive
– is an even more significant problem.
Scalability: Likewise, the computational learning and reasoning
processes carried out within the knowledge base
should scale at worst log-linearly in the number
of contributions. 
Motivation: , collective knowledge bases should incorporate a fair mechanism for
giving volunteers credit for their contributions.
## Architecture
3 streams of information
### Rules and facts from contributors
Rules and
facts are expressed in the Horn clause subset of
first-order logic.
Horn clauses also have the key feature of high modularity: a new rule can be input without knowing
what other rules are already in the knowledge base.
### Queries and evidence from users
a query is a predicate with open variables
queries can also have a “utility value” attached, reflecting how much the user is willing to
“pay” (in some real or virtual unit) for the answer.
Evidence refers to the results from the queries or information that would be relevant to the queries.
### Feedback on the system's replies, from users
Given the answer or answers to a query, the user
takes actions, observes their outcomes, and reports
the results to the knowledge base.







Rules and Facts are research papers
Queries and Evidence are queries to the knowledge base through AI interfaces
Answers get to users
Users get outcomes and report them back to the system
Base gets feedback.
