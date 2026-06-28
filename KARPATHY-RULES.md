# Karpathy Coding Rules — MUR Solutions Team

Behavioral guidelines to reduce common LLM coding mistakes when working with Claude, Cursor, or any AI coding assistant.  
Based on [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876).

> **Note:** These guidelines bias toward caution over speed. For trivial tasks (typos, obvious one-liners), use judgment.

---

## The 4 Rules

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing anything:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

**Problem it solves:** LLMs pick an interpretation and run with it without checking. You end up redoing everything.

---

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you wrote 200 lines and it could be 50, rewrite it.

**The test:** Would a senior engineer say this is overcomplicated? If yes → simplify.

**Problem it solves:** LLMs tend to over-engineer — bloated abstractions, 1000 lines when 100 would do.

---

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code → mention it, don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless explicitly asked.

**The test:** Every changed line should trace directly to the user's request.

**Problem it solves:** LLMs sometimes change or remove code they don't fully understand as a side effect, even when it's orthogonal to the task.

---

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform imperative tasks into verifiable goals:

| Instead of... | Transform to... |
|---|---|
| "Add validation" | "Write tests for invalid inputs, then make them pass" |
| "Fix the bug" | "Write a test that reproduces it, then make it pass" |
| "Refactor X" | "Ensure tests pass before and after" |

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let the LLM loop independently. Weak criteria ("make it work") require constant clarification.

**Key insight from Karpathy:**
> "LLMs are exceptionally good at looping until they meet specific goals. Don't tell it what to do — give it success criteria and watch it go."

---

## How to Implement

### Option A — Claude Code Plugin (recommended, applies across all projects)

Inside Claude Code, run:
```
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills
```

### Option B — CLAUDE.md per project

In the project root, download the file:
```bash
curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md
```

If the project already has a `CLAUDE.md`, append instead:
```bash
echo "" >> CLAUDE.md
curl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md
```

### Option C — Cursor

Copy `.cursor/rules/karpathy-guidelines.mdc` from the repo into your project.  
It applies automatically when you open the folder in Cursor. Verify under Settings → Rules.

File source:
```
https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/.cursor/rules/karpathy-guidelines.mdc
```

---

## Signs It's Working

- **Fewer unnecessary changes in diffs** — Only requested changes appear.
- **Fewer rewrites due to overcomplication** — Code is simple the first time.
- **Clarifying questions come before implementation** — Not after mistakes.
- **Clean, minimal PRs** — No drive-by refactoring or unrequested "improvements".

---

## Quick Reference (paste into prompts)

```
Before implementing: state assumptions, surface ambiguous interpretations, push back if a simpler approach exists.
Code: only what was asked — no speculative features, no unnecessary abstractions.
Edits: touch only relevant code, don't refactor what isn't broken, clean up only your own orphans.
Goals: define a verifiable success criterion before starting. Tests first when applicable.
```

---

**Original repo:** https://github.com/forrestchang/andrej-karpathy-skills  
**Karpathy's original tweet:** https://x.com/karpathy/status/2015883857489522876
