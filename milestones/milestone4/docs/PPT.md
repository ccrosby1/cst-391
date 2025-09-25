---
marp: true
theme: uncover
class: invert
---

# Milestone 4

By: Cody Crosby
CST-391


---

## Challenges During Project 

 - Initial difficulty populating Angular forms with retrieved data due to mismatched API response format (array vs. object)

 - Boolean values from the backend were returned as integers, requiring manual normalization

 - Navigating back to the list view didn’t reset selected equipment, causing stale state

---

## Pending Bugs/Issues

 - When canceling a delete action, the app currently returns to the full equipment list. Ideally, it should return to the specific equipment’s detail view, but I couldn't get the routing logic to support it

 - The UI is plain and lacks visual polish. While it works, it needs enhancements in layout and color to feel more engaging

 - Users cannot currently search or filter equipment by category or keyword

---

## Lessons Learned

 - Always Inspect API Responses: Even small mismatches (like arrays vs. objects) can break data binding

 - Creating standalone Angular components made routing and reuse much easier

 - Console logs helped trace data flow and debug issues quickly

---

## Conclusion
 
 - This milestone focused on building the Angular front-end to consume the REST APIs created in the backend. I gained practical experience in handling data binding, component architecture, and routing in a real application

