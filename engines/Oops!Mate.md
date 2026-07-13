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
| 2.0 | 2026-01-30 | 1274<sub>(+new) | 1454<sub>(+new) | 1465<sub>(+new) |  |
| 1.0 | 2026-01-30 |  |  |  |  |
| 0.0.4 | 2025-11-23 | 1127<sub>(+new) | 1354<sub>(+new) | 1404<sub>(+new) |  |
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

Generated: 2026-07-13 06:38:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1500
  line "STC (8.0+0.08s)" [1127, 1274]
  line "STC (8.0+0.08s)" [1127, 1274]
  line "LTC (60.0+0.60s)" [1354, 1454]
  line "VLTC (2m24s+1.12s)" [1404, 1465]
  line "VLTC (2m24s+1.12s)" [1404, 1465]
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
  line "STC (8.0+0.08s)" [1127, 1274]
  line "STC (8.0+0.08s)" [1127, 1274]
  line "LTC (60.0+0.60s)" [1354, 1454]
  line "VLTC (2m24s+1.12s)" [1404, 1465]
  line "VLTC (2m24s+1.12s)" [1404, 1465]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1465 | 29 | 406 | 52% | 1436 | 30% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1454 | 28 | 462 | 51% | 1430 | 27% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1274 | 28 | 498 | 57% | 1154 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1404 | 43 | 190 | 42% | 1547 | 34% |
| 0.0.4 | LTC <sub>(60.0+0.60s)</sub> | 1354 | 41 | 200 | 45% | 1442 | 32% |
| 0.0.4 | STC <sub>(8.0+0.08s)</sub> | 1127 | 43 | 198 | 43% | 1227 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |