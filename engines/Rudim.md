# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.4 | 2026-06-20 | 2610<sub>(+84) | 2804<sub>(+39) | 2863<sub>(+1) |  |
| 3.0.3 | 2026-06-18 | 2526<sub>(+80) | 2765<sub>(+58) | 2862<sub>(+86) |  |
| 3.0.2 | 2026-06-13 | 2446<sub>(+170) | 2707<sub>(+173) | 2776<sub>(+184) |  |
| 3.0.1 | 2026-06-09 | 2276<sub>(+51) | 2534<sub>(+99) | 2592<sub>(+7) |  |
| 3.0.0 | 2026-06-06 | 2225<sub>(+new) | 2435<sub>(+new) | 2585<sub>(+new) |  |
| 2.2.2 | 2026-05-29 |  |  |  |  |
| 2.2.1 | 2026-05-27 |  |  |  |  |
| 2.2.0 | 2026-05-26 |  |  |  |  |
| 2.1.3 | 2026-05-23 |  |  |  |  |
| 2.1.2 | 2026-05-20 | 1801<sub>(+84) | 2020<sub>(+46) | 2148<sub>(+77) |  |
| 2.1.1 | 2026-05-16 | 1717<sub>(-12) | 1974<sub>(+31) | 2071<sub>(+130) |  |
| 2.1.0 | 2026-05-14 | 1729<sub>(+82) | 1943<sub>(+34) | 1941<sub>(-7) |  |
| 2.0.0 | 2026-05-03 | 1647<sub>(+59) | 1909<sub>(+70) | 1948<sub>(-4) |  |
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

Generated: 2026-06-30 22:20:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2", "3.0.0", "3.0.1", "3.0.2", "3.0.3", "3.0.4"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1588, 1647, 1729, 1717, 1801, 2225, 2276, 2446, 2526, 2610]
  line "STC (8.0+0.08s)" [1588, 1647, 1729, 1717, 1801, 2225, 2276, 2446, 2526, 2610]
  line "LTC (60.0+0.60s)" [1839, 1909, 1943, 1974, 2020, 2435, 2534, 2707, 2765, 2804]
  line "VLTC (2m24s+1.12s)" [1952, 1948, 1941, 2071, 2148, 2585, 2592, 2776, 2862, 2863]
  line "VLTC (2m24s+1.12s)" [1952, 1948, 1941, 2071, 2148, 2585, 2592, 2776, 2862, 2863]
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
  line "STC (8.0+0.08s)" [1588, 1647, 1729, 1717, 1801, 2225, 2276, 2446, 2526, 2610]
  line "STC (8.0+0.08s)" [1588, 1647, 1729, 1717, 1801, 2225, 2276, 2446, 2526, 2610]
  line "LTC (60.0+0.60s)" [1839, 1909, 1943, 1974, 2020, 2435, 2534, 2707, 2765, 2804]
  line "VLTC (2m24s+1.12s)" [1952, 1948, 1941, 2071, 2148, 2585, 2592, 2776, 2862, 2863]
  line "VLTC (2m24s+1.12s)" [1952, 1948, 1941, 2071, 2148, 2585, 2592, 2776, 2862, 2863]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2863 | 49 | 124 | 50% | 2859 | 44% |
| 3.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 40 | 184 | 51% | 2799 | 46% |
| 3.0.4 | STC <sub>(8.0+0.08s)</sub> | 2610 | 46 | 156 | 50% | 2608 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 38 | 208 | 53% | 2835 | 45% |
| 3.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2765 | 42 | 174 | 50% | 2765 | 39% |
| 3.0.3 | STC <sub>(8.0+0.08s)</sub> | 2526 | 40 | 204 | 50% | 2520 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2776 | 37 | 220 | 51% | 2768 | 43% |
| 3.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2707 | 35 | 248 | 52% | 2692 | 46% |
| 3.0.2 | STC <sub>(8.0+0.08s)</sub> | 2446 | 38 | 220 | 51% | 2438 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2592 | 37 | 232 | 50% | 2599 | 33% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 36 | 252 | 51% | 2520 | 34% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 2276 | 37 | 246 | 49% | 2286 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2585 | 48 | 150 | 50% | 2589 | 26% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 41 | 200 | 51% | 2421 | 30% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2225 | 32 | 338 | 57% | 2156 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 35 | 274 | 51% | 2138 | 26% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2020 | 37 | 244 | 51% | 2007 | 26% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 1801 | 40 | 228 | 51% | 1789 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2071 | 36 | 284 | 49% | 2078 | 23% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 1974 | 32 | 340 | 47% | 1990 | 26% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 1717 | 37 | 264 | 48% | 1727 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1941 | 34 | 292 | 51% | 1935 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1943 | 34 | 288 | 50% | 1944 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1729 | 35 | 276 | 49% | 1733 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1948 | 35 | 294 | 49% | 1960 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1909 | 33 | 336 | 51% | 1898 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1647 | 34 | 306 | 47% | 1679 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1952 | 37 | 264 | 47% | 1983 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1839 | 35 | 296 | 50% | 1843 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1588 | 34 | 320 | 53% | 1557 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |