# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.1 | 2026-02-25 | 3193<sub>(+56) | 3364<sub>(+4) | 3390<sub>(-32) |  |
| 6.1 | 2026-02-10 | 3137<sub>(+1) | 3360<sub>(+16) | 3422<sub>(+25) |  |
| 6 | 2026-02-07 | 3136<sub>(+11) | 3344<sub>(+5) | 3397<sub>(+17) |  |
| 5.00.02 | 2025-09-24 | 3125<sub>(+new) | 3339<sub>(+new) | 3380<sub>(+new) |  |
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

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A6.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-13 06:48:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3125, 3136, 3137, 3193]
  line "STC (8.0+0.08s)" [3125, 3136, 3137, 3193]
  line "LTC (60.0+0.60s)" [3339, 3344, 3360, 3364]
  line "VLTC (2m24s+1.12s)" [3380, 3397, 3422, 3390]
  line "VLTC (2m24s+1.12s)" [3380, 3397, 3422, 3390]
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
  x-axis ["5.00.02", "6", "6.1", "6.1.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3125, 3136, 3137, 3193]
  line "STC (8.0+0.08s)" [3125, 3136, 3137, 3193]
  line "LTC (60.0+0.60s)" [3339, 3344, 3360, 3364]
  line "VLTC (2m24s+1.12s)" [3380, 3397, 3422, 3390]
  line "VLTC (2m24s+1.12s)" [3380, 3397, 3422, 3390]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3390 | 25 | 390 | 50% | 3390 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3364 | 26 | 360 | 50% | 3363 | 71% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3193 | 25 | 440 | 51% | 3187 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 31 | 256 | 50% | 3420 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 27 | 332 | 49% | 3364 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3137 | 32 | 276 | 51% | 3132 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 36 | 192 | 50% | 3395 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3344 | 33 | 228 | 52% | 3333 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3136 | 34 | 244 | 49% | 3143 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3380 | 27 | 356 | 54% | 3344 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3339 | 31 | 272 | 51% | 3317 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3125 | 32 | 280 | 55% | 3069 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |