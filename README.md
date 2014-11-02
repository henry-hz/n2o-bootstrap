

Files otp.mk and orderapps.erl work together, edit your Makefile and 
rebar.config 

Directory Structure
-------------------

Directory 'deps' for the dependencies, and 'apps' for your group 
of applications. 

> Note that 'deps' is created automatically and 
> is ignored by .gitignore, so git will only track your code, not 
> dependencies. 



Get dependencies 

``` bash
$ ./mad get-deps
```
