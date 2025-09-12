# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    
    Answer:
    1. Non-comma delimiters
    2. Some CSV files have headers and some dont
    3. Empty rows/columns
    4. A row has less entries than the number of headers


- #### Step 2: Use an LLM to help expand your perspective.
    
    Answer: The LLM suggested all of what I suggesed, but also gave more possible enhancements such as handling different new-line key
    strokes, handling encoding issues, and handling empty cells specifically with different characters. On top of this, when prompted, the LLM provided some extra edge cases such as when there is a "trailing delimiter" and what that means or when quotes are opened but not closed. 

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    Answer: 
    
    Edge-Case/Enhancement List:
    1. Non-commma delimiters (Functionality) (Me/LLM)
    2. Type-casting (Extensibility) (Me/LLM)
    3. New-line key strokes (Functionality) (LLM)
    4. Trailing delimiter case (Functionality) (LLM)

    My initial ideas were mostly centered around general formatting of a csv file, but when I asked the LLM, it went into some more system-sided edge cases and enhancements. This is shown by the LLM's interest in looking into different new-line key strokes across systems and different ways of encoding. Once I reprompted it a couple times to look into other edge-cases, it came back with the "trailing delimiter" idea and also the enhancement of figuring out what to do when there are opened but not closed quotes. 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
