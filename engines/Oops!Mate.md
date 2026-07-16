# Engine: Oops!Mate

Author: Swoyam Pokharel

Home: https://github.com/PS-Wizard/OopsMate

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-12 |  |  |  |  |
| 16.0 | 2026-02-06 |  |  |  |  |
| 15.0 | 2026-02-06 |  |  |  | eval pending* |
| 14.0 | 2026-02-06 |  |  |  |  |
| 13.0 | 2026-02-05 |  |  |  |  |
| 12.0 | 2026-02-05 |  |  |  |  |
| 11.0 | 2026-02-04 |  |  |  |  |
| 10.0 | 2026-02-03 |  |  |  |  |
| 9.0 | 2026-02-03 |  |  |  |  |
| 8.0 | 2026-02-02 |  |  |  |  |
| 7.0 | 2026-02-02 |  |  |  |  |
| 6.0 | 2026-02-02 |  |  |  |  |
| 5.0 | 2026-01-31 |  |  |  |  |
| 4.0 | 2026-01-31 |  |  |  |  |
| 3.0 | 2026-01-31 |  |  |  |  |
| 2.0 | 2026-01-30 | 1273<sub>(+new) | 1451<sub>(+new) | 1462<sub>(+new) |  |
| 1.0 | 2026-01-30 |  |  |  |  |
| 0.0.4 | 2025-11-23 | 1126<sub>(+new) | 1351<sub>(+new) | 1401<sub>(+new) |  |
| 0.0.3 | 2025-11-13 |  |  |  |  |
| 0.0.2 | 2025-11-04 |  |  |  |  |
| 0.0.1 | 2025-11-04 |  |  |  |  |
| 0.0.0 | 2025-11-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Oops!Mate+<version>&body=###%20Engine%20name%0AOops!Mate%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:26:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1500
  line "STC (8.0+0.08s)" [1126, 1273]
  line "STC (8.0+0.08s)" [1126, 1273]
  line "LTC (60.0+0.60s)" [1351, 1451]
  line "VLTC (2m24s+1.12s)" [1401, 1462]
  line "VLTC (2m24s+1.12s)" [1401, 1462]
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
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1500
  line "STC (8.0+0.08s)" [1126, 1273]
  line "STC (8.0+0.08s)" [1126, 1273]
  line "LTC (60.0+0.60s)" [1351, 1451]
  line "VLTC (2m24s+1.12s)" [1401, 1462]
  line "VLTC (2m24s+1.12s)" [1401, 1462]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1462 | 29 | 408 | 52% | 1438 | 30% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1451 | 28 | 462 | 51% | 1427 | 27% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1273 | 28 | 498 | 57% | 1152 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1401 | 43 | 190 | 42% | 1544 | 34% |
| 0.0.4 | LTC <sub>(60.0+0.60s)</sub> | 1351 | 41 | 200 | 45% | 1439 | 32% |
| 0.0.4 | STC <sub>(8.0+0.08s)</sub> | 1126 | 43 | 198 | 43% | 1224 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |