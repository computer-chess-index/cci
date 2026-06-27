# Engine: Basilisk

Author: Miloslav Macůrek

Home: https://github.com/maelic13/basilisk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-06-20 | 2338<sub>(0) | 2628<sub>(+44) | 2762<sub>(+54) |  |
| 1.5.0 | 2026-06-10 | 2338<sub>(-4) | 2584<sub>(+15) | 2708<sub>(+35) |  |
| 1.4.9 | 2026-05-29 | 2342<sub>(+new) | 2569<sub>(+new) | 2673<sub>(+new) |  |
| 1.4.8 | 2026-05-28 |  |  |  |  |
| 1.4.7 | 2026-05-28 |  |  |  |  |
| 1.4.6 | 2026-05-28 |  |  |  |  |
| 1.4.5 | 2026-05-28 |  |  |  |  |
| 1.4.4 | 2026-05-28 |  |  |  |  |
| 1.4.3 | 2026-05-27 |  |  |  |  |
| 1.4.2 | 2026-05-26 |  |  |  |  |
| 1.4.1 | 2026-05-26 |  |  |  |  |
| 1.4.0 | 2026-05-25 |  |  |  |  |
| 1.3.0 | 2026-05-25 |  |  |  |  |
| 1.2.3 | 2026-05-24 |  |  |  |  |
| 1.2.2 | 2026-05-22 |  |  |  |  |
| 1.2.1 | 2026-05-22 |  |  |  |  |
| 1.2.0 | 2026-05-21 | 2037<sub>(+new) | 2376<sub>(+new) | 2446<sub>(+new) |  |
| 1.1.0 | 2026-05-21 |  |  |  |  |
| 1.0.0 | 2026-05-20 | 2029 | 2341 | 2453 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Basilisk+<version>&body=###%20Engine%20name%0ABasilisk%0A%0A###%20Version%0A1.6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-27 06:22:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0"]
  y-axis "Elo Rating" 2000 --> 2800
  line "STC (8.0+0.08s)" [2029, 2037, 2342, 2338, 2338]
  line "STC (8.0+0.08s)" [2029, 2037, 2342, 2338, 2338]
  line "LTC (60.0+0.60s)" [2341, 2376, 2569, 2584, 2628]
  line "VLTC (2m24s+1.12s)" [2453, 2446, 2673, 2708, 2762]
  line "VLTC (2m24s+1.12s)" [2453, 2446, 2673, 2708, 2762]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0"]
  y-axis "Elo Rating" 2000 --> 2800
  line "STC (8.0+0.08s)" [2029, 2037, 2342, 2338, 2338]
  line "STC (8.0+0.08s)" [2029, 2037, 2342, 2338, 2338]
  line "LTC (60.0+0.60s)" [2341, 2376, 2569, 2584, 2628]
  line "VLTC (2m24s+1.12s)" [2453, 2446, 2673, 2708, 2762]
  line "VLTC (2m24s+1.12s)" [2453, 2446, 2673, 2708, 2762]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2762 | 48 | 132 | 53% | 2739 | 37% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2628 | 54 | 112 | 48% | 2642 | 29% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2338 | 53 | 110 | 49% | 2346 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 34 | 284 | 52% | 2689 | 31% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2584 | 36 | 258 | 50% | 2581 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2338 | 36 | 278 | 51% | 2329 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2673 | 58 | 100 | 51% | 2665 | 26% |
| 1.4.9 | LTC <sub>(60.0+0.60s)</sub> | 2569 | 57 | 102 | 49% | 2583 | 25% |
| 1.4.9 | STC <sub>(8.0+0.08s)</sub> | 2342 | 64 | 86 | 53% | 2314 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2446 | 37 | 246 | 51% | 2438 | 27% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2376 | 37 | 244 | 51% | 2367 | 25% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2037 | 39 | 236 | 51% | 2026 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2453 | 48 | 154 | 49% | 2460 | 19% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2341 | 45 | 180 | 56% | 2259 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2029 | 50 | 152 | 57% | 1941 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |