# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 | 2691<sub>(+238) | 3036<sub>(+227) | 3060<sub>(+140) |  |
| 8.0 | 2026-05-02 | 2453<sub>(+117) | 2809<sub>(+128) | 2920<sub>(+117) |  |
| 7.0 | 2026-04-25 | 2336<sub>(+36) | 2681<sub>(+66) | 2803<sub>(+41) |  |
| 6.0 | 2026-04-20 | 2300<sub>(+320) | 2615<sub>(+219) | 2762<sub>(+216) |  |
| 5.0 | 2026-04-15 | 1980<sub>(+45) | 2396<sub>(+171) | 2546<sub>(+162) |  |
| 4.0 | 2026-04-11 | 1935<sub>(+222) | 2225<sub>(+168) | 2384<sub>(+177) |  |
| 3.0 | 2026-04-09 | 1713<sub>(+590) | 2057<sub>(+720) | 2207<sub>(+646) |  |
| 2.0 | 2026-04-08 | 1123<sub>(+393) | 1337<sub>(+531) | 1561<sub>(+655) |  |
| 1.0 | 2026-04-06 | 730 | 806 | 906 |  |
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

Generated: 2026-07-07 06:27:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [730, 1123, 1713, 1935, 1980, 2300, 2336, 2453, 2691]
  line "STC (8.0+0.08s)" [730, 1123, 1713, 1935, 1980, 2300, 2336, 2453, 2691]
  line "LTC (60.0+0.60s)" [806, 1337, 2057, 2225, 2396, 2615, 2681, 2809, 3036]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2207, 2384, 2546, 2762, 2803, 2920, 3060]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2207, 2384, 2546, 2762, 2803, 2920, 3060]
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
  line "STC (8.0+0.08s)" [730, 1123, 1713, 1935, 1980, 2300, 2336, 2453, 2691]
  line "STC (8.0+0.08s)" [730, 1123, 1713, 1935, 1980, 2300, 2336, 2453, 2691]
  line "LTC (60.0+0.60s)" [806, 1337, 2057, 2225, 2396, 2615, 2681, 2809, 3036]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2207, 2384, 2546, 2762, 2803, 2920, 3060]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2207, 2384, 2546, 2762, 2803, 2920, 3060]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3060 | 31 | 304 | 51% | 3048 | 51% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3036 | 33 | 260 | 49% | 3040 | 48% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2691 | 32 | 328 | 54% | 2657 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2920 | 30 | 358 | 49% | 2928 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2809 | 32 | 302 | 50% | 2808 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2453 | 31 | 356 | 52% | 2425 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2803 | 34 | 270 | 52% | 2786 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 35 | 266 | 50% | 2684 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2336 | 33 | 320 | 48% | 2360 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2762 | 36 | 248 | 52% | 2746 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2615 | 36 | 274 | 51% | 2604 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2300 | 32 | 344 | 54% | 2263 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2546 | 33 | 324 | 49% | 2558 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2396 | 36 | 268 | 50% | 2395 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1980 | 36 | 276 | 50% | 1980 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2384 | 34 | 310 | 54% | 2346 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2225 | 36 | 272 | 49% | 2236 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1935 | 39 | 248 | 52% | 1917 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 40 | 232 | 51% | 2202 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2057 | 39 | 246 | 48% | 2078 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1713 | 43 | 208 | 47% | 1746 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1561 | 34 | 316 | 48% | 1590 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1337 | 39 | 258 | 46% | 1392 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1123 | 35 | 300 | 51% | 1096 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 906 | 79 | 110 | 38% | 1069 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 806 | 84 | 104 | 37% | 1023 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 730 | 90 | 92 | 38% | 937 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |