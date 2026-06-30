# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2665<sub>(+64) | 2977<sub>(+43) | 3012<sub>(-4) |  |
| 0.35 | 2026-05-13 | 2601<sub>(+110) | 2934<sub>(+69) | 3016<sub>(+101) |  |
| 0.30 | 2026-05-01 | 2491<sub>(+16) | 2865<sub>(+120) | 2915<sub>(+91) |  |
| 0.25.1 | 2026-04-12 | 2475<sub>(+90) | 2745<sub>(+96) | 2824<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2385<sub>(+515) | 2649<sub>(+594) | 2708<sub>(+563) |  |
| 0.08 | 2026-02-05 | 1870 | 2055 | 2145 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.40" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-30 22:15:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1870, 2385, 2475, 2491, 2601, 2665]
  line "STC (8.0+0.08s)" [1870, 2385, 2475, 2491, 2601, 2665]
  line "LTC (60.0+0.60s)" [2055, 2649, 2745, 2865, 2934, 2977]
  line "VLTC (2m24s+1.12s)" [2145, 2708, 2824, 2915, 3016, 3012]
  line "VLTC (2m24s+1.12s)" [2145, 2708, 2824, 2915, 3016, 3012]
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
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1870, 2385, 2475, 2491, 2601, 2665]
  line "STC (8.0+0.08s)" [1870, 2385, 2475, 2491, 2601, 2665]
  line "LTC (60.0+0.60s)" [2055, 2649, 2745, 2865, 2934, 2977]
  line "VLTC (2m24s+1.12s)" [2145, 2708, 2824, 2915, 3016, 3012]
  line "VLTC (2m24s+1.12s)" [2145, 2708, 2824, 2915, 3016, 3012]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 34 | 260 | 49% | 3021 | 46% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2977 | 33 | 278 | 50% | 2975 | 42% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2665 | 32 | 320 | 49% | 2673 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3016 | 28 | 388 | 51% | 3006 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 30 | 324 | 49% | 2944 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2601 | 31 | 340 | 50% | 2603 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2915 | 32 | 304 | 51% | 2908 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2865 | 30 | 336 | 49% | 2874 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2491 | 36 | 280 | 50% | 2488 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2824 | 31 | 328 | 51% | 2819 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2745 | 32 | 312 | 50% | 2746 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2475 | 31 | 356 | 51% | 2465 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 36 | 236 | 55% | 2658 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 36 | 228 | 57% | 2585 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2385 | 37 | 236 | 55% | 2340 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2145 | 28 | 392 | 46% | 2194 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2055 | 29 | 384 | 48% | 2082 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1870 | 31 | 356 | 48% | 1894 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |