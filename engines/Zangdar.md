# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3287<sub>(+100) | 3424<sub>(+62) | 3488<sub>(+101) |  |
| 6.1.1 | 2026-02-25 | 3187<sub>(+54) | 3362<sub>(+6) | 3387<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3133<sub>(+1) | 3356<sub>(+16) | 3418<sub>(+27) |  |
| 6 | 2026-02-07 | 3132<sub>(+12) | 3340<sub>(+5) | 3391<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3120<sub>(+new) | 3335<sub>(+new) | 3376<sub>(+new) |  |
| 5.00.01 | 2025-09-23 |  |  |  |  |
| 5 | 2025-09-22 |  |  |  |  |
| 4.04.01 | 2025-08-31 |  |  |  |  |
| 4.04 | 2025-06-16 |  |  |  |  |
| 4.01 | 2025-05-17 |  |  |  |  |
| 3.04 | 2024-12-27 |  |  |  |  |
| 2.31.04 | 2024-12-08 |  |  |  |  |
| 2.31 | 2024-11-15 |  |  |  |  |
| 2.30 | 2024-08-25 |  |  |  |  |
| 2.29.01 | 2024-05-11 |  |  |  |  |
| 2.29 | 2024-05-07 |  |  |  |  |
| 2.27.08 | 2024-03-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:33:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3120, 3132, 3133, 3187, 3287]
  line "STC (8.0+0.08s)" [3120, 3132, 3133, 3187, 3287]
  line "LTC (60.0+0.60s)" [3335, 3340, 3356, 3362, 3424]
  line "VLTC (2m24s+1.12s)" [3376, 3391, 3418, 3387, 3488]
  line "VLTC (2m24s+1.12s)" [3376, 3391, 3418, 3387, 3488]
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
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3120, 3132, 3133, 3187, 3287]
  line "STC (8.0+0.08s)" [3120, 3132, 3133, 3187, 3287]
  line "LTC (60.0+0.60s)" [3335, 3340, 3356, 3362, 3424]
  line "VLTC (2m24s+1.12s)" [3376, 3391, 3418, 3387, 3488]
  line "VLTC (2m24s+1.12s)" [3376, 3391, 3418, 3387, 3488]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3488 | 78 | 40 | 49% | 3495 | 73% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3424 | 84 | 32 | 52% | 3414 | 84% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3287 | 61 | 68 | 49% | 3298 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 25 | 394 | 50% | 3386 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 26 | 364 | 51% | 3357 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3187 | 25 | 444 | 51% | 3183 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 31 | 256 | 50% | 3416 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3356 | 27 | 332 | 49% | 3360 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3133 | 32 | 276 | 51% | 3128 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3391 | 36 | 192 | 50% | 3391 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3340 | 33 | 228 | 52% | 3329 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3132 | 34 | 244 | 49% | 3137 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3376 | 27 | 356 | 54% | 3340 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3335 | 31 | 272 | 51% | 3313 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3120 | 32 | 280 | 55% | 3063 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |