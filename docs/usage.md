---
id: usage
title: Using the Portfolio Map
---

import Setup1 from '/static/img/setup1.png'

### Basics

A portfolio map consists of 3 layers, the top level elements, the action fields, and the initiatives (or other issue types). 

In this document, we will refer to the layers in the following way.

![Story Map Visualization](/img/docs/Vis2.svg)

The top level element layer is optional; see [working with top-level elements](/docs/top-level-elements) for details.

You can add multiple portfolio maps for a Jira project. 
This way you can control multiple company-wide portfolio maps from a single Jira project.

Go to your project and select "Portfolio Maps" from the left-hand menu. You will see an empty overview screen.

You can create a new portfolio map by clicking the button in the top right-hand corner.

You can select between a dynamic and a static map. Read more about the [differences between these two map types here](/docs/map-types).
In most cases, we now recommend going with dynamic maps.

After choosing the dynamic map type, you can select your Jira agile board, and you are good to go. If you choose a static map, the welcome assistant will open - where you can specify a name for the portfolio map.

#### Static Maps

You can then define which issue you want to use for the action fields of the map. If you leave this field empty, the map will either (a) pick the standard epic issue type or (b) ask again when opening the map if the standard epic type is not available in your project.
Lastly, you can select an agile board to use as a backlog. This step is **optional**. You can either pick a board later or add the issues manually to the story map if you do not want to use Jira Software features or only have a Jira Core license.

#### Importing Issues

The welcome assistant for static maps automatically lets you import issues with the selected issue type from the current project or - if you have chosen one - from the agile board.
For example, the app will import existing epics and all issues within those epics into the portfolio map. 

### Organizing issues

Using drag and drop, action fields can be rearranged from left to right or from right to left. You can reorder them horizontally without changing the connected issues.
Items in the connected issues layer can also be reordered or associated with another action field via drag and drop anywhere on the map.

Dragging issues between the different layers is not supported - you can not add an issue from the connected layer to the action field layer - please use distinct issue types for clarity.

You can add colors to each action field to visually separate them. If you want to, you can also go to Settings -> Display and enable all issues in the column to inherit this color, helping to separate them visually.

### Assigning issues to releases

If you want to plan iterations or releases, you can select the "Swimlanes" dropdown in the top left-hand corner.

When switching the portfolio map to either of these modes, you will see existing releases from the underlying agile board.

When dragging an issue from either the unassigned swimlane or anotherrelease swimlane, the app will associate the issue in the background with this release.
The change happens instantly in the UI, so you can quickly rearrange many issues at once.

### Custom swimlanes

Sometimes, managing portfolio maps releases is not enough. Custom swimlanes help you plan more long-term or deal with "fuzziness" - for example if you don't exactly know when a change can occur.

Custom swimlanes work with free form text, so you call them "Iteration 1" or "Iteration 2".
Or you could use "Near term" or "Medium-term" and create a more rough outline of your portfolio roadmap.

### Custom field swimlanes

For organizations that organize their Jira-wide releases in custom fields - you can select the swimlanes to display values of single-select custom fields via the settings. Go to Settings -> Swimlanes and add the desired custom field. 
You can then assign issues to these values via the respective swimlane view.

### Filters / Quick Filters

If you have an agile board associated with the portfolio map, you can find all quick filters from this board when clicking the filter symbol next to the swimlane drop down in the top right-hand corner. You can activate these filters by clicking them.
You can also add custom filters by using the filter manager, which you can open when clicking the "Manage Filters" button.
Filtering will limit the issues that will be visible but will not affect the action field row. 