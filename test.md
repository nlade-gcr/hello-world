# ✅ Interactive Features in GitHub Markdown

## 1. Task List with Checkboxes

Use these to track progress in issues, PRs, or READMEs:

- [x] Write initial draft
- [ ] Get peer review
- [ ] Merge into main branch
- [ ] Deploy to production

---

## 2. Collapsible Sections using `<details>`

Click the dropdown below to expand hidden content.

<details>
<summary>🔽 Click to reveal additional info</summary>

### Hidden Notes

This section is useful for:
- FAQs
- Debug logs
- Long outputs
- Optional technical background

</details>

---

## 3. Jupyter Notebook Preview (`.ipynb`)

GitHub **renders notebooks natively** (if committed to the repo). For example:

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("Sine Wave")
plt.grid(True)
plt.show()
