# Engine: Raphael

Author: Rei Meguro

Home: https://github.com/Orbital-Web/Raphael

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-05-17 | 3378<sub>(+38) | 3480<sub>(+16) | 3525<sub>(+23) |  |
| 4.0.0 | 2026-04-26 | 3340<sub>(+32) | 3464<sub>(+12) | 3502<sub>(+11) |  |
| 3.3.0 | 2026-04-06 | 3308<sub>(+92) | 3452<sub>(+95) | 3491<sub>(+66) |  |
| 3.2.0 | 2026-03-19 | 3216<sub>(+114) | 3357<sub>(+86) | 3425<sub>(+103) |  |
| 3.1.0 | 2026-03-01 | 3102<sub>(+312) | 3271<sub>(+251) | 3322<sub>(+232) |  |
| 3.0.0 | 2026-02-12 | 2790<sub>(+236) | 3020<sub>(+126) | 3090<sub>(+148) |  |
| 2.3.0 | 2026-01-26 | 2554<sub>(+50) | 2894<sub>(+133) | 2942<sub>(+83) |  |
| 2.2.0 | 2026-01-08 | 2504<sub>(+209) | 2761<sub>(+276) | 2859<sub>(+263) |  |
| 2.1.0 | 2026-01-01 | 2295<sub>(+184) | 2485<sub>(+137) | 2596<sub>(+273) |  |
| 2.0.0 | 2025-12-23 | 2111<sub>(+new) | 2348<sub>(+new) | 2323<sub>(+new) |  |
| 1.8.0 | 2024-12-27 |  |  |  |  |
| 1.7.6 | 2024-12-16 |  |  |  |  |
| 1.7.0 | 2023-08-27 |  |  |  |  |
| 1.6.0 | 2023-08-21 |  |  |  |  |
| 1.5.0 | 2023-08-16 |  |  |  |  |
| 1.4.0 | 2023-08-10 |  |  |  |  |
| 1.3.0 | 2023-08-05 |  |  |  |  |
| 1.2.0 | 2023-07-24 |  |  |  |  |
| 1.1.0 | 2023-07-23 |  |  |  |  |
| 1.0.0 | 2023-07-19 |  |  |  |  |
| 0.5.1 | 2023-07-17 |  |  |  |  |
| 0.5.0 | 2023-07-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Raphael+<version>&body=###%20Engine%20name%0ARaphael%0A%0A###%20Version%0A4.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-18 06:31:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0", "2.2.0", "2.3.0", "3.0.0", "3.1.0", "3.2.0", "3.3.0", "4.0.0", "4.1.0"]
  y-axis "Elo Rating" 2100 --> 3600
  line "STC (8.0+0.08s)" [2111, 2295, 2504, 2554, 2790, 3102, 3216, 3308, 3340, 3378]
  line "STC (8.0+0.08s)" [2111, 2295, 2504, 2554, 2790, 3102, 3216, 3308, 3340, 3378]
  line "LTC (60.0+0.60s)" [2348, 2485, 2761, 2894, 3020, 3271, 3357, 3452, 3464, 3480]
  line "VLTC (2m24s+1.12s)" [2323, 2596, 2859, 2942, 3090, 3322, 3425, 3491, 3502, 3525]
  line "VLTC (2m24s+1.12s)" [2323, 2596, 2859, 2942, 3090, 3322, 3425, 3491, 3502, 3525]
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
  x-axis ["2.0.0", "2.1.0", "2.2.0", "2.3.0", "3.0.0", "3.1.0", "3.2.0", "3.3.0", "4.0.0", "4.1.0"]
  y-axis "Elo Rating" 2100 --> 3600
  line "STC (8.0+0.08s)" [2111, 2295, 2504, 2554, 2790, 3102, 3216, 3308, 3340, 3378]
  line "STC (8.0+0.08s)" [2111, 2295, 2504, 2554, 2790, 3102, 3216, 3308, 3340, 3378]
  line "LTC (60.0+0.60s)" [2348, 2485, 2761, 2894, 3020, 3271, 3357, 3452, 3464, 3480]
  line "VLTC (2m24s+1.12s)" [2323, 2596, 2859, 2942, 3090, 3322, 3425, 3491, 3502, 3525]
  line "VLTC (2m24s+1.12s)" [2323, 2596, 2859, 2942, 3090, 3322, 3425, 3491, 3502, 3525]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 28 | 290 | 49% | 3529 | 90% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 29 | 280 | 50% | 3479 | 84% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 3378 | 29 | 292 | 49% | 3386 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 27 | 318 | 50% | 3503 | 88% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 27 | 324 | 50% | 3464 | 83% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3340 | 27 | 344 | 50% | 3344 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 26 | 338 | 50% | 3495 | 83% |
| 3.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3452 | 26 | 346 | 52% | 3441 | 84% |
| 3.3.0 | STC <sub>(8.0+0.08s)</sub> | 3308 | 26 | 364 | 52% | 3290 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 26 | 354 | 51% | 3421 | 80% |
| 3.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 25 | 388 | 53% | 3340 | 80% |
| 3.2.0 | STC <sub>(8.0+0.08s)</sub> | 3216 | 26 | 376 | 49% | 3224 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3322 | 29 | 304 | 52% | 3308 | 65% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3271 | 31 | 270 | 51% | 3262 | 68% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 3102 | 33 | 260 | 50% | 3100 | 54% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3090 | 33 | 268 | 49% | 3101 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3020 | 30 | 332 | 48% | 3032 | 46% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2790 | 35 | 244 | 50% | 2793 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2942 | 40 | 188 | 50% | 2940 | 41% |
| 2.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2894 | 35 | 240 | 49% | 2904 | 43% |
| 2.3.0 | STC <sub>(8.0+0.08s)</sub> | 2554 | 41 | 196 | 50% | 2556 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 36 | 254 | 53% | 2830 | 33% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2761 | 40 | 196 | 52% | 2747 | 37% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2504 | 41 | 202 | 50% | 2498 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2596 | 47 | 140 | 52% | 2573 | 39% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2485 | 45 | 164 | 50% | 2484 | 27% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2295 | 48 | 142 | 51% | 2290 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2323 | 41 | 196 | 50% | 2348 | 35% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2348 | 50 | 130 | 48% | 2363 | 32% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2111 | 49 | 138 | 49% | 2120 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |