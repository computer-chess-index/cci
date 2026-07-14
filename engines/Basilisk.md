# Engine: Basilisk

Author: Miloslav Macůrek

Home: https://github.com/maelic13/basilisk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8.0 | 2026-07-08 | 2510<sub>(-29) | 2776<sub>(+21) | 2915<sub>(+73) |  |
| 1.7.0 | 2026-06-29 | 2539<sub>(+178) | 2755<sub>(+125) | 2842<sub>(+77) |  |
| 1.6.0 | 2026-06-20 | 2361<sub>(+20) | 2630<sub>(+42) | 2765<sub>(+54) |  |
| 1.5.0 | 2026-06-10 | 2341<sub>(-4) | 2588<sub>(+15) | 2711<sub>(+37) |  |
| 1.4.9 | 2026-05-29 | 2345<sub>(+new) | 2573<sub>(+new) | 2674<sub>(+new) |  |
| 1.4.8 | 2026-05-28 |  |  |  |  |
| 1.4.7 | 2026-05-28 |  |  |  |  |
| 1.4.6 | 2026-05-28 |  |  |  |  |
| 1.4.5 | 2026-05-28 |  |  |  |  |
| 1.4.4 | 2026-05-28 |  |  |  |  |
| 1.4.3 | 2026-05-27 |  |  |  |  |
| 1.4.2 | 2026-05-26 |  |  |  |  |
| 1.4.1 | 2026-05-26 |  |  |  |  |
| 1.4.0 | 2026-05-25 |  |  |  |  |
| 1.3.0 | 2026-05-25 |  |  |  |  |
| 1.2.3 | 2026-05-24 |  |  |  |  |
| 1.2.2 | 2026-05-22 |  |  |  |  |
| 1.2.1 | 2026-05-22 |  |  |  |  |
| 1.2.0 | 2026-05-21 | 2040<sub>(+new) | 2379<sub>(+new) | 2449<sub>(+new) |  |
| 1.1.0 | 2026-05-21 |  |  |  |  |
| 1.0.0 | 2026-05-20 | 2032 | 2344 | 2456 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Basilisk+<version>&body=###%20Engine%20name%0ABasilisk%0A%0A###%20Version%0A1.8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-14 06:22:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0", "1.7.0", "1.8.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2032, 2040, 2345, 2341, 2361, 2539, 2510]
  line "STC (8.0+0.08s)" [2032, 2040, 2345, 2341, 2361, 2539, 2510]
  line "LTC (60.0+0.60s)" [2344, 2379, 2573, 2588, 2630, 2755, 2776]
  line "VLTC (2m24s+1.12s)" [2456, 2449, 2674, 2711, 2765, 2842, 2915]
  line "VLTC (2m24s+1.12s)" [2456, 2449, 2674, 2711, 2765, 2842, 2915]
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
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0", "1.7.0", "1.8.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2032, 2040, 2345, 2341, 2361, 2539, 2510]
  line "STC (8.0+0.08s)" [2032, 2040, 2345, 2341, 2361, 2539, 2510]
  line "LTC (60.0+0.60s)" [2344, 2379, 2573, 2588, 2630, 2755, 2776]
  line "VLTC (2m24s+1.12s)" [2456, 2449, 2674, 2711, 2765, 2842, 2915]
  line "VLTC (2m24s+1.12s)" [2456, 2449, 2674, 2711, 2765, 2842, 2915]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2915 | 46 | 140 | 51% | 2907 | 41% |
| 1.8.0 | LTC <sub>(60.0+0.60s)</sub> | 2776 | 48 | 140 | 50% | 2774 | 33% |
| 1.8.0 | STC <sub>(8.0+0.08s)</sub> | 2510 | 45 | 160 | 50% | 2510 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2842 | 45 | 148 | 48% | 2859 | 43% |
| 1.7.0 | LTC <sub>(60.0+0.60s)</sub> | 2755 | 45 | 156 | 48% | 2773 | 33% |
| 1.7.0 | STC <sub>(8.0+0.08s)</sub> | 2539 | 45 | 170 | 51% | 2526 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2765 | 48 | 132 | 53% | 2743 | 37% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2630 | 54 | 112 | 48% | 2645 | 29% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2361 | 50 | 126 | 52% | 2348 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2711 | 34 | 284 | 52% | 2692 | 31% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2588 | 36 | 258 | 50% | 2585 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2341 | 36 | 278 | 51% | 2331 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2674 | 58 | 100 | 51% | 2666 | 26% |
| 1.4.9 | LTC <sub>(60.0+0.60s)</sub> | 2573 | 57 | 102 | 49% | 2587 | 25% |
| 1.4.9 | STC <sub>(8.0+0.08s)</sub> | 2345 | 64 | 86 | 53% | 2317 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2449 | 37 | 246 | 51% | 2442 | 27% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2379 | 37 | 244 | 51% | 2369 | 25% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2040 | 39 | 236 | 51% | 2029 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2456 | 48 | 154 | 49% | 2462 | 19% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2344 | 45 | 180 | 56% | 2261 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2032 | 50 | 152 | 57% | 1944 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |