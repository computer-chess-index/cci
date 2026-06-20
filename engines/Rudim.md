# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.3 | 2026-06-18 | 2552<sub>(+104) | 2799<sub>(+94) | 2877<sub>(+103) |  |
| 3.0.2 | 2026-06-13 | 2448<sub>(+172) | 2705<sub>(+171) | 2774<sub>(+182) |  |
| 3.0.1 | 2026-06-09 | 2276<sub>(+50) | 2534<sub>(+99) | 2592<sub>(+8) |  |
| 3.0.0 | 2026-06-06 | 2226<sub>(+new) | 2435<sub>(+new) | 2584<sub>(+new) |  |
| 2.2.2 | 2026-05-29 |  |  |  |  |
| 2.2.1 | 2026-05-27 |  |  |  |  |
| 2.2.0 | 2026-05-26 |  |  |  |  |
| 2.1.3 | 2026-05-23 |  |  |  |  |
| 2.1.2 | 2026-05-20 | 1802<sub>(+83) | 2020<sub>(+46) | 2148<sub>(+76) |  |
| 2.1.1 | 2026-05-16 | 1719<sub>(-12) | 1974<sub>(+31) | 2072<sub>(+129) |  |
| 2.1.0 | 2026-05-14 | 1731<sub>(+83) | 1943<sub>(+33) | 1943<sub>(-6) |  |
| 2.0.0 | 2026-05-03 | 1648<sub>(+59) | 1910<sub>(+70) | 1949<sub>(-3) |  |
| 1.5 | 2026-04-28 | 1589<sub>(+new) | 1840<sub>(+new) | 1952<sub>(+new) |  |
| 1.4.1 | 2024-12-18 |  |  |  |  |
| 1.3 | 2024-12-05 |  |  |  |  |
| 1.2 | 2022-02-24 |  |  |  |  |
| 1.1 | 2022-02-07 |  |  |  |  |
| 1.0 | 2022-02-06 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rudim+<version>&body=###%20Engine%20name%0ARudim%0A%0A###%20Version%0A3.0.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-20 06:28:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2", "3.0.0", "3.0.1", "3.0.2", "3.0.3"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1589, 1648, 1731, 1719, 1802, 2226, 2276, 2448, 2552]
  line "STC (8.0+0.08s)" [1589, 1648, 1731, 1719, 1802, 2226, 2276, 2448, 2552]
  line "LTC (60.0+0.60s)" [1840, 1910, 1943, 1974, 2020, 2435, 2534, 2705, 2799]
  line "VLTC (2m24s+1.12s)" [1952, 1949, 1943, 2072, 2148, 2584, 2592, 2774, 2877]
  line "VLTC (2m24s+1.12s)" [1952, 1949, 1943, 2072, 2148, 2584, 2592, 2774, 2877]
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
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2", "3.0.0", "3.0.1", "3.0.2", "3.0.3"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1589, 1648, 1731, 1719, 1802, 2226, 2276, 2448, 2552]
  line "STC (8.0+0.08s)" [1589, 1648, 1731, 1719, 1802, 2226, 2276, 2448, 2552]
  line "LTC (60.0+0.60s)" [1840, 1910, 1943, 1974, 2020, 2435, 2534, 2705, 2799]
  line "VLTC (2m24s+1.12s)" [1952, 1949, 1943, 2072, 2148, 2584, 2592, 2774, 2877]
  line "VLTC (2m24s+1.12s)" [1952, 1949, 1943, 2072, 2148, 2584, 2592, 2774, 2877]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2877 | 50 | 120 | 59% | 2799 | 45% |
| 3.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2799 | 57 | 88 | 55% | 2757 | 47% |
| 3.0.3 | STC <sub>(8.0+0.08s)</sub> | 2552 | 57 | 102 | 54% | 2511 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2774 | 37 | 220 | 51% | 2766 | 43% |
| 3.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2705 | 35 | 248 | 52% | 2691 | 46% |
| 3.0.2 | STC <sub>(8.0+0.08s)</sub> | 2448 | 38 | 220 | 51% | 2438 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2592 | 37 | 232 | 50% | 2599 | 33% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 36 | 252 | 51% | 2520 | 34% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 2276 | 37 | 246 | 49% | 2287 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2584 | 48 | 150 | 50% | 2588 | 26% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 41 | 200 | 51% | 2421 | 30% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 32 | 338 | 57% | 2156 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 35 | 274 | 51% | 2138 | 26% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2020 | 37 | 244 | 51% | 2009 | 26% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 1802 | 40 | 228 | 51% | 1790 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2072 | 36 | 284 | 49% | 2078 | 23% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 1974 | 32 | 340 | 47% | 1991 | 26% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 1719 | 37 | 264 | 48% | 1728 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1943 | 34 | 292 | 51% | 1935 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1943 | 34 | 288 | 50% | 1944 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1731 | 35 | 276 | 49% | 1735 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1949 | 35 | 294 | 49% | 1960 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 33 | 336 | 51% | 1898 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1648 | 34 | 306 | 47% | 1681 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1952 | 37 | 264 | 47% | 1983 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1840 | 35 | 296 | 50% | 1844 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1589 | 34 | 320 | 53% | 1558 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |