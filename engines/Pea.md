# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 | 2691<sub>(+237) | 3032<sub>(+220) | 3059<sub>(+136) |  |
| 8.0 | 2026-05-02 | 2454<sub>(+117) | 2812<sub>(+128) | 2923<sub>(+118) |  |
| 7.0 | 2026-04-25 | 2337<sub>(+34) | 2684<sub>(+66) | 2805<sub>(+40) |  |
| 6.0 | 2026-04-20 | 2303<sub>(+321) | 2618<sub>(+220) | 2765<sub>(+218) |  |
| 5.0 | 2026-04-15 | 1982<sub>(+47) | 2398<sub>(+172) | 2547<sub>(+160) |  |
| 4.0 | 2026-04-11 | 1935<sub>(+220) | 2226<sub>(+167) | 2387<sub>(+178) |  |
| 3.0 | 2026-04-09 | 1715<sub>(+592) | 2059<sub>(+722) | 2209<sub>(+648) |  |
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

Generated: 2026-07-14 06:27:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [730, 1123, 1715, 1935, 1982, 2303, 2337, 2454, 2691]
  line "STC (8.0+0.08s)" [730, 1123, 1715, 1935, 1982, 2303, 2337, 2454, 2691]
  line "LTC (60.0+0.60s)" [806, 1337, 2059, 2226, 2398, 2618, 2684, 2812, 3032]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2209, 2387, 2547, 2765, 2805, 2923, 3059]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2209, 2387, 2547, 2765, 2805, 2923, 3059]
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
  line "STC (8.0+0.08s)" [730, 1123, 1715, 1935, 1982, 2303, 2337, 2454, 2691]
  line "STC (8.0+0.08s)" [730, 1123, 1715, 1935, 1982, 2303, 2337, 2454, 2691]
  line "LTC (60.0+0.60s)" [806, 1337, 2059, 2226, 2398, 2618, 2684, 2812, 3032]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2209, 2387, 2547, 2765, 2805, 2923, 3059]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2209, 2387, 2547, 2765, 2805, 2923, 3059]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3059 | 30 | 312 | 51% | 3051 | 51% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3032 | 32 | 284 | 48% | 3044 | 47% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2691 | 31 | 352 | 54% | 2660 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2923 | 30 | 358 | 49% | 2931 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2812 | 32 | 302 | 50% | 2811 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2454 | 31 | 356 | 52% | 2426 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2805 | 34 | 270 | 52% | 2789 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2684 | 35 | 266 | 50% | 2687 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2337 | 33 | 320 | 48% | 2361 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2765 | 36 | 248 | 52% | 2749 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2618 | 36 | 274 | 51% | 2607 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2303 | 32 | 344 | 54% | 2264 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2547 | 33 | 324 | 49% | 2560 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2398 | 36 | 268 | 50% | 2396 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1982 | 36 | 276 | 50% | 1982 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2387 | 34 | 310 | 54% | 2348 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2226 | 36 | 272 | 49% | 2237 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1935 | 39 | 248 | 52% | 1917 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2209 | 40 | 232 | 51% | 2203 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2059 | 39 | 246 | 48% | 2079 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1715 | 43 | 208 | 47% | 1746 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1561 | 34 | 316 | 48% | 1590 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1337 | 39 | 258 | 46% | 1392 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1123 | 35 | 300 | 51% | 1096 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 906 | 79 | 110 | 38% | 1069 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 806 | 84 | 104 | 37% | 1025 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 730 | 90 | 92 | 38% | 937 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |