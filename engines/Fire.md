# Engine: Fire

Author: Norman Schmidt

Home: https://github.com/Firefather/fire

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3140<sub>(+3) | 3367<sub>(+4) | 3417<sub>(+1) |  |
| 9.3 | 2024-03-10 | 3137<sub>(+new) | 3363<sub>(+new) | 3416<sub>(+new) |  |
| 9.2 | 2023-11-12 |  |  |  |  |
| 9.1 | 2023-11-08 |  |  |  |  |
| 9.0 | 2023-06-05 |  |  |  |  |
| 05192023 | 2023-05-20 |  |  |  |  |
| 05172023 | 2023-05-17 |  |  |  |  |
| 10262022 | 2022-10-26 |  |  |  |  |
| 10072022 | 2022-10-07 |  |  |  |  |
| 09282022 | 2022-09-28 |  |  |  |  |
| 09202022 | 2022-09-20 |  |  |  |  |
| 09112022 | 2022-09-11 |  |  |  |  |
| 09022022 | 2022-09-02 |  |  |  |  |
| 08222022 | 2022-08-23 |  |  |  |  |
| 08132022 | 2022-08-14 |  |  |  |  |
| 08072022 | 2022-08-10 |  |  |  |  |
| 08032022 | 2022-08-04 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fire+<version>&body=###%20Engine%20name%0AFire%0A%0A###%20Version%0A10.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-13 06:27:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3137, 3140]
  line "STC (8.0+0.08s)" [3137, 3140]
  line "LTC (60.0+0.60s)" [3363, 3367]
  line "VLTC (2m24s+1.12s)" [3416, 3417]
  line "VLTC (2m24s+1.12s)" [3416, 3417]
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
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3137, 3140]
  line "STC (8.0+0.08s)" [3137, 3140]
  line "LTC (60.0+0.60s)" [3363, 3367]
  line "VLTC (2m24s+1.12s)" [3416, 3417]
  line "VLTC (2m24s+1.12s)" [3416, 3417]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 19 | 664 | 49% | 3422 | 76% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 20 | 652 | 50% | 3371 | 71% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3140 | 18 | 856 | 51% | 3131 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 13 | 1520 | 49% | 3417 | 75% |
| 9.3 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 13 | 1496 | 50% | 3362 | 73% |
| 9.3 | STC <sub>(8.0+0.08s)</sub> | 3137 | 14 | 1428 | 51% | 3114 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |