# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.4 | 2026-06-20 | 2612<sub>(+85) | 2805<sub>(+39) | 2869<sub>(+7) |  |
| 3.0.3 | 2026-06-18 | 2527<sub>(+79) | 2766<sub>(+59) | 2862<sub>(+86) |  |
| 3.0.2 | 2026-06-13 | 2448<sub>(+172) | 2707<sub>(+173) | 2776<sub>(+183) |  |
| 3.0.1 | 2026-06-09 | 2276<sub>(+50) | 2534<sub>(+99) | 2593<sub>(+8) |  |
| 3.0.0 | 2026-06-06 | 2226<sub>(+new) | 2435<sub>(+new) | 2585<sub>(+new) |  |
| 2.2.2 | 2026-05-29 |  |  |  |  |
| 2.2.1 | 2026-05-27 |  |  |  |  |
| 2.2.0 | 2026-05-26 |  |  |  |  |
| 2.1.3 | 2026-05-23 |  |  |  |  |
| 2.1.2 | 2026-05-20 | 1802<sub>(+85) | 2020<sub>(+46) | 2148<sub>(+77) |  |
| 2.1.1 | 2026-05-16 | 1717<sub>(-14) | 1974<sub>(+31) | 2071<sub>(+128) |  |
| 2.1.0 | 2026-05-14 | 1731<sub>(+83) | 1943<sub>(+34) | 1943<sub>(-6) |  |
| 2.0.0 | 2026-05-03 | 1648<sub>(+60) | 1909<sub>(+70) | 1949<sub>(-3) |  |
| 1.5 | 2026-04-28 | 1588<sub>(+new) | 1839<sub>(+new) | 1952<sub>(+new) |  |
| 1.4.1 | 2024-12-18 |  |  |  |  |
| 1.3 | 2024-12-05 |  |  |  |  |
| 1.2 | 2022-02-24 |  |  |  |  |
| 1.1 | 2022-02-07 |  |  |  |  |
| 1.0 | 2022-02-06 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rudim+<version>&body=###%20Engine%20name%0ARudim%0A%0A###%20Version%0A3.0.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-06 06:28:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2", "3.0.0", "3.0.1", "3.0.2", "3.0.3", "3.0.4"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1588, 1648, 1731, 1717, 1802, 2226, 2276, 2448, 2527, 2612]
  line "STC (8.0+0.08s)" [1588, 1648, 1731, 1717, 1802, 2226, 2276, 2448, 2527, 2612]
  line "LTC (60.0+0.60s)" [1839, 1909, 1943, 1974, 2020, 2435, 2534, 2707, 2766, 2805]
  line "VLTC (2m24s+1.12s)" [1952, 1949, 1943, 2071, 2148, 2585, 2593, 2776, 2862, 2869]
  line "VLTC (2m24s+1.12s)" [1952, 1949, 1943, 2071, 2148, 2585, 2593, 2776, 2862, 2869]
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
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2", "3.0.0", "3.0.1", "3.0.2", "3.0.3", "3.0.4"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1588, 1648, 1731, 1717, 1802, 2226, 2276, 2448, 2527, 2612]
  line "STC (8.0+0.08s)" [1588, 1648, 1731, 1717, 1802, 2226, 2276, 2448, 2527, 2612]
  line "LTC (60.0+0.60s)" [1839, 1909, 1943, 1974, 2020, 2435, 2534, 2707, 2766, 2805]
  line "VLTC (2m24s+1.12s)" [1952, 1949, 1943, 2071, 2148, 2585, 2593, 2776, 2862, 2869]
  line "VLTC (2m24s+1.12s)" [1952, 1949, 1943, 2071, 2148, 2585, 2593, 2776, 2862, 2869]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 47 | 132 | 51% | 2859 | 45% |
| 3.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2805 | 39 | 192 | 51% | 2799 | 46% |
| 3.0.4 | STC <sub>(8.0+0.08s)</sub> | 2612 | 45 | 164 | 51% | 2607 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 38 | 208 | 53% | 2836 | 45% |
| 3.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2766 | 42 | 174 | 50% | 2765 | 39% |
| 3.0.3 | STC <sub>(8.0+0.08s)</sub> | 2527 | 40 | 204 | 50% | 2522 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2776 | 37 | 220 | 51% | 2768 | 43% |
| 3.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2707 | 35 | 248 | 52% | 2692 | 46% |
| 3.0.2 | STC <sub>(8.0+0.08s)</sub> | 2448 | 38 | 220 | 51% | 2439 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2593 | 37 | 232 | 50% | 2600 | 33% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 36 | 252 | 51% | 2520 | 34% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 2276 | 37 | 246 | 49% | 2286 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2585 | 48 | 150 | 50% | 2589 | 26% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 41 | 200 | 51% | 2422 | 30% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 32 | 338 | 57% | 2156 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 35 | 274 | 51% | 2138 | 26% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2020 | 37 | 244 | 51% | 2007 | 26% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 1802 | 40 | 228 | 51% | 1790 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2071 | 36 | 284 | 49% | 2078 | 23% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 1974 | 32 | 340 | 47% | 1990 | 26% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 1717 | 37 | 264 | 48% | 1727 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1943 | 34 | 292 | 51% | 1935 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1943 | 34 | 288 | 50% | 1944 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1731 | 35 | 276 | 49% | 1733 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1949 | 35 | 294 | 49% | 1960 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1909 | 33 | 336 | 51% | 1898 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1648 | 34 | 306 | 47% | 1679 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1952 | 37 | 264 | 47% | 1983 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1839 | 35 | 296 | 50% | 1843 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1588 | 34 | 320 | 53% | 1557 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |