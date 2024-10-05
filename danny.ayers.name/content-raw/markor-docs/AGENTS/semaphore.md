I have a text processing application that operates as a pipeline of independent services. The first service reads in a list of filenames and passes each along to the next service, terminating with a flag to say the list has been read. The following service reads each file line-by-line and sends the text of that line onto the next service, followed by the flag. This does some processing on each line and passes the result to a service that merges the lines back into a single string, which is saved when the flag arrives. 
My problem is that the services are implemented using async in Javascript and the flag appears before the work has been done, and it saves nothing. Any suggestions?


danny.ayers.name/articles/oriana_2024-06-02.md
