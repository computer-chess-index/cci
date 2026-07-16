# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3148<sub>(+39) | 3378<sub>(+21) | 3406<sub>(+24) |  |
| 4.0 | 2026-04-18 | 3109<sub>(+94) | 3357<sub>(+118) | 3382<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3015<sub>(+new) | 3239<sub>(+new) | 3308<sub>(+new) |  |
| 2.0 | 2025-08-23 |  |  |  |  |
| 1.0 | 2025-06-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eleanor+<version>&body=###%20Engine%20name%0AEleanor%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:24:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3015, 3109, 3148]
  line "STC (8.0+0.08s)" [3015, 3109, 3148]
  line "LTC (60.0+0.60s)" [3239, 3357, 3378]
  line "VLTC (2m24s+1.12s)" [3308, 3382, 3406]
  line "VLTC (2m24s+1.12s)" [3308, 3382, 3406]
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
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3015, 3109, 3148]
  line "STC (8.0+0.08s)" [3015, 3109, 3148]
  line "LTC (60.0+0.60s)" [3239, 3357, 3378]
  line "VLTC (2m24s+1.12s)" [3308, 3382, 3406]
  line "VLTC (2m24s+1.12s)" [3308, 3382, 3406]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 24 | 404 | 49% | 3411 | 82% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3378 | 26 | 366 | 49% | 3380 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3148 | 28 | 352 | 51% | 3140 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3382 | 29 | 284 | 50% | 3382 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 30 | 280 | 50% | 3356 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3109 | 32 | 264 | 50% | 3106 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3308 | 26 | 368 | 50% | 3310 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3239 | 27 | 358 | 52% | 3212 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3015 | 24 | 496 | 52% | 2986 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |