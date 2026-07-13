# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 | 2692<sub>(+238) | 3032<sub>(+221) | 3063<sub>(+140) |  |
| 8.0 | 2026-05-02 | 2454<sub>(+117) | 2811<sub>(+129) | 2923<sub>(+119) |  |
| 7.0 | 2026-04-25 | 2337<sub>(+35) | 2682<sub>(+66) | 2804<sub>(+39) |  |
| 6.0 | 2026-04-20 | 2302<sub>(+320) | 2616<sub>(+218) | 2765<sub>(+218) |  |
| 5.0 | 2026-04-15 | 1982<sub>(+47) | 2398<sub>(+173) | 2547<sub>(+162) |  |
| 4.0 | 2026-04-11 | 1935<sub>(+222) | 2225<sub>(+166) | 2385<sub>(+178) |  |
| 3.0 | 2026-04-09 | 1713<sub>(+590) | 2059<sub>(+722) | 2207<sub>(+646) |  |
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

Generated: 2026-07-13 06:38:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [730, 1123, 1713, 1935, 1982, 2302, 2337, 2454, 2692]
  line "STC (8.0+0.08s)" [730, 1123, 1713, 1935, 1982, 2302, 2337, 2454, 2692]
  line "LTC (60.0+0.60s)" [806, 1337, 2059, 2225, 2398, 2616, 2682, 2811, 3032]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2207, 2385, 2547, 2765, 2804, 2923, 3063]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2207, 2385, 2547, 2765, 2804, 2923, 3063]
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
  line "STC (8.0+0.08s)" [730, 1123, 1713, 1935, 1982, 2302, 2337, 2454, 2692]
  line "STC (8.0+0.08s)" [730, 1123, 1713, 1935, 1982, 2302, 2337, 2454, 2692]
  line "LTC (60.0+0.60s)" [806, 1337, 2059, 2225, 2398, 2616, 2682, 2811, 3032]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2207, 2385, 2547, 2765, 2804, 2923, 3063]
  line "VLTC (2m24s+1.12s)" [906, 1561, 2207, 2385, 2547, 2765, 2804, 2923, 3063]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3063 | 30 | 308 | 52% | 3050 | 51% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3032 | 32 | 284 | 48% | 3043 | 47% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2692 | 31 | 348 | 54% | 2658 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2923 | 30 | 358 | 49% | 2931 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2811 | 32 | 302 | 50% | 2809 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2454 | 31 | 356 | 52% | 2426 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2804 | 34 | 270 | 52% | 2788 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2682 | 35 | 266 | 50% | 2685 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2337 | 33 | 320 | 48% | 2361 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2765 | 36 | 248 | 52% | 2747 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2616 | 36 | 274 | 51% | 2606 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2302 | 32 | 344 | 54% | 2264 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2547 | 33 | 324 | 49% | 2560 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2398 | 36 | 268 | 50% | 2396 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1982 | 36 | 276 | 50% | 1982 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2385 | 34 | 310 | 54% | 2348 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2225 | 36 | 272 | 49% | 2237 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1935 | 39 | 248 | 52% | 1917 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 40 | 232 | 51% | 2203 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2059 | 39 | 246 | 48% | 2079 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1713 | 43 | 208 | 47% | 1746 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1561 | 34 | 316 | 48% | 1590 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1337 | 39 | 258 | 46% | 1392 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1123 | 35 | 300 | 51% | 1096 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 906 | 79 | 110 | 38% | 1069 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 806 | 84 | 104 | 37% | 1025 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 730 | 90 | 92 | 38% | 937 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |