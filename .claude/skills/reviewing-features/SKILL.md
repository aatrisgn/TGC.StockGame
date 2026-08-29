
---
name: Reviewing features & requests
description: This skill explains how an agent should approach reviewing and making a plan for features inside .claude/features
---

# Reviewing features & requests

When being tasked with implementing a feature, it should always be done initially in plan mode, so the implementation plan can be confirmed by a developer before getting started.

During review an agent should always check for inconsistencies with other features. If a new feature is going against existing features, it should explicitly be stated in the feature.

During review an agent should check for any inconsistencies in the specification for a feature. If any, consult the user.

During review an agent should clarify any outstandings or uncertain points. Never assume anything. It needs to be written down. The only exception to this rule is if it is stated in another skill.

When a plan is accepted by a developer, the agent should implement the feature according to the plan. If any changes are needed, it should be discussed with the user and/or developer before implementing.

When implementation of a feature is done, a "feature" .md file inside .claude/features should be created with the following structure:

```
---
name: <feature-name>
description: <feature-description>
---

# Overview
A short description of the feature and what it does. Date for code changes applied should be stated.

A summary of the chat with the developer and/or user about the feature. This should include any clarifications that were made during the implementation of the feature.

## Clarifications
Any clarifications that were made during the implementation of the feature. This should be a bullet point list of the clarifications that were made. If no clarifications were made, this section should be omitted.

## Testing
This section should describe how the feature was tested and what the results were. If no testing was done, this section should be omitted.

## Implementation plan
What the agent implemented and how it was implemented. This should be a detailed description of the implementation, including any changes that were made to the original plan.
```