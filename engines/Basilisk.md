# Engine: Basilisk

Author: Miloslav Macůrek

Home: https://github.com/maelic13/basilisk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7.0 | 2026-06-29 | 2543<sub>(+183) | 2763<sub>(+135) | 2843<sub>(+80) |  |
| 1.6.0 | 2026-06-20 | 2360<sub>(+20) | 2628<sub>(+41) | 2763<sub>(+54) |  |
| 1.5.0 | 2026-06-10 | 2340<sub>(-4) | 2587<sub>(+15) | 2709<sub>(+36) |  |
| 1.4.9 | 2026-05-29 | 2344<sub>(+new) | 2572<sub>(+new) | 2673<sub>(+new) |  |
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
| 1.2.0 | 2026-05-21 | 2037<sub>(+new) | 2377<sub>(+new) | 2448<sub>(+new) |  |
| 1.1.0 | 2026-05-21 |  |  |  |  |
| 1.0.0 | 2026-05-20 | 2030 | 2341 | 2454 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Basilisk+<version>&body=###%20Engine%20name%0ABasilisk%0A%0A###%20Version%0A1.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-07 06:23:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0", "1.7.0"]
  y-axis "Elo Rating" 2000 --> 2900
  line "STC (8.0+0.08s)" [2030, 2037, 2344, 2340, 2360, 2543]
  line "STC (8.0+0.08s)" [2030, 2037, 2344, 2340, 2360, 2543]
  line "LTC (60.0+0.60s)" [2341, 2377, 2572, 2587, 2628, 2763]
  line "VLTC (2m24s+1.12s)" [2454, 2448, 2673, 2709, 2763, 2843]
  line "VLTC (2m24s+1.12s)" [2454, 2448, 2673, 2709, 2763, 2843]
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
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0", "1.7.0"]
  y-axis "Elo Rating" 2000 --> 2900
  line "STC (8.0+0.08s)" [2030, 2037, 2344, 2340, 2360, 2543]
  line "STC (8.0+0.08s)" [2030, 2037, 2344, 2340, 2360, 2543]
  line "LTC (60.0+0.60s)" [2341, 2377, 2572, 2587, 2628, 2763]
  line "VLTC (2m24s+1.12s)" [2454, 2448, 2673, 2709, 2763, 2843]
  line "VLTC (2m24s+1.12s)" [2454, 2448, 2673, 2709, 2763, 2843]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2843 | 50 | 116 | 48% | 2857 | 45% |
| 1.7.0 | LTC <sub>(60.0+0.60s)</sub> | 2763 | 48 | 140 | 49% | 2774 | 32% |
| 1.7.0 | STC <sub>(8.0+0.08s)</sub> | 2543 | 46 | 158 | 52% | 2523 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2763 | 48 | 132 | 53% | 2741 | 37% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2628 | 54 | 112 | 48% | 2643 | 29% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2360 | 50 | 126 | 52% | 2346 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2709 | 34 | 284 | 52% | 2691 | 31% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2587 | 36 | 258 | 50% | 2583 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2340 | 36 | 278 | 51% | 2330 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2673 | 58 | 100 | 51% | 2665 | 26% |
| 1.4.9 | LTC <sub>(60.0+0.60s)</sub> | 2572 | 57 | 102 | 49% | 2585 | 25% |
| 1.4.9 | STC <sub>(8.0+0.08s)</sub> | 2344 | 64 | 86 | 53% | 2315 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2448 | 37 | 246 | 51% | 2439 | 27% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2377 | 37 | 244 | 51% | 2368 | 25% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2037 | 39 | 236 | 51% | 2028 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2454 | 48 | 154 | 49% | 2461 | 19% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2341 | 45 | 180 | 56% | 2260 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2030 | 50 | 152 | 57% | 1943 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |