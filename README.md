Install Develpment Tools
========================

MAD is the best tool I found to work with cowboy, once it solves a lot of 
problems when you are in development mode, like re-loading the code after 
changes, generating releases, etc... As said in it's documentation, rebar is 
good for static compilation, but MAD is also good for dynamic. So install mad 
in your tools directory, I suggest you to create /usr/local/erlang and from 
there clone and make it. 

``` bash
$ mkdir /usr/local/erlang 
$ cd /usr/local/erlang/ 
$ git clone https://github.com/synrc/mad
$ cd mad 
$ make 
```

Now edit your .bashrc or .zshrc file (depending on the shell you use) adding 
the mad executable in your path.

``` bash
export PATH=$PATH:/usr/local/erlang/mad
```

Get dependencies 
----------------

``` bash
$ mad deps
```

Compile
-------

``` bash
$ mad compile
```

Order Apps
----------

As you may know you can create OTP releases with reltool (rebar generate) or 
systools (relx). mad currently creates releases with relx but is going to do 
it independently soon. Now it can only order applications.

``` bash
$ mad plan
```

Run in Development Mode
---------------------

* go to apps directory

``` bash
mad repl
```
I suggest you to use tmux and have this command line as a right window 
so now, you can go to src, edit and save using a good editor like vim, 
sublime, save and follow-up the dynamic compilation.

Create new Release
------------------

``` bash
mad rel
```


Directory Structure
===================


Directory 'deps' for the dependencies, and 'apps' for your group 
of applications. 

> Note that 'deps' is created automatically and 
> is ignored by .gitignore, so git will only track your code, not 
> dependencies. Notice that .gitignore is also on sub-directories 






Application Layers
==================


Database
--------



Server
------



Client
------


