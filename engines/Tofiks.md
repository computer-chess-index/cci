# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2164<sub>(+132) | 2419<sub>(+112) | 2473<sub>(+88) |  |
| 1.4.1 | 2026-04-11 | 2032<sub>(-39) | 2307<sub>(+28) | 2385<sub>(+14) |  |
| 1.4.0 | 2026-04-09 | 2071<sub>(+new) | 2279<sub>(+new) | 2371<sub>(+new) |  |
| 1.3.0 | 2023-10-22 |  |  |  |  |
| 1.2.0 | 2023-09-29 |  |  |  |  |
| 1.1.0 | 2023-08-17 |  |  |  |  |
| 1.0.0 | 2022-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:29:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2071, 2032, 2164]
  line "STC (8.0+0.08s)" [2071, 2032, 2164]
  line "LTC (60.0+0.60s)" [2279, 2307, 2419]
  line "VLTC (2m24s+1.12s)" [2371, 2385, 2473]
  line "VLTC (2m24s+1.12s)" [2371, 2385, 2473]
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
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2071, 2032, 2164]
  line "STC (8.0+0.08s)" [2071, 2032, 2164]
  line "LTC (60.0+0.60s)" [2279, 2307, 2419]
  line "VLTC (2m24s+1.12s)" [2371, 2385, 2473]
  line "VLTC (2m24s+1.12s)" [2371, 2385, 2473]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2473 | 27 | 432 | 50% | 2473 | 34% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2419 | 27 | 456 | 51% | 2412 | 32% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2164 | 27 | 484 | 46% | 2198 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2385 | 33 | 292 | 50% | 2381 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2307 | 34 | 296 | 50% | 2306 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2032 | 34 | 302 | 51% | 2020 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2371 | 40 | 216 | 47% | 2399 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2279 | 39 | 226 | 53% | 2255 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2071 | 43 | 184 | 50% | 2067 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |