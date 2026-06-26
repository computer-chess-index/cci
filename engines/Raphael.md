# Engine: Raphael

Author: Rei Meguro

Home: https://github.com/Orbital-Web/Raphael

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-05-17 | 3378<sub>(+35) | 3487<sub>(+20) | 3528<sub>(+23) |  |
| 4.0.0 | 2026-04-26 | 3343<sub>(+33) | 3467<sub>(+12) | 3505<sub>(+11) |  |
| 3.3.0 | 2026-04-06 | 3310<sub>(+93) | 3455<sub>(+95) | 3494<sub>(+66) |  |
| 3.2.0 | 2026-03-19 | 3217<sub>(+112) | 3360<sub>(+88) | 3428<sub>(+103) |  |
| 3.1.0 | 2026-03-01 | 3105<sub>(+313) | 3272<sub>(+249) | 3325<sub>(+232) |  |
| 3.0.0 | 2026-02-12 | 2792<sub>(+238) | 3023<sub>(+127) | 3093<sub>(+150) |  |
| 2.3.0 | 2026-01-26 | 2554<sub>(+50) | 2896<sub>(+134) | 2943<sub>(+81) |  |
| 2.2.0 | 2026-01-08 | 2504<sub>(+209) | 2762<sub>(+275) | 2862<sub>(+266) |  |
| 2.1.0 | 2026-01-01 | 2295<sub>(+185) | 2487<sub>(+139) | 2596<sub>(+273) |  |
| 2.0.0 | 2025-12-23 | 2110<sub>(+new) | 2348<sub>(+new) | 2323<sub>(+new) |  |
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

Generated: 2026-06-26 06:27:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0", "2.2.0", "2.3.0", "3.0.0", "3.1.0", "3.2.0", "3.3.0", "4.0.0", "4.1.0"]
  y-axis "Elo Rating" 2100 --> 3600
  line "STC (8.0+0.08s)" [2110, 2295, 2504, 2554, 2792, 3105, 3217, 3310, 3343, 3378]
  line "STC (8.0+0.08s)" [2110, 2295, 2504, 2554, 2792, 3105, 3217, 3310, 3343, 3378]
  line "LTC (60.0+0.60s)" [2348, 2487, 2762, 2896, 3023, 3272, 3360, 3455, 3467, 3487]
  line "VLTC (2m24s+1.12s)" [2323, 2596, 2862, 2943, 3093, 3325, 3428, 3494, 3505, 3528]
  line "VLTC (2m24s+1.12s)" [2323, 2596, 2862, 2943, 3093, 3325, 3428, 3494, 3505, 3528]
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
  line "STC (8.0+0.08s)" [2110, 2295, 2504, 2554, 2792, 3105, 3217, 3310, 3343, 3378]
  line "STC (8.0+0.08s)" [2110, 2295, 2504, 2554, 2792, 3105, 3217, 3310, 3343, 3378]
  line "LTC (60.0+0.60s)" [2348, 2487, 2762, 2896, 3023, 3272, 3360, 3455, 3467, 3487]
  line "VLTC (2m24s+1.12s)" [2323, 2596, 2862, 2943, 3093, 3325, 3428, 3494, 3505, 3528]
  line "VLTC (2m24s+1.12s)" [2323, 2596, 2862, 2943, 3093, 3325, 3428, 3494, 3505, 3528]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 27 | 310 | 50% | 3532 | 90% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 28 | 300 | 51% | 3483 | 84% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 3378 | 28 | 318 | 49% | 3386 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 27 | 318 | 50% | 3506 | 88% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 27 | 324 | 50% | 3467 | 83% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3343 | 27 | 344 | 50% | 3345 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 26 | 338 | 50% | 3498 | 83% |
| 3.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 26 | 346 | 52% | 3443 | 84% |
| 3.3.0 | STC <sub>(8.0+0.08s)</sub> | 3310 | 26 | 364 | 52% | 3293 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 26 | 354 | 51% | 3424 | 80% |
| 3.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 25 | 388 | 53% | 3343 | 80% |
| 3.2.0 | STC <sub>(8.0+0.08s)</sub> | 3217 | 26 | 376 | 49% | 3225 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3325 | 29 | 304 | 52% | 3310 | 65% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 31 | 270 | 51% | 3264 | 68% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 3105 | 33 | 260 | 50% | 3101 | 54% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3093 | 33 | 268 | 49% | 3104 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3023 | 30 | 332 | 48% | 3033 | 46% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2792 | 35 | 244 | 50% | 2795 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2943 | 40 | 188 | 50% | 2943 | 41% |
| 2.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2896 | 35 | 240 | 49% | 2905 | 43% |
| 2.3.0 | STC <sub>(8.0+0.08s)</sub> | 2554 | 41 | 196 | 50% | 2557 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 36 | 254 | 53% | 2831 | 33% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2762 | 40 | 196 | 52% | 2749 | 37% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2504 | 41 | 202 | 50% | 2498 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2596 | 47 | 140 | 52% | 2573 | 39% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2487 | 45 | 164 | 50% | 2484 | 27% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2295 | 48 | 142 | 51% | 2290 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2323 | 41 | 196 | 50% | 2348 | 35% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2348 | 50 | 130 | 48% | 2363 | 32% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2110 | 49 | 138 | 49% | 2120 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |