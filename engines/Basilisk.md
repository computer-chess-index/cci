# Engine: Basilisk

Author: Miloslav Macůrek

Home: https://github.com/maelic13/basilisk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8.0 | 2026-07-08 | 2503<sub>(-35) | 2778<sub>(+23) | 2898<sub>(+58) |  |
| 1.7.0 | 2026-06-29 | 2538<sub>(+178) | 2755<sub>(+125) | 2840<sub>(+75) |  |
| 1.6.0 | 2026-06-20 | 2360<sub>(+20) | 2630<sub>(+42) | 2765<sub>(+54) |  |
| 1.5.0 | 2026-06-10 | 2340<sub>(-5) | 2588<sub>(+15) | 2711<sub>(+37) |  |
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
| 1.2.0 | 2026-05-21 | 2039<sub>(+new) | 2379<sub>(+new) | 2449<sub>(+new) |  |
| 1.1.0 | 2026-05-21 |  |  |  |  |
| 1.0.0 | 2026-05-20 | 2030 | 2342 | 2456 |  |
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

Generated: 2026-07-13 06:23:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0", "1.7.0", "1.8.0"]
  y-axis "Elo Rating" 2000 --> 2900
  line "STC (8.0+0.08s)" [2030, 2039, 2345, 2340, 2360, 2538, 2503]
  line "STC (8.0+0.08s)" [2030, 2039, 2345, 2340, 2360, 2538, 2503]
  line "LTC (60.0+0.60s)" [2342, 2379, 2573, 2588, 2630, 2755, 2778]
  line "VLTC (2m24s+1.12s)" [2456, 2449, 2674, 2711, 2765, 2840, 2898]
  line "VLTC (2m24s+1.12s)" [2456, 2449, 2674, 2711, 2765, 2840, 2898]
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
  y-axis "Elo Rating" 2000 --> 2900
  line "STC (8.0+0.08s)" [2030, 2039, 2345, 2340, 2360, 2538, 2503]
  line "STC (8.0+0.08s)" [2030, 2039, 2345, 2340, 2360, 2538, 2503]
  line "LTC (60.0+0.60s)" [2342, 2379, 2573, 2588, 2630, 2755, 2778]
  line "VLTC (2m24s+1.12s)" [2456, 2449, 2674, 2711, 2765, 2840, 2898]
  line "VLTC (2m24s+1.12s)" [2456, 2449, 2674, 2711, 2765, 2840, 2898]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2898 | 61 | 84 | 51% | 2896 | 37% |
| 1.8.0 | LTC <sub>(60.0+0.60s)</sub> | 2778 | 52 | 120 | 50% | 2773 | 33% |
| 1.8.0 | STC <sub>(8.0+0.08s)</sub> | 2503 | 49 | 132 | 50% | 2507 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2840 | 45 | 148 | 48% | 2858 | 43% |
| 1.7.0 | LTC <sub>(60.0+0.60s)</sub> | 2755 | 45 | 156 | 48% | 2773 | 33% |
| 1.7.0 | STC <sub>(8.0+0.08s)</sub> | 2538 | 45 | 170 | 51% | 2525 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2765 | 48 | 132 | 53% | 2742 | 37% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2630 | 54 | 112 | 48% | 2645 | 29% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2360 | 50 | 126 | 52% | 2348 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2711 | 34 | 284 | 52% | 2692 | 31% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2588 | 36 | 258 | 50% | 2584 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2340 | 36 | 278 | 51% | 2331 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2674 | 58 | 100 | 51% | 2666 | 26% |
| 1.4.9 | LTC <sub>(60.0+0.60s)</sub> | 2573 | 57 | 102 | 49% | 2587 | 25% |
| 1.4.9 | STC <sub>(8.0+0.08s)</sub> | 2345 | 64 | 86 | 53% | 2315 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2449 | 37 | 246 | 51% | 2441 | 27% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2379 | 37 | 244 | 51% | 2369 | 25% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2039 | 39 | 236 | 51% | 2029 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2456 | 48 | 154 | 49% | 2462 | 19% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2342 | 45 | 180 | 56% | 2261 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2030 | 50 | 152 | 57% | 1943 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |