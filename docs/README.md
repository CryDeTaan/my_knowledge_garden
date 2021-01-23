# Introduction

It seems my memory is at a rudimentary stage of evolution and trying to remember many things and for long periods of time is futile. 
I am starting this wiki and calling it my knowledge garden. I will make notes as I learn or read new topics which I can reference in future, albeit slower than my 🧠 , its definitely more reliable. 

::: tip INTENTION
I intend to digest something every other day which I will then try to add to my knowledge garden :crossed_fingers:
:::

## Writing

I want to make it easy to add to my knowledge garden, so in order to add additional topic(listed in the side bar), it is as simple as adding a new directory in the **mkg** directory, this depicts a topic, and adding a markdown(`.md`) file with the topic's content to the topic directory will automatically generate this structure. For example, a **history** directory with a **wwi.md** file. Reference the VuePress [Markdown Extensions](https://vuepress.vuejs.org/guide/markdown.html) for more information, and remember to use lots of these :tada: :art: :100: 😜

**NOTE**: Take a look at technicals for a single config requirement.  

### Topics
Each markdown(`.md`) file will add a top level heading in the side bar which represents a topic. I may, at some, point add an extra level in each topic, but for now I'll see how this works.

### Structure
I'll play around with the structure of these files/topics to organise information. I think this may help with:
1. Make it easier digest complex topic, I hope, and
2. help with consistency.

This is the structure I have in mind at the moment:
- Title - Title of the topic and will be listed in the side bar
- Summary  - My interpretation on the topic in the form of a summary
- Topic matters - Various matters or areas related to the main topic.
- Notes - Additional notes on the topic
- References - Links to references 

## Technicals - for those interested

Using said structure in the **Writing** section above, I write content of the topic in [my knowledge garden repo](https://github.com/CryDeTaan/my_knowledge_garden). I have a [minimally configure](https://github.com/CryDeTaan/my_knowledge_garden/blob/master/docs/.vuepress/config.js) VuePress site. For additional topic directories I add to the **mkg** directory I add a small piece of config, use the [History configuration](https://github.com/CryDeTaan/my_knowledge_garden/blob/master/docs/.vuepress/config.js#L33-L37) as example.

Once I add content I'll push it to the GitHub repo and let netlify take care of the rest.