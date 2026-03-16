# Page snapshot

```yaml
- generic [ref=e4]:
  - heading "Home" [level=1] [ref=e5]
  - generic [ref=e6]:
    - heading "Garden Creation" [level=2] [ref=e7]
    - generic [ref=e8]:
      - textbox "Plot Name" [ref=e9]
      - textbox "Plot Description" [ref=e10]
      - spinbutton [ref=e11]
      - spinbutton [ref=e12]
      - button "Add Plot" [ref=e13] [cursor=pointer]
    - button "My Plots" [ref=e15] [cursor=pointer]
    - heading "React Search" [level=1] [ref=e16]
    - generic [ref=e18]:
      - generic: Search
      - generic [ref=e19]:
        - textbox "Search" [ref=e20]
        - group:
          - generic: Search
  - button "Request Scientific Plant Names" [ref=e22] [cursor=pointer]
```