# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 | 2688<sub>(+235) | 3044<sub>(+236) | 3055<sub>(+136) |  |
| 8.0 | 2026-05-02 | 2453<sub>(+117) | 2808<sub>(+128) | 2919<sub>(+118) |  |
| 7.0 | 2026-04-25 | 2336<sub>(+34) | 2680<sub>(+65) | 2801<sub>(+40) |  |
| 6.0 | 2026-04-20 | 2302<sub>(+320) | 2615<sub>(+219) | 2761<sub>(+215) |  |
| 5.0 | 2026-04-15 | 1982<sub>(+46) | 2396<sub>(+171) | 2546<sub>(+161) |  |
| 4.0 | 2026-04-11 | 1936<sub>(+221) | 2225<sub>(+166) | 2385<sub>(+178) |  |
| 3.0 | 2026-04-09 | 1715<sub>(+592) | 2059<sub>(+721) | 2207<sub>(+645) |  |
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

Generated: 2026-06-23 06:27:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [732, 1123, 1715, 1936, 1982, 2302, 2336, 2453, 2688]
  line "STC (8.0+0.08s)" [732, 1123, 1715, 1936, 1982, 2302, 2336, 2453, 2688]
  line "LTC (60.0+0.60s)" [806, 1338, 2059, 2225, 2396, 2615, 2680, 2808, 3044]
  line "VLTC (2m24s+1.12s)" [907, 1562, 2207, 2385, 2546, 2761, 2801, 2919, 3055]
  line "VLTC (2m24s+1.12s)" [907, 1562, 2207, 2385, 2546, 2761, 2801, 2919, 3055]
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
  line "STC (8.0+0.08s)" [732, 1123, 1715, 1936, 1982, 2302, 2336, 2453, 2688]
  line "STC (8.0+0.08s)" [732, 1123, 1715, 1936, 1982, 2302, 2336, 2453, 2688]
  line "LTC (60.0+0.60s)" [806, 1338, 2059, 2225, 2396, 2615, 2680, 2808, 3044]
  line "VLTC (2m24s+1.12s)" [907, 1562, 2207, 2385, 2546, 2761, 2801, 2919, 3055]
  line "VLTC (2m24s+1.12s)" [907, 1562, 2207, 2385, 2546, 2761, 2801, 2919, 3055]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3055 | 33 | 264 | 52% | 3042 | 49% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3044 | 35 | 240 | 51% | 3036 | 48% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2688 | 33 | 300 | 55% | 2645 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2919 | 30 | 358 | 49% | 2927 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 32 | 302 | 50% | 2807 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2453 | 31 | 356 | 52% | 2425 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2801 | 34 | 270 | 52% | 2785 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2680 | 35 | 266 | 50% | 2682 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2336 | 33 | 320 | 48% | 2360 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2761 | 36 | 248 | 52% | 2745 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2615 | 36 | 274 | 51% | 2604 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2302 | 32 | 344 | 54% | 2263 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2546 | 33 | 324 | 49% | 2558 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2396 | 36 | 268 | 50% | 2395 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1982 | 36 | 276 | 50% | 1982 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2385 | 34 | 310 | 54% | 2346 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2225 | 36 | 272 | 49% | 2237 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1936 | 39 | 248 | 52% | 1918 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 40 | 232 | 51% | 2202 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2059 | 39 | 246 | 48% | 2079 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1715 | 43 | 208 | 47% | 1747 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1562 | 34 | 316 | 48% | 1592 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1338 | 39 | 258 | 46% | 1392 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1123 | 35 | 300 | 51% | 1096 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 907 | 79 | 110 | 38% | 1069 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 806 | 84 | 104 | 37% | 1025 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 732 | 90 | 92 | 38% | 937 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |