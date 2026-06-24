# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2539<sub>(+148) | 2849<sub>(+149) | 2916<sub>(+148) |  |
| 1.1 | 2026-04-18 | 2391<sub>(+82) | 2700<sub>(+177) | 2768<sub>(+129) |  |
| 1.0 | 2025-12-27 | 2309 | 2523 | 2639 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+FoxChess+<version>&body=###%20Engine%20name%0AFoxChess%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-24 06:24:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "STC (8.0+0.08s)" [2309, 2391, 2539]
  line "STC (8.0+0.08s)" [2309, 2391, 2539]
  line "LTC (60.0+0.60s)" [2523, 2700, 2849]
  line "VLTC (2m24s+1.12s)" [2639, 2768, 2916]
  line "VLTC (2m24s+1.12s)" [2639, 2768, 2916]
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
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "STC (8.0+0.08s)" [2309, 2391, 2539]
  line "STC (8.0+0.08s)" [2309, 2391, 2539]
  line "LTC (60.0+0.60s)" [2523, 2700, 2849]
  line "VLTC (2m24s+1.12s)" [2639, 2768, 2916]
  line "VLTC (2m24s+1.12s)" [2639, 2768, 2916]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 55 | 96 | 53% | 2894 | 45% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2849 | 52 | 110 | 55% | 2809 | 43% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2539 | 55 | 108 | 53% | 2512 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2768 | 28 | 392 | 49% | 2773 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2700 | 28 | 418 | 50% | 2695 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2391 | 29 | 408 | 50% | 2387 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2639 | 28 | 396 | 49% | 2645 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2523 | 31 | 328 | 52% | 2506 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2309 | 27 | 480 | 50% | 2306 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |