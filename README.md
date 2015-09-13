# FacebookChat2.0

### Forked from [Megbot](https://github.com/maruthven/megbot)

You can run this bot by running 
```bash
$ python test.py [username] [password] [messageID] 
```

Keep in mind that the messageID is the number of the conversation at the top of the message.

For example, this example shell could be run: 
```bash
$ python test.py my@email.com pa$$word 999888777666555
```

##Dependencies

### nltk.corpus
```bash
$ sudo pip install -U nltk
```

### Selenium Python
```bash
$ pip install selenium
```

### Splinter
```bash
$ pip install splinter
```

### stemming.porter2
```bash
$ pip install stemming
```

### Phantom.js
```bash
$ npm -g install phantomjs
```

After all these dependencies are installed, go to the chat with the messageID provided and 
tagging @HelloWorld would tag the first person with the first instance of the name 
"HelloWorld."  It will then message HelloWorld that he has been tagged.

