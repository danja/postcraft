https://www.facebook.com/share/1AvywM6i3N/

Monica Anderson 


How to write code in November 2024:
(Yes, this changes at least monthly)

1. Use VSCode
2. Use CLINE extension 
3. Use Anthropic Claude 3.5 released last week. Important.
4. You will run out of tokens because limits are too low
5. DO NOT DO what I did - use OpenRouter for priority access. This cost me an extra $400. Arguably still worth it.
6. INSTEAD send email to sales at Anthropic and ask to be upgraded to a higher tier. They put me in tier 4 (out of 5) without asking. Now your interactions cost $0.0024 instead of $0.4502
7. Write a spec for the product you want to build. Call it plan.txt
8. Write important instructions into the system prompt. See below.
9. Navigate to the source directory in shell/Terminal
10.Enter "code ." (that's a period) to start VSCode in the current dir. This may require some setup, perhaps an alias.
11. Enter CLINE (click the bot in the left margin) and say "read plan.txt" and then click the blue button until it wants to test stuff.
12. Do not let it run anything voluminous like a compile -- the output will eat your tokens. Run all tests yourself, cut and paste only the essential lines of error messages back to CLINE.
13. If using Java, use Spring Boot, VAADIN FLOW, and LangChain4J. This is my new development stack. No HTML, javascript, or css :-o :-o. It's called "Whole Stack Java Development" -- we do the whole stack in Java :-D, including the frontend. Youtube has dozens of videos about VAADIN.
14. Set up git from the start and tell CLINE to commit all files after any major change, and it should also update plan.txt.
15. Start a new session the moment your per-interaction cost goes up. My limit is $0.20. This clears the LLM history backlog which is where your tokens mostly go.

You will have a fully functioning web app prototype in an afternoon that conforms to your spec. Within limits. If not, do not be afraid to start over after you learn something. Your source tree is no longer a sunk cost because CLINE can redo it in minutes.

I may share some of my scripts in PMs or in comments below.
But you will quickly find out what works and what requires special
instructions.

Least favorite error: CLINE inserts "[ The rest of the file remains the same ]" into the VSCode editor  and if  you don't check for it when you click "save" then it will save the file with that text, clobbering most of the old stuff. You can tell it not to do this in the system prompt. It also will occasionally search the sources for files and if you have node.js library sources then listing those will eat tokens too. I gave it an alias to a "tree src/main/java" command of the java dirs.

Favorite hack: You end up clicking the blue "Save" button 100 times per hour. I took an spare mouse, removed the mouse ball, velcroed it to my desk and wrote "OK" on the left mouse button to avoid confusion because I velcroed it with buttons facing me.

Then I position my pointer over the Save button with the real mouse. When I need to click, I can click on the fixed mouse button without moving the mouse around. Make coffee. Click. Do laundry. Click, click. You can click without looking, most of the time,