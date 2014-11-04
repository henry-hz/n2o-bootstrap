

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



Start New Application
---------------------

* go to apps directory
* create a new folder my_app
* type 'rebar create-app appid=my_app'
* edit the rebar.conf file in the apps folder, and add you application on the
  'sub_dirs' key, e.g. {sub_dirs, [my_app]} 


