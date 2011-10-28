      __ _                       _      
     / _(_) __ _ _ __   ___   __| | ___ 
    | |_| |/ _` | '_ \ / _ \ / _` |/ _ \
    |  _| | (_| | | | | (_) | (_| |  __/
    |_| |_|\__, |_| |_|\___/ \__,_|\___|
           |___/ 

A quick and dirty node.js project to write a needless web service that brings figlet to the world.

This is a learning exercise for myself and not intended to be consumed seriously.

You need figlet installed and in your path, beyond that this is a pretty simple express app. It serves a page to gets on / that accesses the API with jquery ajax. The API responds to POSTs on / of JSON data in the format specified in figlet_servivce.js. Happy figging.
