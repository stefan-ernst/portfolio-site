---
id: usage
title: Using the Portfolio Map
---
import AddIssue from '../static/img/addIssue.png'


### Basics

You can add multiple portfolio maps for a Jira project. 
This way you can control multiple company wide portfolio maps from a single Jira project.

After opening the app, click "Add Portfolio Map" to create a new portfolio.

You will be prompted to give the portfolio map a name. Additionally, you need to 
choose the column issue type (the activity row in a classic story map - we will refer to
this issue type as "portfolio epic" in this article)  from the list
of available issue types in the current project. You can also select a Jira Agile board.
This board functions as a backlog for the portfolio, where you can later drag and drop
issues from into the map.

You can import all issues of the chosen issue type either from the project - or, if you
selected an agile board, from the board itself.
 
#### Adding an issue

You can add issues three ways: Either by clicking "Create" or "Search" within a column
or by clicking the backlog symbol and dragging them into the portfolio map.

<img src={AddIssue} />

By adding an issue into a column, a property will be set on the issue 
that references the current portfolio map as well as which issue it is assigned to.

For this reason, having the same issue in different portfolios is discouraged, as there would
be side-effects with assigning the same issue multiple times.


### Working with multiple epics

You can add additional portfolio epics to the portfolio map at any point. The epics can be marked
with custom colors. These colors do not correspond to the epic colors of Jira (the selection
 is too limited), so you can select any color you want here.

![Picking an epic color](/img/smfree/smetutorial4.png)

Once you have the second column set up, you can start moving issues between epics. Simply drag
and drop them onto the second column.

![Issue moved between epics](/img/smfree/smetutorial5.png)

### Inline Editing

You can adjust the issue summary or the epic title at any time by clicking the edit icon
or by double clicking on the card.

![Editing the summary](/img/smfree/smetutorial6.png)
