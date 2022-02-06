---
id: usage
title: Using the Portfolio Map
---
import AddIssue from '../static/img/addIssue.png'
import IssueSummary from './demos/IssueSummary.js'

### Basics

You can add multiple portfolio maps for a Jira project. 
This way you can control multiple company wide portfolio maps from a single Jira project.

After opening the app, click "Add Portfolio Map" to create a new portfolio.

You will be prompted to give the portfolio map a name. Be aware, that at this time, portfolios can not be renamed.

 Additionally, you need to 
choose the column issue type (the activity row in a classic story map - we will refer to this issue type as "action field" in this article)  from the list
of available issue types in the current project. 
You can also select a Jira Agile board.
This board provides a backlog for the portfolio, where you can later drag and drop
issues from into the map. 

:::info
Ideally, if you have a portfolio Kanban board, choose it as your backlog, as all available releases will also be fetched from this board.
:::

You can import all issues of the chosen issue type either from the project - or, if you
selected an agile board, from the board itself.
 
#### Adding an issue

You can add issues three ways: Either by clicking "Create" or "Search" within a column
or by clicking the backlog symbol into the top right hand corner and dragging them from the backlog into the portfolio map.

<img src={AddIssue} />

By adding an issue into a column, a property will be set on the issue 
that references the current portfolio map as well as which issue it is assigned to.


### Working with action fields

You can add additional action fields to the portfolio map at any point. The issues can be marked
with custom colors. These colors do not correspond to the epic colors of Jira (the selection
 is too limited), so you can select any color you want here.

![Picking an issue color](/img/smfree/smetutorial4.png)

Once you have the second column set up, you can start moving issues between columns. Simply drag
and drop them from one column to the next.

![Issue moved between action fields](/img/smfree/smetutorial5.png)

### Inline Editing

You can adjust the issue summary or the epic title at any time by clicking the edit icon
or by double clicking on the card.

![Editing the summary](/img/smfree/smetutorial6.png)
