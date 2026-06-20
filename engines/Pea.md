# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 | 2681<sub>(+228) | 3043<sub>(+236) | 3054<sub>(+138) |  |
| 8.0 | 2026-05-02 | 2453<sub>(+119) | 2807<sub>(+129) | 2916<sub>(+116) |  |
| 7.0 | 2026-04-25 | 2334<sub>(+34) | 2678<sub>(+64) | 2800<sub>(+41) |  |
| 6.0 | 2026-04-20 | 2300<sub>(+318) | 2614<sub>(+218) | 2759<sub>(+214) |  |
| 5.0 | 2026-04-15 | 1982<sub>(+47) | 2396<sub>(+173) | 2545<sub>(+161) |  |
| 4.0 | 2026-04-11 | 1935<sub>(+220) | 2223<sub>(+166) | 2384<sub>(+178) |  |
| 3.0 | 2026-04-09 | 1715<sub>(+592) | 2057<sub>(+719) | 2206<sub>(+644) |  |
| 2.0 | 2026-04-08 | 1123<sub>(+391) | 1338<sub>(+532) | 1562<sub>(+655) |  |
| 1.0 | 2026-04-06 | 732 | 806 | 907 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-20 06:27:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [732, 1123, 1715, 1935, 1982, 2300, 2334, 2453, 2681]
  line "STC (8.0+0.08s)" [732, 1123, 1715, 1935, 1982, 2300, 2334, 2453, 2681]
  line "LTC (60.0+0.60s)" [806, 1338, 2057, 2223, 2396, 2614, 2678, 2807, 3043]
  line "VLTC (2m24s+1.12s)" [907, 1562, 2206, 2384, 2545, 2759, 2800, 2916, 3054]
  line "VLTC (2m24s+1.12s)" [907, 1562, 2206, 2384, 2545, 2759, 2800, 2916, 3054]
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
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [732, 1123, 1715, 1935, 1982, 2300, 2334, 2453, 2681]
  line "STC (8.0+0.08s)" [732, 1123, 1715, 1935, 1982, 2300, 2334, 2453, 2681]
  line "LTC (60.0+0.60s)" [806, 1338, 2057, 2223, 2396, 2614, 2678, 2807, 3043]
  line "VLTC (2m24s+1.12s)" [907, 1562, 2206, 2384, 2545, 2759, 2800, 2916, 3054]
  line "VLTC (2m24s+1.12s)" [907, 1562, 2206, 2384, 2545, 2759, 2800, 2916, 3054]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3054 | 33 | 260 | 52% | 3039 | 49% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3043 | 35 | 240 | 51% | 3035 | 48% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2681 | 34 | 292 | 54% | 2643 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 30 | 358 | 49% | 2924 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 32 | 302 | 50% | 2805 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2453 | 31 | 356 | 52% | 2423 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2800 | 34 | 270 | 52% | 2784 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 35 | 266 | 50% | 2681 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2334 | 33 | 320 | 48% | 2358 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2759 | 36 | 248 | 52% | 2743 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2614 | 36 | 274 | 51% | 2603 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2300 | 32 | 344 | 54% | 2263 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2545 | 33 | 324 | 49% | 2557 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2396 | 36 | 268 | 50% | 2394 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1982 | 36 | 276 | 50% | 1982 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2384 | 34 | 310 | 54% | 2345 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2223 | 36 | 272 | 49% | 2236 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1935 | 39 | 248 | 52% | 1917 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 40 | 232 | 51% | 2202 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2057 | 39 | 246 | 48% | 2079 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1715 | 43 | 208 | 47% | 1746 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1562 | 34 | 316 | 48% | 1592 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1338 | 39 | 258 | 46% | 1392 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1123 | 35 | 300 | 51% | 1096 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 907 | 79 | 110 | 38% | 1069 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 806 | 84 | 104 | 37% | 1025 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 732 | 90 | 92 | 38% | 937 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |