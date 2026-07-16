# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-05-16 | 2209<sub>(-317) | 2466<sub>(-377) | 2593<sub>(-338) |  |
| 3.0.0 | 2025-08-28 | 2526<sub>(+new) | 2843<sub>(+new) | 2931<sub>(+new) |  |
| 2.0.0 | 2025-04-08 |  |  |  |  |
| 1.0.0 | 2025-01-28 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Potential+<version>&body=###%20Engine%20name%0APotential%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:27:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0"]
  y-axis "Elo Rating" 2200 --> 3000
  line "STC (8.0+0.08s)" [2526, 2209]
  line "STC (8.0+0.08s)" [2526, 2209]
  line "LTC (60.0+0.60s)" [2843, 2466]
  line "VLTC (2m24s+1.12s)" [2931, 2593]
  line "VLTC (2m24s+1.12s)" [2931, 2593]
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
  x-axis ["3.0.0", "1.1.0"]
  y-axis "Elo Rating" 2200 --> 3000
  line "STC (8.0+0.08s)" [2526, 2209]
  line "STC (8.0+0.08s)" [2526, 2209]
  line "LTC (60.0+0.60s)" [2843, 2466]
  line "VLTC (2m24s+1.12s)" [2931, 2593]
  line "VLTC (2m24s+1.12s)" [2931, 2593]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2593 | 29 | 398 | 49% | 2607 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2466 | 29 | 396 | 50% | 2466 | 33% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2209 | 32 | 332 | 50% | 2203 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2931 | 28 | 404 | 49% | 2940 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2843 | 29 | 380 | 49% | 2853 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2526 | 27 | 452 | 49% | 2530 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |