# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 12.0 | 2026-05-08 | 3272<sub>(+43) | 3416<sub>(+10) | 3451<sub>(+18) |  |
| 11.0 | 2026-02-13 | 3229<sub>(+98) | 3406<sub>(+93) | 3433<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3131<sub>(+118) | 3313<sub>(+130) | 3375<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3013<sub>(+79) | 3183<sub>(+50) | 3235<sub>(+52) |  |
| 8.0 | 2025-11-27 | 2934<sub>(+177) | 3133<sub>(+148) | 3183<sub>(+125) |  |
| 7.0 | 2025-11-07 | 2757<sub>(+new) | 2985<sub>(+new) | 3058<sub>(+new) |  |
| 6.0 | 2025-10-21 |  |  |  |  |
| 5.1 | 2025-01-01 |  |  |  |  |
| 5.0 | 2024-12-05 |  |  |  |  |
| 4.1 | 2024-11-24 |  |  |  |  |
| 4.0 | 2024-10-18 |  |  |  |  |
| 3.0 | 2024-09-09 |  |  |  |  |
| 2.5 | 2024-07-25 |  |  |  |  |
| 2.4 | 2024-07-08 |  |  |  |  |
| 2.3 | 2024-05-09 |  |  |  |  |
| 2.2 | 2024-04-09 |  |  |  |  |
| 2.1 | 2024-01-25 |  |  |  |  |
| 2.0 | 2024-01-18 |  |  |  |  |
| 1.1 | 2024-01-08 |  |  |  |  |
| 1.0 | 2023-12-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tcheran+<version>&body=###%20Engine%20name%0ATcheran%0A%0A###%20Version%0A12.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-12 06:41:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0"]
  y-axis "Elo Rating" 2700 --> 3500
  line "STC (8.0+0.08s)" [2757, 2934, 3013, 3131, 3229, 3272]
  line "STC (8.0+0.08s)" [2757, 2934, 3013, 3131, 3229, 3272]
  line "LTC (60.0+0.60s)" [2985, 3133, 3183, 3313, 3406, 3416]
  line "VLTC (2m24s+1.12s)" [3058, 3183, 3235, 3375, 3433, 3451]
  line "VLTC (2m24s+1.12s)" [3058, 3183, 3235, 3375, 3433, 3451]
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
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0"]
  y-axis "Elo Rating" 2700 --> 3500
  line "STC (8.0+0.08s)" [2757, 2934, 3013, 3131, 3229, 3272]
  line "STC (8.0+0.08s)" [2757, 2934, 3013, 3131, 3229, 3272]
  line "LTC (60.0+0.60s)" [2985, 3133, 3183, 3313, 3406, 3416]
  line "VLTC (2m24s+1.12s)" [3058, 3183, 3235, 3375, 3433, 3451]
  line "VLTC (2m24s+1.12s)" [3058, 3183, 3235, 3375, 3433, 3451]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3451 | 25 | 380 | 49% | 3455 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 25 | 372 | 51% | 3413 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3272 | 25 | 414 | 52% | 3256 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 23 | 434 | 51% | 3429 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 24 | 424 | 51% | 3397 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3229 | 25 | 448 | 51% | 3227 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3375 | 27 | 336 | 49% | 3383 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3313 | 30 | 268 | 49% | 3324 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3131 | 31 | 286 | 52% | 3119 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3235 | 38 | 180 | 50% | 3233 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3183 | 39 | 168 | 52% | 3168 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3013 | 37 | 212 | 47% | 3042 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3183 | 44 | 132 | 50% | 3182 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3133 | 37 | 204 | 57% | 3077 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2934 | 42 | 164 | 47% | 2957 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3058 | 51 | 116 | 47% | 3082 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2985 | 49 | 130 | 50% | 2966 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2757 | 54 | 116 | 56% | 2680 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |